---
---
# Felhanteringsguide

## Översikt

Det här dokumentet beskriver felhanteringsmönstren i MBot-kodbasen.
Målet är **driftsäker resiliens**: graceful degradation, korrekt retry-logik
och uttömmande loggning för diagnostik.

## Exception-hierarkier

MBot använder **semantiska exception-hierarkier** som abstraherar bort
providerberoende fel och möjliggör konsekvent hantering i hela kodbasen.

### Databasfel (`shared/db_exceptions.py`)

```
MbotDatabaseError (base)
├── MbotDatabaseConnectionError  - Kan inte ansluta/öppna databas
├── MbotDatabaseLockError        - Databasen är låst (transient, retry)
├── MbotDatabaseIntegrityError   - Constraint-brott
├── MbotDatabaseIOError          - Disk I/O-fel
└── MbotDatabaseCorruptError     - Databasfilen är korrupt
```

**Nyckelinsikt**: `MbotDatabaseLockError` är transient och bör återförsökas med
exponential backoff. Övriga fel är vanligtvis permanenta.

### LLM/Pipeline-fel (`server/mailbot_engine/errors.py`)

```
MailbotError (base)
├── FatalError      - Systemet trasigt, kräver omedelbar åtgärd
├── TransientError  - Tillfälligt, retry senare (har retry_after-hint)
└── ContentError    - Innehållsproblem, kan behöva manuell hantering
```

**Användningsmönster i worker**:
- `FatalError` → Logga CRITICAL, markera jobb FAILED, avisera ops
- `TransientError` → Logga WARNING, markera jobb RETRY, respektera retry_after
- `ContentError` → Logga WARNING, markera jobb MANUAL, routa till människa

### Graph API-fel (`shared/graph/exceptions.py`)

```
MbotGraphError (base)
├── MbotAuthenticationError  - Token ogiltig/utgången
├── MbotPermissionError      - Otillräckliga behörigheter
├── MbotNotFoundError        - Resurs borttagen/saknad (permanent)
├── MbotThrottleError        - Rate-limitad (transient)
├── MbotDeltaSyncExpired     - Delta-token utgången, full sync krävs
└── MbotNetworkError         - Nätverks-/anslutningsproblem (transient)
```

## Felklassificering: Transient vs Permanent

Denna distinktion är **kritisk** för retry-logik:

| Feltyp | Transient? | Åtgärd |
|--------|------------|--------|
| Nätverkstimeout | Ja | Retry med backoff |
| Rate-limitad | Ja | Retry efter fördröjning |
| Databasen låst | Ja | Retry med backoff |
| Autentisering misslyckad | Nej | Avisera, fixa credentials |
| Resurs hittades inte | Nej | Markera klart, hoppa över |
| Constraint-brott | Nej | Fixa data eller logik |
| Disk full | Kanske | Avisera, kan återhämtas |

## Retry-mönster

### Databasoperationer

Använd `_with_db_retry()` för alla databasskrivningar:

```python
def _with_db_retry(operation: str, table: str, func: Callable[[], T]) -> T:
    """
    Kör med retry vid lås-contention.

    - Försöker upp till 3 gånger vid MbotDatabaseLockError
    - Exponential backoff: 50ms, 100ms, 200ms
    - Övriga fel höjs omedelbart
    """
```

### Client Backoff (externa tjänster)

Använd `BackoffController` för server/API-retries:

```python
backoff = BackoffController()  # Default: 25% jitter

if backoff.can_attempt(retry_count=item.retry_count,
                       last_attempt_ts=item.last_attempt_ts):
    # OK att försöka igen
else:
    # Fortfarande i backoff-period
```

**Varför jitter?** Förhindrar "thundering herd" när servern återhämtas.

## Loggningsstandarder

### Loggnivåer

| Nivå | När den används |
|------|-----------------|
| `CRITICAL` | Systemet trasigt, omedelbar uppmärksamhet krävs |
| `ERROR` | Operationen misslyckades, behöver utredning |
| `WARNING` | Återhämtningsbart problem, transient fel |
| `INFO` | Normala operationer, milstolpar |
| `DEBUG` | Detaljerad diagnostik |

### Obligatoriska kontextfält

Inkludera alltid relevant kontext i strukturerade loggar:

