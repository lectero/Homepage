---
---
# MBot Logging Standard

## Översikt

Strukturerat loggningssystem för MBot med konsekvent formatering i alla komponenter.

## Quick Start

```python
from shared.logging import configure_logging

# Enklast - bara sätt nivå, filer skapas automatiskt i ./logs/
configure_logging(level="DEBUG")

# Nollställ loggfiler vid start
configure_logging(level="INFO", append=False)
```

Eller via miljövariabel (ingen kodändring behövs):
```bash
MBOT_LOG_LEVEL=DEBUG python -m server.app
```

## Loggnivåer (5)

| Nivå | Värde | Användning |
|------|-------|------------|
| `DEBUG` | 10 | Utvecklarinfo, tracing, verbose detaljer |
| `INFO` | 20 | Normala operationer, viktiga händelser |
| `WARNING` | 30 | Potentiella problem, försämrad funktion |
| `ERROR` | 40 | Misslyckanden som påverkar drift |
| `CRITICAL` | 50 | Systemet kan inte fortsätta |

## Loggkällor (13)

| Källa | Beskrivning | Primära filer |
|-------|-------------|---------------|
| `SERVER` | Server lifecycle, startup/shutdown | `server/app.py` |
| `CLIENT` | Client runtime, main loop | `client/main_loop.py`, `client/runtime.py` |
| `GRAPH` | Microsoft Graph API-anrop | `client/graph/adapter.py`, `transport.py` |
| `AUTH` | Token-hantering, MSAL | `client/graph/auth.py` |
| `SYNC` | Mail-synkronisering, delta queries | `client/mail_scanner.py` |
| `DB` | SQLite-operationer | `server/storage.py`, `client/state_store.py` |
| `LLM` | OpenAI/Claude API-anrop, utkastgenerering | `server/mailbot_engine/llm_openai.py` |
| `MAIL` | Mail-operationer, kategorier | `client/outlook_categories.py` |
| `NETWORK` | Retry-logik, timeouts, HTTPS | `shared/network_config.py` |
| `CONFIG` | Konfiguration, tenant-hantering | `server/tenants.py` |
| `WORKER` | Bakgrundsjobb, draft-processering | `server/worker.py` |
| `WEBUI_SERVER` | Admin UI backend | `client/webui/server.py` |
| `WEBUI_CLIENT` | Admin UI frontend (JavaScript) | `client/webui/static/*.js` |

## Outputformat

### Konsol (läsbart)

```
2025-01-24 10:23:45 [GRAPH] LOG-WARNING: Rate limit approaching (pct=80)
2025-01-24 10:23:46 [AUTH] LOG-INFO: Token acquired from cache
2025-01-24 10:23:47 [SERVER] LOG-ERROR: Request failed [234ms]
```

### JSON-lines (maskinläsbart)

```json
{"ts":"2025-01-24T10:23:45Z","src":"GRAPH","level":"WARNING","msg":"Rate limit approaching","data":{"pct":80}}
{"ts":"2025-01-24T10:23:46Z","src":"AUTH","level":"INFO","msg":"Token acquired from cache"}
{"ts":"2025-01-24T10:23:47Z","src":"SERVER","level":"ERROR","msg":"Request failed","duration_ms":234,"req_id":"abc-123"}
```

## Fält

| Fält | Typ | Obligatorisk | Beskrivning |
|------|-----|--------------|-------------|
| `ts` | string | Ja | ISO 8601-tidsstämpel (UTC) |
| `src` | string | Ja | Källidentifierare (en av 13) |
| `level` | string | Ja | Loggnivånamn |
| `msg` | string | Ja | Läsbart meddelande |
| `req_id` | string | Nej | Korrelations-ID för request-tracing |
| `tenant` | string | Nej | Tenant-identifierare |
| `duration_ms` | int | Nej | Operationens varaktighet i millisekunder |
| `data` | object | Nej | Ytterligare strukturerad data |

## Användning

### Grundläggande loggning

