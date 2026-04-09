# Hur manualsidor uppdateras

Denna sida beskriver rekommenderad arbetsrutin för att uppdatera manualer,
how-to-sidor och annan dokumentation i HMB Mailbot.

## Grundprincip
Arbetet sker i tre faser:
1. Lokal redigering och test
2. Versionssättning (Git)
3. Publicering (Mac mini)

## Lokal testning
```bash
source .venv/bin/activate
mkdocs serve -a 127.0.0.1:8001
```

## Versionssättning
Commit och push när du är nöjd.

## Publicering
```bash
git pull --rebase
mkdocs build
```
