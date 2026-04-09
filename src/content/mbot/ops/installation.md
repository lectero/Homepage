---
---
# Installation

Den här sidan är skriven för att vara realistisk. Målet är enkel drift, inte perfekt drift.

## Lokal körning

1. Installera Python och skapa virtuell miljö.
2. Installera beroenden.
3. Sätt nödvändiga environment variabler för API access.
4. Kör poll processen.

## Serverkörning

Rekommenderat:

- kör poll och pipeline som en tjänst
- kör monitor som en separat tjänst
- logga till fil och rotera
- backa databasen regelbundet

## Driftsäkerhet som miniminivå

- återstart vid krasch
- larm vid utebliven poll
- larm vid ökade felkvoter mot API
- larm vid plötsligt ökat antal mail, typ spam

Den typiska klubben behöver inte Kubernetes. Den behöver att saker fortsätter fungera på måndag morgon.
