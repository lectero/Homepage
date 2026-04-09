---
---
# Starta webservern (HMB Mailbot)

Denna sida beskriver hur webbplatsen för HMB Mailbot körs på Mac mini för internt bruk och test.

## Snabb rutin

1. Uppdatera repo:
```bash
cd ~/Git/hmb-mailbot-site
git pull --rebase
```

2. Bygg webbplatsen:
```bash
mkdocs build
```

3. Kontrollera att Caddy kör:
```bash
brew services list
```

Om Caddy inte kör:
```bash
brew services start caddy
```

4. Öppna sajten:

LAN:
- `http://<mac-mini-ip>:8080`

Tailscale:
- `http://<tailscale-ip>:8080`
