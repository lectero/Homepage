---
---
# Nätverkskonfiguration & HTTPS

## Översikt

MBot använder en centraliserad nätverkskonfiguration för konsistenta timeouts, retry-logik och TLS-inställningar. All nätverkskod går genom `shared/network_config.py`.

## Säkerhetsmodell

### HTTPS-krav

**HTTPS krävs alltid för remote servers.** HTTP tillåts endast för localhost/127.0.0.1 (lokal utveckling).

```python
from shared.network_config import validate_https_url

# OK
validate_https_url("https://api.example.com")
validate_https_url("http://localhost:8080")  # OK för localhost

# Fel — kastar ValueError
validate_https_url("http://api.example.com")
# ValueError: HTTP is not allowed for remote servers. Use HTTPS: http://api.example.com
```

### SSL/TLS

- Certifikat verifieras alltid (`VERIFY_SSL = True`)
- Ingen möjlighet att inaktivera verifiering
- Moderna TLS-versioner via Python requests

## Timeout-konfiguration

Centraliserade timeouts för olika operationstyper:

| Operation | Connect | Read | Användning |
|-----------|---------|------|------------|
| Default | 5s | 30s | Generella anrop |
| Health | 5s | 5s | Health checks |
| Submit | 5s | 15s | Skicka data till server |
| Job | 5s | 10s | Polla jobbstatus |

### Användning

```python
from shared.network_config import NetworkConfig
import requests

# Generellt anrop
response = requests.get(url, timeout=NetworkConfig.timeout_tuple())

# Health check (kort timeout)
response = requests.get(health_url, timeout=NetworkConfig.timeout_health())

# Submit-operation
response = requests.post(url, json=data, timeout=NetworkConfig.timeout_submit())

# Custom timeout
response = requests.get(url, timeout=NetworkConfig.timeout_tuple(connect=3.0, read=60.0))
```

## Retry-logik

### Automatisk retry

MBot använder två metoder för retry:

1. **Session med retry** — För upprepade anrop
2. **Standalone retry** — För enskilda anrop

### Resilient Session

```python
from shared.network_config import create_resilient_session, NetworkConfig

# Skapa session med automatisk retry
session = create_resilient_session()

# Session retry:ar automatiskt vid:
# - Connection errors
# - Timeout errors
# - HTTP 500, 502, 503, 504, 429
response = session.get(url, timeout=NetworkConfig.timeout_tuple())
```

### Standalone Retry

```python
from shared.network_config import request_with_retry, NetworkConfig

# Enskilt anrop med retry
response = request_with_retry(
    'get',
    url,
    max_attempts=3,
    timeout=NetworkConfig.timeout_health(),
)
```

### Backoff-strategi

```
Försök 1: Omedelbart
Försök 2: ~1s fördröjning (1.0 * backoff_factor + jitter)
Försök 3: ~2s fördröjning (2.0 * backoff_factor + jitter)
Max fördröjning: 10s (capped)
```

Jitter (0–0.5s) förhindrar "thundering herd" vid återhämtning.

## Konfigurationskonstanter

```python
@dataclass(frozen=True)
class NetworkConfig:
    # Connection timeout
    CONNECT_TIMEOUT: float = 5.0

    # Read timeouts
    READ_TIMEOUT_DEFAULT: float = 30.0
    READ_TIMEOUT_HEALTH: float = 5.0
    READ_TIMEOUT_SUBMIT: float = 15.0
    READ_TIMEOUT_JOB: float = 10.0

    # Retry
    MAX_RETRIES: int = 3
    BACKOFF_FACTOR: float = 1.0
    BACKOFF_MAX: float = 10.0
    BACKOFF_JITTER: float = 0.5

    # HTTP-statuskoder att retry:a vid
    RETRY_STATUS_CODES: Tuple[int, ...] = (500, 502, 503, 504, 429)

    # TLS
    VERIFY_SSL: bool = True
```

