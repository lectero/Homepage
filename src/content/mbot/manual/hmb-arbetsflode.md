---
---
# MBot Arbetsflöde

MBot hanterar e-post som en sekventiell process, inte som isolerade med-delanden. Varje inkommande e-post passerar genom ett antal steg där analys, strukturering och förslag successivt byggs upp. Systemet är utformat för att:

- minska manuellt rutinarbete,

- skapa konsekventa underlag för svar,

- och samtidigt behålla mänsklig kontroll över beslut och kommunikation.

Grundprincipen är att MBot:s arbetsflöde är byggt för att:

- separera analys från beslut,

- separera förslag från ansvar,

- och göra varje steg i processen synligt och begripligt för användaren.

Detta är en förutsättning både för kvalitet i vardagen och för eventuell framtida, kontrollerad och utökad automatisering. Automatisering används där den är meningsfull och säker, men är aldrig implicit.

### Steg 1: Mottagning och grundläggande registrering

När ett e-postmeddelande tas på en mail-adress som MBot bevakar, registreras det av MBot. I detta skede har ingen tolkning eller bedömning gjorts, och ingen åtgärd är ännu initierad. Syftet med detta steg är spårbarhet och ordning, inte klassificering.

### Steg 2: Innehållsanalys och kontextidentifiering

Systemet analyserar därefter e-postens innehåll för att identifiera:

- ärendets karaktär,

- relevanta signaler (t.ex. tidsaspekter, medlemskap, bokning, ekonomi),

- och vilket slags hantering som sannolikt krävs.

Analysen syftar till att förbereda handläggning. I vissa fall kommer ett beslut att tas redan här om det finns anledning till att emailet bedöms kräva manuell hantering, t ex ärendet bedöms känsligt på olika sätt och som gör det olämpligt att AI-behandlas.

### Steg 3: Matchning mot mallar och policy

Baserat på analysen identifierar systemet:

- lämpliga svarsmallar,

- relevanta policyområden,

- och eventuella kända beroenden som bör beaktas.

I detta steg etableras ramverket för ett svar, men inget svar är ännu skapat.

### Steg 4: Generering av utkast (drafts)

Systemet kan nu generera ett eller flera utkast till svar, baserat på:

- systemvald mall,

- identifierad kontext,

- och tillgänglig policyinformation.

Utkasten är betrakta som arbetsmaterial. De är avsedda att granskas, justeras eller avvisas av användaren.

Detta är den punkt där systemets stöd normalt ger störst tidsbesparing.

### Steg 5: Mänsklig granskning och beslut

Användaren granskar utkastet och avgör hur ärendet ska hanteras. Det kan innebära att:

- justera formuleringar,

- välja mellan alternativa utkast,

- komplettera med information,

- eller ta över hanteringen helt manuellt.

Allt ansvar för innehåll och utskick ligger i detta steg hos användaren.

### Steg 6: Utskick och avslut

När användaren godkänner ett svar skickas det, och ärendet markeras som avslutat enligt gällande rutin. Informationen sparas för spårbarhet, uppföljning och lärande.

**E-postens tillstånd och kategorier i MBot**

MBot arbetar med e-post som en process, inte som enskilda meddelanden. Varje inkommande e-post befinner sig därför i ett tydligt **tillstånd**, vilket hjälper användaren att förstå vad som är gjort, vad som återstår och vilket ansvar som ligger var.

**Inkommet**

E-posten har mottagits av systemet men ännu inte analyserats eller hanterats.

**Analyserat**

E-postens innehåll har analyserats av systemet:

- ärendetyp har identifierats,

- relevanta signaler och nyckeluppgifter har extraherats,

- lämpliga mallar har identifierats.

Ingen åtgärd är ännu vidtagen.

**Utkast skapat**

Ett eller flera förslag till svar (drafts) har genererats baserat på mallar, policy och kontext.

Utkasten är **arbetsunderlag**, inte färdiga svar.

**Kräver granskning**

E-posten innehåller innehåll som:

- är policykänsligt,

- kräver mänskligt omdöme,

- eller inte uppfyller kriterier för eventuell automatisering.

Manuell hantering krävs.

**Klar för svar**

Ett utkast har granskats och godkänts av användaren och kan skickas.

**Besvarad**

Svar har skickats och ärendet betraktas som avslutat.

**Arkiverad / Avslutad**

Ärendet är färdighanterat och arkiverat för spårbarhet och uppföljning.
