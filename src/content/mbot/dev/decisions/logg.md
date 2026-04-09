# Beslutslogg

Detta är en översikt över designbeslut i HMB Mailbot.

Syftet är att göra det lätt att:
- se vilka principer som är gällande
- hitta motiv och konsekvenser snabbt
- uppdatera beslut utan att tappa historik

Rekommendation:
- fyll i datum när ett beslut stabiliseras
- omprövas ett beslut, arkivera den gamla sidan och skapa en ny

## Översikt

| Beslut | Status | Datum | Kommentar |
|---|---|---|---|
| [Outlook först](outlook-first.md) | Gällande | Ej angivet | Outlook är primärt arbetsgränssnitt. |
| [En klient per klubb](one-client-per-club.md) | Gällande | Ej angivet | Undviker concurrency och dubbelhantering. |
| [Batch-orienterad handläggning](batch-not-realtime.md) | Gällande | Ej angivet | Planering före reaktivitet. |
| [Tillgänglighet prioriteras](availability-first.md) | Gällande | Ej angivet | Resiliens före maximal härdning. |
| [Ingen autoupdate initialt](no-autoupdate-initial.md) | Gällande | Ej angivet | Stabil tunn klient. |
| [Statistik för lärande, inte övervakning](stats-not-surveillance.md) | Gällande | Ej angivet | Transparens och förbättring, ej individkontroll. |
| [Explainability on-demand](explainability-on-demand.md) | Gällande | Ej angivet | Förklaringar när man vill, inte brus. |