## Komponenter som använder NetworkConfig

| Komponent | Fil | Användning |
|-----------|-----|------------|
| Graph Transport | `client/graph/transport.py` | MS Graph API-anrop |
| Server Client | `client/server_client.py` | MBot server-kommunikation |
| WebUI | `client/webui/server.py` | Health/quota checks |

## Rate Limiting

### Microsoft Graph

Graph API returnerar 429 vid rate limiting. NetworkConfig hanterar detta via:

1. Automatisk retry vid 429
2. `Retry-After`-header respekteras
3. Exponential backoff mellan retries

### MBot Server

Servern använder liknande mönster för stabilitet:

```python
RETRY_STATUS_CODES = (500, 502, 503, 504, 429)
```

## Felhantering

### Nätverksfel

```python
from requests.exceptions import ConnectionError, Timeout

try:
    response = request_with_retry('get', url)
except ConnectionError:
    # Alla retries misslyckades — nätverksproblem
    _log.error("Network unreachable after retries", url=url)
except Timeout:
    # Alla retries timeout:ade
    _log.error("Request timed out after retries", url=url)
```

### HTTP-fel

```python
response = session.get(url, timeout=NetworkConfig.timeout_tuple())

if response.status_code == 401:
    # Autentisering misslyckad — behöver refresh token
    raise AuthenticationError()
elif response.status_code == 403:
    # Åtkomst nekad
    raise PermissionError()
elif response.status_code >= 400:
    # Annat fel — logga och hantera
    _log.error("HTTP error", status=response.status_code, body=response.text[:200])
```

## Loggning

Nätverksoperationer loggas till `LogSource.NETWORK`:

```python
from shared.logging import get_logger, LogSource
_log = get_logger(LogSource.NETWORK)

_log.debug("Retrying request", method="get", attempt=2, delay_s=1.5)
_log.warning("Request failed after retries", method="get", url=url, attempts=3)
```

## Miljökonfiguration

### Produktion vs Utveckling

```python
@classmethod
def is_production(cls) -> bool:
    """Check if running in production mode."""
    env = os.environ.get("MBOT_ENV", "").lower()
    return env in ("production", "prod")

@classmethod
def require_https(cls) -> bool:
    """Check if HTTPS is required."""
    return cls.is_production()
```

### Miljövariabler

| Variabel | Beskrivning | Default |
|----------|-------------|---------|
| `MBOT_ENV` | `production` eller `development` | (development) |

## Best Practices

### 1. Använd alltid timeout

```python
# Bra
response = requests.get(url, timeout=NetworkConfig.timeout_tuple())

# Dåligt — kan hänga för evigt
response = requests.get(url)
```

### 2. Använd session för upprepade anrop

```python
# Bra — connection reuse, automatisk retry
session = create_resilient_session()
for url in urls:
    response = session.get(url, timeout=NetworkConfig.timeout_tuple())

# Sämre — ny connection varje gång
for url in urls:
    response = requests.get(url, timeout=NetworkConfig.timeout_tuple())
```

### 3. Specifika timeouts per operation

```python
# Health check — kort timeout
requests.get(health_url, timeout=NetworkConfig.timeout_health())

# LLM-anrop — längre timeout
requests.post(llm_url, json=payload, timeout=NetworkConfig.timeout_tuple(read=120.0))
```

### 4. Logga nätverksfel med kontext

```python
try:
    response = session.get(url, timeout=NetworkConfig.timeout_tuple())
except ConnectionError as e:
    _log.error("Network error", url=url, error=str(e), operation="fetch_inbox")
```

## Se även

- [Graph-adapter](/products/mbot/docs/dev/architecture/graph-adapter) — Graph API-adaptern
- [Loggning](/products/mbot/docs/dev/logging) — Loggningssystemet
- [Tillståndsmodell](/products/mbot/docs/dev/architecture/state-model) — Klientens tillståndsmodell
