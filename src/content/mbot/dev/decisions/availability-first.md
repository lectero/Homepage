---
---
# Tillgänglighet prioriteras

## Beslut
Tillgänglighet prioriteras högre än maximal säkerhetshärdning. Systemet bygger på avidentifiering och rimligt förtroende mellan HMB och klubbar.

## Motiv
- Instabilitet underminerar förtroende snabbare än de flesta andra brister.
- Driftstopp skapar manuellt merarbete och riskerar dubbelhantering.

## Konsekvenser
- Multi-server blir ett krav vid skarp drift bortom pilot.
- Grace-perioder vid token-rotation är rimliga.
- Felhantering ska utgå från en fel-taxonomi (se relevant sida) och prioritera säkra lägen utan att skapa dubletter.

## Avgränsning
Detta är inte ett argument för slapp säkerhet. Det är en prioriteringsprincip för ett system som arbetar med avidentifierat innehåll och mänsklig granskning.
