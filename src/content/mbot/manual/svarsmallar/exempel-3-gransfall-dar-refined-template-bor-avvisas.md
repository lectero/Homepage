# Exempel 3: gränsfall där refined-template bör avvisas

### Steg 1. Användarens initiala mall 

> ***“Mallens syfte***
>
> *Bekräfta att en åtgärd redan är genomförd (registrering av medlemskap).*
>
> ***Avsedd användning***
>
> *Draft som används efter att handläggare redan verifierat att åtgärden är klar.*
>
> ***Malltext (initial draft)***
>
> *Ditt medlemskap är nu registrerat och aktivt.*
>
> *Du kan börja boka starttider direkt via Min Golf.*
>
> *Hör av dig om du har några frågor.”*

### Steg 2. Template refiner analyserar utkastet

Identifierade egenskaper i draften

- Slutgiltig formulering.

- Innehåller bekräftelse av status.

- Inga synliga beroenden eller reservationer.

Utifrån generella kriterier tolkar refiner detta som:

- hög slutgiltighet,

- implicit beslut,

- potentiellt policykänsligt.

### Steg 3. Template refiner producerar ett förslag (refined template)

> ***“Refined malltext (förslag)***
>
> *När medlemskapet är registrerat och aktiverat blir det möjligt att boka starttider via Min Golf.*
>
> *Vi återkommer när processen är helt klar.”*

### Steg 4. Förklaring till användaren (systemets standard)

Vad som har justerats och varför

- Slutgiltigt besked har ersatts med processbeskrivning.

- Beslut har gjorts beroende av framtida tillstånd.

- Texten har gjorts mer generell och mindre bindande.

### Steg 5. Varför detta är ett sämre resultat

I detta fall är **refined-versionen objektivt sämre** än originalet.

Skälen är konkreta:

- Ärendet *är redan avgjort*.

- Handläggaren använder mallen **efter verifiering**, inte före.

- Mottagaren förväntar sig ett klart besked, inte ett resonemang.

Refined-versionen:

- försvagar informationen,

- skapar osäkerhet som inte finns,

- och gör svaret mindre användbart än nödvändigt.

Här har refiner:

- applicerat generella robusthetskriterier,

- i en kontext där **lokal korrekthet är viktigare än generell tålighet**.

### Steg 6. Korrekt användarbeslut

I detta fall bör användaren:

- avvisa refined-förslaget,

- behålla originalmallen,

- eventuellt komplettera den marginellt (t.ex. med kontaktväg).

Detta är **inte ett misslyckande**, utan ett korrekt utfall.

### Steg 7. Viktig princip som illustreras

Template refiner är inte en förbättringsmaskin. Den är ett **förslagssystem** som arbetar utifrån generella kriterier. När:

- ärendet är slutligt,

- kontexten är verifierad,

- och mallen används sent i processen,

är precision och tydlighet viktigare än försiktighet.

### Slutsats från gränsfallet

Ett välfungerande samspel kräver att:

- användaren förstår *varför* refiner föreslår ändringar,

- och känner sig fri att avvisa dem utan att bryta mot någon norm.

Detta exempel visar tydligt att: **Refined ≠ bättre per definition.**
