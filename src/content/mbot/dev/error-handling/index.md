---
---
# Felhantering

Detta avsnitt beskriver HMB Mailbots fel-taxonomi, exit codes och hur exceptions ska hanteras konsekvent.

Målet är att:
- undvika spretig felrapportering (print/logg på “fel ställe”),
- ge stabila felkoder för loggning och test,
- göra batchkörningar deterministiska (abort/fortsätt),
- möjliggöra statistik utan att blanda ihop “fel” med “komplexitet”.

Se sidorna i menyn för detaljer.