```python
# Bra - inkluderar kontext för felsökning
_log.error("Failed to fetch message",
           entity_id=item.entity_id[:20],
           error=str(e),
           retry_count=item.retry_count)

# Dåligt - ingen kontext
_log.error(f"Error: {e}")
```

### Timing/Latens

Inkludera `duration_ms` för externa anrop:

```python
start = time.perf_counter()
result = external_api_call()
duration_ms = int((time.perf_counter() - start) * 1000)
_log.info("API call completed", duration_ms=duration_ms)
```

## Mönster per lager

### 1. API Endpoints (FastAPI)

```python
@app.post("/v1/endpoint")
def endpoint(payload: dict):
    try:
        result = do_work()
        _log.info("Operation completed", ...)
        return {"ok": True, "result": result}
    except PermissionError as e:
        _log.error("Permission denied", path=..., error=str(e))
        raise HTTPException(status_code=500, detail="Permission denied")
    except OSError as e:
        _log.error("I/O error", error=str(e), errno=e.errno)
        raise HTTPException(status_code=500, detail=f"I/O error: {e}")
    except Exception as e:
        _log.error("Unexpected error", error=str(e), exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))
```

### 2. Worker/Bakgrundsjobb

```python
try:
    result = process_job(job)
    _log.info("Job completed", job_id=job_id)
except FatalError as e:
    _log.critical("Fatal error", job_id=job_id, error=str(e))
    mark_failed(job_id, terminal=True)
except TransientError as e:
    _log.warning("Transient error", job_id=job_id, retry_after=e.retry_after)
    mark_retry(job_id, retry_after=e.retry_after)
except ContentError as e:
    _log.warning("Content error", job_id=job_id, error=str(e))
    mark_manual(job_id)
except Exception as e:
    _log.error("Unexpected error", job_id=job_id, error=str(e), exc_info=True)
    mark_failed(job_id)
```

### 3. Client Loop (externa API-anrop)

```python
try:
    msg = graph.get_message(message_id)
except MbotNotFoundError:
    # Permanent - resurs borttagen
    _log.info("Message not found", message_id=message_id[:20])
    state.set_status(entity_id, "DONE", last_error="message_deleted")
    state.delete_mail(entity_id)
except (MbotAuthenticationError, MbotPermissionError) as e:
    # Allvarligt men krascha inte
    _log.error("Auth error", error=str(e))
    state.set_status(entity_id, "DELAYED", last_error=str(e))
except MbotGraphError as e:
    # Transient - retry senare
    _log.warning("Graph error", error=str(e))
    state.set_status(entity_id, "DELAYED", last_error=str(e))
```

### 4. Databasoperationer

```python
def upsert_record(self, data: dict) -> None:
    def _do_upsert() -> None:
        with self._lock:
            self._conn.execute(...)
            self._conn.commit()

    _with_db_retry("UPSERT", "table_name", _do_upsert)
```

## Checklista för ny kod

Vid ny funktionalitet, kontrollera att:

- [ ] **Exception-hantering**: Fånga specifika exceptions, inte `except:`
- [ ] **Transient vs permanent**: Klassificera fel korrekt för retry-logik
- [ ] **Strukturerad loggning**: Inkludera kontextfält (entity_id, duration_ms, etc.)
- [ ] **Loggnivåer**: Använd rätt nivå (ERROR vid misslyckanden, WARNING vid transient)
- [ ] **Timing**: Lägg till duration_ms för externa anrop (API, LLM, databas)
- [ ] **Graceful degradation**: Krascha inte vid återhämtningsbara fel
- [ ] **Feloversättning**: Mappa provider-fel till semantiska exceptions

## Filreferens

| Fil | Syfte |
|-----|-------|
| `shared/db_exceptions.py` | Databas-exception-hierarki |
| `shared/graph/exceptions.py` | Graph API-exception-hierarki |
| `server/mailbot_engine/errors.py` | LLM pipeline-exception-hierarki |
| `shared/logging.py` | Strukturerad loggningskonfiguration |
| `client/backoff.py` | Exponential backoff med jitter |
| `server/storage.py` | Databas retry-mönsterexempel |
| `client/state_store.py` | Klientside databas retry-mönster |
| `server/worker.py` | Worker-felhanteringsmönster |
| `client/main_loop.py` | Client loop-felhanteringsmönster |
