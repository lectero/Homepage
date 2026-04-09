# Hur det fungerar

HMB bot är uppbyggd som en pipeline. Varje steg är tydligt, loggat, och utbytbart. Det gör att systemet kan utvecklas utan att bli ett enda stort svart hål.

## Flöde

1. **Inhämtning**
   - Pollar inkorgar med Microsoft Graph eller motsvarande.
   - Hämtar nya meddelanden och metadata.

2. **Normalisering**
   - Rensar signaturer och citat när det är rimligt.
   - Extraherar text, bilagor kan hanteras separat.

3. **Klassificering**
   - Mappning till taxonomi, exempel medlemskap, greenfee, starttider, tävling, ekonomi.
   - Beräknar en uppsättning dimensioner, till exempel intentionens tydlighet, komplexitet, risk, och policy passform.

4. **Policybeslut**
   - En deterministisk beslutsmotor avgör om ärendet kräver manuell hantering, om draft ska skapas, eller om autosändning kan ske.
   - Om osäkerhet finns, faller systemet tillbaka till säkrare läge.

5. **Draftgenerering**
   - Språkmodellen får kontext och tydliga ramar.
   - Output är ett förslag, inte ett utskick.

6. **Spårbarhet**
   - Varje steg loggas med tidsstämplar, modellval, och kostnadsindikatorer.
   - Statistik kan summeras per kategori, per vecka, per inkorg.

## Designval

- Systemet är byggt för att tolerera fel, till exempel API problem, nätverksproblem, och tillfälliga driftstörningar.
- Det ska alltid vara möjligt att köra allt i läge utan automatiska utskick.
- Den viktigaste produkten är inte texten, utan kontrollen.
