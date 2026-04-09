# Reset och state

Den här sidan beskriver hur du nollställer state på ett kontrollerat sätt när du vill provköra igen.

## Klient state (client_state.sqlite)

Klienten använder en SQLite-fil för lokalt state, exempel:

- `client_state.sqlite`

Om du vill nollställa klientens state:

```bash
rm -f client_state.sqlite client_state.sqlite-wal client_state.sqlite-shm
```

## Server DB (mailbot.sqlite)

Servern använder en SQLite-fil för state och eventlogg:

- `mailbot.sqlite`

Nollställ serverns DB:

```bash
rm -f mailbot.sqlite mailbot.sqlite-wal mailbot.sqlite-shm
```

Starta sedan servern igen så att tabeller återskapas.

## Reset av HMB-kategorier i mailbox

Det finns ett reset-script som tar bort våra HMB-statuskategorier från inboxen för en ren teststart.

Exempel:

```bash
python -m client.reset_hmb_state --mailbox peg@skovdegk.se --limit 500
```

Den tar bort statuskategorier, men ska inte ta bort `Request_AI_Help-(HMB)`.

## Reset av kumulativa räknare i klienten

När du kör TUI och ser session samt cumulative metrics kan du nollställa de kumulativa räknarna:

```bash
python -m client.cli metrics reset
```

## Viktigt om reset i drift

- Kör reset endast i testläge eller när du vet vad du gör.
- Radera aldrig serverns sqlite-filer medan servern kör.
