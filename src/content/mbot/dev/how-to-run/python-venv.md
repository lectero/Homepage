# Python venv

Den här sidan beskriver ett stabilt sätt att arbeta med virtuella miljöer för Mailbot-projekten.

## Grundprincip

- Varje körbar del bör ha en venv nära koden som körs.
- Använd samma Python-version inom ett delprojekt, annars får du svårbegripliga import- och sqlite-problem.
- Installera dependencies i rätt venv, inte globalt.

## Skapa en ny venv

Exempel från katalogen `client-server`:

```bash
cd /path/to/client-server
python3 -m venv .venv
source .venv/bin/activate
python -V
pip -V
```

Kontrollera att `which python` pekar på `.venv/bin/python`.

## Installera dependencies

Klient:

```bash
pip install -r client/requirements.txt
```

Server:

```bash
pip install -r server/requirements_tui.txt
```

Om du har separata requirements för server runtime, installera dem också.

## Vanliga fel

### "ModuleNotFoundError: shared"
Du kör från fel katalog eller kör en fil direkt.

Korrekt mönster är:

```bash
cd /path/to/client-server
python -m client.cli interactive
```

Inte:

```bash
python client/cli.py
```

### sqlite3.OperationalError: unable to open database file
Detta brukar bero på att du öppnar SQLite med många connections snabbt, eller att path blir fel i threads.

I vårt nuvarande läge använder både server och klient single-connection och absolut path, vilket ska eliminera detta.

Om du ändå får felet, kontrollera att du kör i rätt arbetskatalog och att katalogen är skrivbar.

## .env och miljövariabler

Vi stödjer både `.env` och exporterade env-vars.

Minimikrav för Graph auth (exempel):

- `AZURE_TENANT_ID`
- `AZURE_CLIENT_ID`
- `AZURE_CLIENT_SECRET`

Lägg dem antingen i `.env` i `client-server` eller exportera dem i shell.
