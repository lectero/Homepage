---
---
# Tailscale – åtkomst till HMB Mailbot

Tailscale används för att ge säker åtkomst till HMB Mailbots webbplats utan domän, port forwarding eller ISP-konfiguration.

## Grundidé
Tailscale skapar ett privat, krypterat nät mellan godkända enheter. Alla anslutna datorer beter sig som om de vore på samma lokala nät.

## Vad Tailscale används till här
- Ge samarbetspartners åtkomst till webbsidan
- Undvika exponering mot öppna internet
- Behålla kontroll över vem som kan se sajten

## Installation, macOS
```bash
brew install tailscale
sudo tailscale up
```

## Installation, Windows
- Installera från tailscale.com
- Logga in och invänta att enheten godkänns

## Ta fram Tailscale-IP för Mac mini
På Mac mini:
```bash
tailscale ip -4
```

Öppna sedan i webbläsare:
```text
http://<tailscale-ip>:8080
```

## Säkerhet
- Endast godkända enheter får åtkomst
- All trafik är krypterad
- Åtkomst kan dras tillbaka när som helst

Tailscale är ett nätverkslager. Det ersätter inte ansvar för vad som delas.
