---
---
# Systemdiagram

## Tillståndsflöde — e-postärenden

Diagrammet nedan visar hur ett e-postärende rör sig genom MBot från att det inkommer tills det är hanterat.

![MBot tillståndsflöde](/mbot/assets/images/HMB_tillstand_floede_v2.png)

Ärendet passerar följande stadier:

1. **Inkommande** — MBot identifierar ett nytt e-postmeddelande via delta-synk mot Microsoft 365.
2. **Klassificering** — Servern analyserar innehållet och avgör ärendekategori och lämplig åtgärd.
3. **AI-utkast** — För ärenden som är lämpliga att svara på genererar LLM-motorn ett strukturerat svarsutkast baserat på matchande mall.
4. **Tillgänglig för granskning** — Utkastet presenteras i Outlook (Add-in) där handläggaren granskar, justerar och skickar.
5. **Manuell hantering** — Ärenden som kräver personlig bedömning märks och lyfts till handläggaren utan AI-förslag.

## Alternativt tillståndsflöde (förenklat)

![MBot tillståndsflöde förenklat](/mbot/assets/images/HMB_tillstandsflode_ren.png)

## Klient–Server-arkitektur

MBot är uppbyggt i två separata lager:

```
┌─────────────────────────────────────┐
│  KLIENT (klubb-lokal)               │
│  – Outlook Add-in (Task Pane)       │
│  – Polling-loop (main_loop.py)      │
│  – Lokal SQLite state store         │
│  – Microsoft 365 åtkomst via MSAL   │
└──────────────────┬──────────────────┘
                   │ HTTPS (anonymiserad payload)
┌──────────────────▼──────────────────┐
│  SERVER (molntjänst)                │
│  – Analys & klassificering          │
│  – LLM-motor (OpenAI + Claude)      │
│  – Mallbibliotek                    │
│  – PostgreSQL (inga personuppgifter)│
└─────────────────────────────────────┘
```

**Nyckelprincip:** Personuppgifter (avsändare, mottagare, e-postinnehåll) lämnar aldrig klienten i råformat. Klienten anonymiserar all data innan den skickas till servern. Servern saknar teknisk möjlighet att läsa brevlådor eller skicka e-post självständigt.

Se [Klient–server-arkitektur](/products/mbot/docs/architecture/client-server) och [Säkerhet & integritet](/products/mbot/docs/overview/security) för fullständig beskrivning.
