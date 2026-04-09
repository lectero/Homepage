---
---
# Riskstyrd logik

Det här är produktens centrala idé. Om den delen är svag blir resten kosmetika.

## En enkel taxonomi av åtgärder

- **Manuell hantering**: systemet gör inget mer än att lägga ärendet i en kö med kontext.
- **Draft för granskning**: systemet skapar ett förslag som personalen kan godkänna eller justera.
- **Autosändning**: systemet skickar, men endast när policy och trösklar tillåter det.

## Dimensioner

### 1. Intent clarity, 0 till 1
Hur entydigt det går att svara korrekt utan att gissa avsändarens intention.

### 2. Complexity
Ett diskret mått. Exempel: låg, medel, hög.

### 3. Risk
Ett diskret mått. Exempel: låg, medel, hög.
Risk kan drivas av ekonomi, juridik, känslighet, och möjlighet till skada.

### 4. Policy fit
Passar ärendet en explicit policy som organisationen accepterar.

## Beslutsmotor

Beslutet tas av regler, inte av språkmodellen. En språkmodell kan däremot bidra med underlag, exempel en bedömning av tydlighet, men det underlaget kan ignoreras om det avviker från hårda constraints.

## Triangulering

I vissa fall kan systemet göra flera bedömningar för att minska osäkerhet, till exempel:

- två olika prompts
- två olika modeller
- en snabb modell för screening och en stark modell för text

Triangulering kostar. Den ska reserveras för fall där ett fel är dyrt.

## Utgångspunkt

Defaultläget ska alltid vara draft för granskning. Autosändning ska vara ett explicit, smalt och mätbart val.