```python
from shared.logging import get_logger, LogSource

# Hämta logger för din källa
_log = get_logger(LogSource.GRAPH)

# Logga på olika nivåer
_log.debug("Fetching messages", count=10)
_log.info("Sync completed", messages=47)
_log.warning("Rate limit approaching", pct=80)
_log.error("API call failed", error=str(e))
_log.critical("Cannot connect to Graph API")
```

### Med kontext

```python
# Sätt korrelations-ID för ett request
_log.info("Processing request", req_id="abc-123", tenant="contoso")

# Använd context manager för tillfällig kontext
with _log.context(req_id="abc-123", tenant="contoso"):
    _log.info("Step 1")
    _log.info("Step 2")  # Båda får req_id och tenant
```

### Tidsmätning

```python
from shared.logging import timed_operation

with timed_operation(_log, "Fetching inbox", count=50):
    messages = graph.list_inbox_messages(...)
# Loggar: "Fetching inbox started" och "Fetching inbox completed [234ms]"
```

### Konfiguration

```python
from shared.logging import configure_logging

# Konfigurera vid applikationsstart
configure_logging(
    level="DEBUG",           # Miniminivå
    json_output=False,       # Läsbar konsol-output
    log_file="logs/app.log", # Valfritt: JSON-lines-fil
    error_file="logs/error.log",  # Valfritt: bara ERROR+
)
```

## Filstruktur (standard)

```
logs/
├── mbot.log          # Alla loggar (JSON-lines)
├── mbot-error.log    # Bara ERROR + CRITICAL
└── mbot-debug.log    # Bara DEBUG (skapas bara om level=DEBUG)
```

## Miljövariabler

| Variabel | Beskrivning | Default |
|----------|-------------|---------|
| `MBOT_LOG_LEVEL` | DEBUG, INFO, WARNING, ERROR, CRITICAL | INFO |
| `MBOT_LOG_DIR` | Katalog för loggfiler | ./logs |
| `MBOT_LOG_JSON` | true/false för JSON i konsol | false |
| `MBOT_LOG_APPEND` | true=append, false=nollställ | true |

## Startexempel

### Server
```bash
# Standard
python -m server.app

# Debug med nollställda filer
MBOT_LOG_LEVEL=DEBUG MBOT_LOG_APPEND=false python -m server.app

# JSON-output till konsol
MBOT_LOG_JSON=true python -m server.app
```

### I kod
```python
from shared.logging import configure_logging

# Enkel startup
configure_logging(level="INFO")

# Nollställ filer vid start
configure_logging(level="DEBUG", append=False)

# Custom katalog
import os
os.environ["MBOT_LOG_DIR"] = "/var/log/mbot"
configure_logging(level="INFO")
```

## Best Practices

1. **Välj rätt nivå**
   - DEBUG: Detaljerad tracing, bara för utvecklare
   - INFO: Affärshändelser, normala operationer
   - WARNING: Något oväntat men återhämtningsbart
   - ERROR: Operationen misslyckades, kräver uppmärksamhet
   - CRITICAL: Systemet trasigt, omedelbar åtgärd krävs

2. **Inkludera kontext**
   - Inkludera alltid relevanta ID:n (tenant, entity, job)
   - Använd `duration_ms` för prestandakänsliga operationer
   - Lägg till `req_id` för request-korrelation

3. **Håll meddelanden åtgärdsbara**
   - Dåligt: "Error occurred"
   - Bra: "Failed to fetch inbox messages after 3 retries"

4. **Strukturerad data framför stränginterpolation**
   - Dåligt: `_log.info(f"Processed {count} messages")`
   - Bra: `_log.info("Processing complete", count=count)`

## Grep-exempel

```bash
# Hitta alla fel från GRAPH-källan
grep '"src":"GRAPH"' logs/app.log | grep '"level":"ERROR"'

# Hitta långsamma operationer (>1000ms)
grep -E '"duration_ms":[0-9]{4,}' logs/app.log

# Hitta alla loggar för en specifik tenant
grep '"tenant":"contoso"' logs/app.log

# Spåra ett request genom systemet
grep '"req_id":"abc-123"' logs/app.log
```
