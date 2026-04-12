---
---
# Testguide

Denna guide beskriver hur du kör tester för MBot-projektet.

## Snabbstart

```bash
# Kör alla tester (kräver att venvs är uppsatta)
make test

# Eller separat:
make test-server   # Server-tester
make test-client   # Klient-tester
```

## Installation

### 1. Server-tester

```bash
# Skapa och aktivera venv
cd server
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# .venv\Scripts\activate   # Windows

# Installera beroenden
pip install -r requirements.txt
pip install -r ../tests/requirements.txt

# Gå tillbaka till projektrot
cd ..
```

### 2. Klient-tester

```bash
# Skapa och aktivera venv
cd client
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# .venv\Scripts\activate   # Windows

# Installera beroenden
pip install -r requirements.txt
pip install pytest>=8.0

# Gå tillbaka till projektrot
cd ..
```

## Köra tester från terminalen

### Server-tester

```bash
# Aktivera server venv
source server/.venv/bin/activate

# Kör alla server-tester
PYTHONPATH=".:API-contracts/python" python -m pytest tests/ -v

# Kör specifik testfil
PYTHONPATH=".:API-contracts/python" python -m pytest tests/test_db_exceptions.py -v

# Kör specifik testklass
PYTHONPATH=".:API-contracts/python" python -m pytest tests/test_db_exceptions.py::TestTranslateSqliteError -v

# Kör specifikt test
PYTHONPATH=".:API-contracts/python" python -m pytest tests/test_db_exceptions.py::TestTranslateSqliteError::test_operational_error_locked -v

# Avaktivera venv
deactivate
```

### Klient-tester

```bash
# Aktivera klient venv
source client/.venv/bin/activate

# Kör alla klient-tester
PYTHONPATH="." python -m pytest client/tests/ -v

# Kör specifik testfil
PYTHONPATH="." python -m pytest client/tests/test_backoff.py -v

# Avaktivera venv
deactivate
```

## Användbara pytest-flaggor

| Flagga | Beskrivning |
|--------|-------------|
| `-v` | Verbose — visa testnamn |
| `-vv` | Extra verbose — visa mer detaljer |
| `-q` | Quiet — minimal output |
| `--tb=short` | Kortare felutskrifter |
| `--tb=long` | Fullständiga felutskrifter |
| `-x` | Stoppa vid första felet |
| `-k "keyword"` | Kör endast tester som matchar keyword |
| `--lf` | Kör endast tester som failade senast |
| `-s` | Visa print-satser (stdout) |

### Exempel

```bash
# Kör endast tester med "retry" i namnet
PYTHONPATH=".:API-contracts/python" python -m pytest tests/ -v -k "retry"

# Stoppa vid första fel och visa fullständig traceback
PYTHONPATH=".:API-contracts/python" python -m pytest tests/ -x --tb=long

# Kör senast failade tester igen
PYTHONPATH=".:API-contracts/python" python -m pytest tests/ --lf
```

## Coverage-rapporter

```bash
# Aktivera server venv
source server/.venv/bin/activate

# Installera coverage-verktyg (om inte redan gjort)
pip install pytest-cov

# Kör tester med coverage
PYTHONPATH=".:API-contracts/python" python -m pytest tests/ --cov=server --cov=shared --cov-report=term-missing

# Generera HTML-rapport
PYTHONPATH=".:API-contracts/python" python -m pytest tests/ --cov=server --cov=shared --cov-report=html

# Öppna rapport (macOS)
open htmlcov/index.html
```

Eller använd Makefile:

```bash
make test-cov
```

## Teststruktur

```
MBot/
├── tests/                          # Server-tester
│   ├── test_db_exceptions.py       # Databas-exception-hierarki (43 tester)
│   ├── test_mailbot_errors.py      # LLM-pipeline-fel: Fatal/Transient/Content (26 tester)
│   ├── test_llm_openai_errors.py   # OpenAI API felhantering (15 tester)
│   ├── test_storage_retry.py       # Storage retry-logik (21 tester)
│   ├── test_worker_error_flows.py  # E2E worker felflöden (14 tester)
│   ├── test_graph_*.py             # Graph API-tester
│   ├── test_scan_decide.py         # Scan/decide-logik
│   ├── test_tenants.py             # Tenant-konfiguration
│   └── ...
│
├── client/tests/                   # Klient-tester
│   ├── test_backoff.py             # Backoff med jitter (44 tester)
│   ├── test_state_store_retry.py   # State store retry (17 tester)
│   ├── test_statistics.py          # Statistik
│   └── ...
│
└── pytest.ini                      # Pytest-konfiguration
```

## Testkategorier

### Felhanteringstester

| Testfil | Beskrivning | Antal |
|---------|-------------|-------|
| `test_db_exceptions.py` | Databas-exceptions och `translate_sqlite_error()` | 43 |
| `test_mailbot_errors.py` | `FatalError`, `TransientError`, `ContentError` | 26 |
| `test_llm_openai_errors.py` | OpenAI API → MBot exception mapping | 15 |
| `test_storage_retry.py` | Server-side retry med exponentiell backoff | 21 |
| `test_state_store_retry.py` | Klient-side retry med exponentiell backoff | 17 |
| `test_worker_error_flows.py` | E2E: exception → job state → case state | 14 |
| `test_backoff.py` | Backoff-beräkningar och jitter | 44 |

### Felflödeskarta

```
OpenAI API Error          MBot Exception       Worker Action
─────────────────         ──────────────       ─────────────
AuthenticationError   →   FatalError       →   job=FAILED, case=FAILURE
RateLimitError        →   TransientError   →   job=RETRY (retry_after=60s)
APIConnectionError    →   TransientError   →   job=RETRY
APITimeoutError       →   TransientError   →   job=RETRY
BadRequestError       →   ContentError     →   job=MANUAL, case=MANUAL
  (context_length)
```

## CI/CD

Tester körs automatiskt via GitHub Actions vid:
- Push till `main` eller `feature/**` branches
- Pull requests till `main`

Se `.github/workflows/tests.yml` för detaljer.

## Pre-commit hook

En pre-commit hook kör relevanta tester automatiskt innan commit:

```bash
# Hooken är redan installerad i .git/hooks/pre-commit

# För att skippa (vid behov):
git commit --no-verify -m "Din commit-meddelande"
```

## Felsökning

### "ModuleNotFoundError: No module named 'X'"

Kontrollera att:
1. Rätt venv är aktiverad
2. PYTHONPATH är satt korrekt
3. Alla requirements är installerade

```bash
# Verifiera venv
which python  # Bör visa .venv/bin/python

# Verifiera PYTHONPATH
echo $PYTHONPATH
```

### "Database is locked" under tester

Testerna använder temporära SQLite-databaser. Om du får lock-fel:

```bash
# Rensa pytest-cache
rm -rf .pytest_cache

# Kör tester igen
make test
```

### Tester passerar lokalt men failar i CI

Kontrollera:
1. Python-version (CI använder 3.11)
2. Att alla beroenden finns i requirements.txt
3. Att inga hårdkodade sökvägar används

## Makefile-kommandon

```bash
make help         # Visa alla tillgängliga kommandon
make test         # Kör alla tester
make test-server  # Kör endast server-tester
make test-client  # Kör endast klient-tester
make test-cov     # Kör tester med coverage-rapport
make test-quick   # Snabb testkörning (minimal output)
make clean        # Rensa cache och temporära filer
```

## Se även

- [Felhantering](/products/mbot/docs/dev/error-handling/taxonomy) — Exception-hierarkier och retry-mönster
- [Loggning](/products/mbot/docs/dev/logging) — Loggningsstandard för tester
