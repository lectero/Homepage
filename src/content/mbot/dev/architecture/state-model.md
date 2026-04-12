---
---
# Tillståndsmodell & Versionshantering

## Översikt

MBot använder en tydlig separering mellan klient- och server-tillstånd. Klienten hanterar operationellt tillstånd (vad som behöver göras), servern hanterar affärslogik (hur det ska göras).

## Designprinciper

1. **Klienten har ingen policy-logik** — Endast servern bestämmer MANUAL vs IN_DEV
2. **Servern är auktoritativ** — Klienten följer serverns beslut
3. **DELAYED är klient-signal** — Indikerar connectivity-problem, inte server-beslut
4. **Idempotens** — Samma operation kan köras flera gånger utan bieffekter

## Klient State Store

SQLite-backed lokal state i `client/state_store.py`.

### Tabeller

#### pending_mail

Spårar individuella e-postmeddelanden:

```sql
CREATE TABLE pending_mail (
    entity_id TEXT PRIMARY KEY,        -- SHA256(tenant|graph|message_id)
    outlook_message_id TEXT NOT NULL,  -- Original Graph message ID
    status TEXT NOT NULL,              -- NEW, DELAYED, IN_DEV, DONE
    first_seen_ts TEXT NOT NULL,       -- När mailet upptäcktes
    last_attempt_ts TEXT,              -- Senaste submit-försök
    retry_count INTEGER DEFAULT 0,     -- Antal försök
    last_error TEXT                    -- Senaste felmeddelande
);

CREATE INDEX idx_pending_status_seen ON pending_mail(status, first_seen_ts);
```

#### jobs

Spårar server-side AI-jobb:

```sql
CREATE TABLE jobs (
    job_id TEXT PRIMARY KEY,           -- Server-tilldelat jobb-ID
    entity_id TEXT NOT NULL,           -- Koppling till pending_mail
    state TEXT NOT NULL,               -- QUEUED, PROCESSING, etc.
    last_polled_ts TEXT,               -- Senaste status-poll
    created_ts TEXT NOT NULL           -- När jobbet skapades
);

CREATE INDEX idx_jobs_entity ON jobs(entity_id);
```

### Statusflöde

```
Mail-livscykel:

[Outlook Inbox]
      │
      ▼
┌─────────────┐
│    NEW      │  ← Mail upptäckt, inte submittat
└─────────────┘
      │ submit
      ▼
┌─────────────┐
│   DELAYED   │  ← Server otillgänglig (retry later)
└─────────────┘
      │ submit (retry)
      ▼
┌─────────────┐
│   IN_DEV    │  ← Server accepterade för AI-draft
└─────────────┘
      │ poll job → DONE_AVAILABLE
      ▼
┌─────────────┐
│    DONE     │  ← Terminalt tillstånd, raderas
└─────────────┘
```

### Entity ID

Deterministisk identifierare för deduplicering:

```python
def compute_entity_id(tenant_id: str, provider: str, message_id: str) -> str:
    """SHA256(tenant_id|provider|message_id)"""
    raw = f"{tenant_id}|{provider}|{message_id}".encode("utf-8")
    return hashlib.sha256(raw).hexdigest()
```

Samma beräkning används av både klient och server för att säkerställa idempotens.

## Server State

Servern använder PostgreSQL för persistent state. Se `server/storage.py`.

### Draft Jobs

```sql
CREATE TABLE draft_jobs (
    job_id UUID PRIMARY KEY,
    entity_id TEXT NOT NULL UNIQUE,    -- Samma som klient
    tenant_id TEXT NOT NULL,
    state TEXT NOT NULL,               -- QUEUED, PROCESSING, DONE, FAILED
    created_at TIMESTAMP,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    error_message TEXT
);
```

### Jobbtillstånd

| Tillstånd | Beskrivning |
|-----------|-------------|
| `QUEUED` | Jobbet väntar på processering |
| `PROCESSING` | LLM arbetar på utkast |
| `DONE_AVAILABLE` | Utkast klart, tillgängligt i Outlook |
| `DONE_MANUAL` | Markerat för manuell hantering |
| `FAILED` | Jobbet misslyckades |

## UI-status (Outlook-kategorier)

Visuell status i Outlook via kategorier. Hanteras av `client/outlook_categories.py`.

### Kategorier

| Status | Kategori | Färg | Betydelse |
|--------|----------|------|-----------|
| NONE | (ingen) | — | Inte processerad ännu |
| DELAYED | Delayed-MBot | Gul | Connectivity-problem |
| IN_DEV | Processing-MBot | Orange | AI arbetar |
| AVAILABLE | Ready-MBot | Grön | Utkast klart |
| MANUAL | Manual-MBot | Röd | Kräver manuell hantering |
| FAILED | Failed-MBot | Lila | Fel uppstod |

### Monotona övergångar

UI-status kan endast gå framåt, aldrig bakåt:

```
NONE → DELAYED → IN_DEV → AVAILABLE
                       ↘ MANUAL
                       ↘ FAILED
```

Detta förhindrar förvirrande statusväxlingar i användarens inkorg.

