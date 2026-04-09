# Funktioner

Det här är produktens kärnförmågor. Texten är avsiktligt konkret.

## Inkommande epost

- Stöd för en eller flera inkorgar.
- Stöd för att hantera flera adresser inom en kvotmodell, utan att uppmuntra okontrollerad expansion.
- Deduplikering och state, så att samma mail inte behandlas om och om igen.

## Klassificering

- Taxonomi i YAML, begriplig för kanslipersonal.
- Kandidatkort för klassificering, där både signal och brus hanteras.
- Möjlighet att spara och återanvända klassificeringsresultat per tråd.

## Draft

- Draft genereras på svenska och kan tonjusteras efter avsändartyp, till exempel medlem, gäst, leverantör.
- Inbyggd försiktighet i osäkra fall, med explicita frågor i stället för gissning.

## Riskstyrd automation

- Deterministisk beslutslogik med dimensioner som tydlighet, komplexitet, risk, och policy passform.
- Triangulering kan användas när det är värt kostnaden, exempel när risk är hög men automationsvärdet också är högt.

## Spårbarhet

- Loggning per steg, inklusive kostnadsindikatorer som antal LLM anrop.
- Statistik för volym, kategorier, svarstid, och manuella ingrepp.
- Export till enkla rapporter.

## Drift

- Robust pollning.
- Möjlighet till en separat monitorprocess som läser databasen och varnar vid avvikelser.
- Basstöd för failover mönster.