```python
class OutlookCategoryManager:
    """Enforces monotone status transitions."""

    ALLOWED_TRANSITIONS = {
        UiStatus.NONE: {UiStatus.DELAYED, UiStatus.IN_DEV, UiStatus.MANUAL},
        UiStatus.DELAYED: {UiStatus.IN_DEV, UiStatus.MANUAL},
        UiStatus.IN_DEV: {UiStatus.AVAILABLE, UiStatus.MANUAL, UiStatus.FAILED},
        UiStatus.AVAILABLE: set(),  # Terminalt
        UiStatus.MANUAL: set(),     # Terminalt
        UiStatus.FAILED: set(),     # Terminalt
    }
```

## Main Loop-orkestrering

`client/main_loop.py` koordinerar alla faser:

```python
class ClientMainLoop:
    def run_forever(self):
        while True:
            self._discover_new_mail()   # Delta Query
            self._submit_pending_mail() # Till server
            self._poll_open_jobs()      # Kontrollera status
            time.sleep(self.poll_interval_s)
```

### Fas 1: Discover

```python
def _discover_new_mail(self):
    """Delta Query för inkrementell inbox-synk."""
    result = self.graph.list_inbox_messages_delta(
        mailbox=self.user_id,
        delta_link=self._delta_link,
    )

    for msg in result.messages:
        entity_id = self._compute_entity_id(msg.id)
        self.state.upsert_seen_mail(entity_id, msg.id)

    self._delta_link = result.delta_link
```

### Fas 2: Submit

```python
def _submit_pending_mail(self):
    """Submit pending mail till server."""
    pending = self.state.fetch_next_for_submit(limit=10)

    for item in pending:
        try:
            response = self.server.submit(payload)
            ui_status = UiStatus(response["ui_status"])

            if ui_status == UiStatus.MANUAL:
                self._apply_status(msg_id, UiStatus.NONE, UiStatus.MANUAL)
                self.state.set_status(entity_id, "DONE")

            elif ui_status == UiStatus.IN_DEV:
                self._apply_status(msg_id, UiStatus.NONE, UiStatus.IN_DEV)
                self.state.set_status(entity_id, "IN_DEV")
                self.state.upsert_job(response["job_id"], entity_id, "QUEUED")

        except ServerUnavailable:
            self.state.set_status(entity_id, "DELAYED")
            self._apply_status(msg_id, UiStatus.NONE, UiStatus.DELAYED)
```

### Fas 3: Poll Jobs

```python
def _poll_open_jobs(self):
    """Kontrollera status på aktiva jobb."""
    jobs = self.state.list_open_jobs(limit=20)

    for job in jobs:
        status = self.server.job_status(job["job_id"])

        if status["state"] == "DONE_AVAILABLE":
            self._apply_status(msg_id, UiStatus.IN_DEV, UiStatus.AVAILABLE)
            self.state.delete_job(job["job_id"])
            self.state.delete_mail(entity_id)

        elif status["state"] == "FAILED":
            self._apply_status(msg_id, UiStatus.IN_DEV, UiStatus.FAILED)
            self.state.delete_job(job["job_id"])
```

## Prioritering

Klienten prioriterar retry av gamla items före nya:

```python
def fetch_next_for_submit(self, limit=20):
    """DELAYED först (drain backlog), sedan NEW."""
    return self.execute("""
        SELECT * FROM pending_mail
        WHERE status IN ('DELAYED', 'NEW')
        ORDER BY
            CASE status
                WHEN 'DELAYED' THEN 0
                WHEN 'NEW' THEN 1
            END,
            first_seen_ts ASC
        LIMIT ?
    """, (limit,))
```

## SQLite-optimeringar

### WAL Mode

Write-Ahead Logging för bättre concurrency:

```python
conn.execute("PRAGMA journal_mode=WAL;")
conn.execute("PRAGMA busy_timeout=5000;")
```

### Atomicitet

Alla state-ändringar är atomära via SQLite transactions:

```python
with self._lock, self._conn() as conn:
    conn.execute("UPDATE pending_mail SET status = ? WHERE entity_id = ?", ...)
```

## Felåterhämtning

### Kraschåterhämtning

Vid omstart:
1. SQLite WAL spelar upp uncommitted writes
2. `fetch_next_for_submit()` returnerar DELAYED items först
3. Jobb pollas igen via `list_open_jobs()`

### Nätverkspartitionering

Vid connectivity-problem:
1. Items markeras DELAYED
2. UI-status sätts till DELAYED (gul)
3. Vid återanslutning prioriteras DELAYED items

### Serverfel

Vid serverfel:
1. Items markeras DELAYED med last_error
2. Exponential backoff via retry_count
3. Automatisk retry vid nästa loop

## Loggning

State-operationer loggas till `LogSource.DB` och `LogSource.CLIENT`:

```python
_log = get_logger(LogSource.DB)
_log.info("Client state store initialized", path=self.db_path)

_log = get_logger(LogSource.CLIENT)
_log.info("Submit completed", entity_id=entity_id[:20], ui_status=ui_status.value)
```

## Se även

- [Loggning](/products/mbot/docs/dev/logging) — Loggningssystemet
- [Graph-adapter](/products/mbot/docs/dev/architecture/graph-adapter) — Graph API-adaptern
- [Nätverkskonfiguration](/products/mbot/docs/dev/architecture/network-config) — Nätverkskonfiguration
