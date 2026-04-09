#  Introduktion till HMB MAILrobot


## Introduktion

HMB (Human-in-the-loop Mail Bot) är ett system för kontrollerad, AI-stödd hantering av inkommande e-post.

Systemet är utformat för miljöer där kvalitet, korrekthet och ansvar är viktigare än maximal automatisering.

HMB hjälper användaren att analysera inkommande e-post, föreslå svar baserat på mallar och policy och minska manuellt arbete utan att ta över beslutsfattan-det.

Automatisering i HMB är explicit och selektiv. Systemet genererar förslag, synliggör beroenden och exponerar konsekvenser, men det är alltid användaren som fattar beslut, godkänner svar och bär ansvar för kommunikationen.

### Systemkrav och tekniska förutsättningar

HMB är designat för att fungera i den IT-miljö som används av svenska golfklubbar i praktiken. Systemet är därför byggt med Microsoft 365 som grundplattform, vilket också är Svenska Golfförbundets valda och rekommenderade IT-system för klubbar anslutna till förbundet.

HMB förutsätter att klubbens e-post hanteras via Microsoft 365, inklusive:

- Exchange Online (e-post och brevlådor),

- Microsofts autentiserings- och behörighetsmodell, och

- Standardiserade konton och grupper inom Microsoft 365-miljön.

Systemet är inte avsett att användas med fristående e-postlösningar, privata e-postservrar eller andra molnplattformar.

HMB arbetar direkt mot Microsoft 365-miljön på ett sätt som:

- följer Microsofts säkerhetsmodell, t ex använder etablerade säkerhetsmekanismer för autentisering och åtkomst,

- följer samma principer för loggning och spårbarhet som övrig e-posthantering,

<!-- -->

- respekterar befintliga behörigheter och roller,

- inte kräver parallella användarkonton eller separata inloggningar, samt

- verkar inom det som redan gäller för klubbens e-post.

Att HMB är bundet till Microsoft 365 är ett medvetet designval, inte en tillfällig begränsning. Det möjliggör:

- tät integration med e-postflödet och Microsoft Outlooks klienter

- konsekvent hantering av ärenden och svar,

- och minskad komplexitet i drift och support.

Systemet är alltså inte ett generellt e-postverktyg för alla plattformar, utan ett specialiserat stöd anpassat för den IT-miljö som svenska golfklubbar redan använder.

## HMB Arbetsflöde

HMB hanterar e-post som en sekventiell process, inte som isolerade med-delanden. Varje inkommande e-post passerar genom ett antal steg där analys, strukturering och förslag successivt byggs upp. Systemet är utformat för att:

- minska manuellt rutinarbete,

- skapa konsekventa underlag för svar,

- och samtidigt behålla mänsklig kontroll över beslut och kommunikation.

Grundprincipen är att HMB:s arbetsflöde är byggt för att:

- separera analys från beslut,

- separera förslag från ansvar,

- och göra varje steg i processen synligt och begripligt för användaren.

Detta är en förutsättning både för kvalitet i vardagen och för eventuell framtida, kontrollerad och utökad automatisering. Automatisering används där den är meningsfull och säker, men är aldrig implicit.

### Steg 1: Mottagning och grundläggande registrering

När ett e-postmeddelande tas på en mail-adress som HMB bevakar, registreras det av HMB. I detta skede har ingen tolkning eller bedömning gjorts, och ingen åtgärd är ännu initierad. Syftet med detta steg är spårbarhet och ordning, inte klassificering.

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

**E-postens tillstånd och kategorier i HMB**

HMB arbetar med e-post som en process, inte som enskilda meddelanden. Varje inkommande e-post befinner sig därför i ett tydligt **tillstånd**, vilket hjälper användaren att förstå vad som är gjort, vad som återstår och vilket ansvar som ligger var.

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

## Dataskydd och GDPR

HMB är konstruerat för att uppfylla GDPR genom hur systemet hanterar data, inte genom efterhandsåtgärder eller användarberoende rutiner. Den grundläggande principen är att personuppgifter aldrig lämnar klubbens Microsoft 365-miljö i samband med AI-bearbetning.

All e-post som hanteras av HMB ligger kvar i klubbens Microsoft 365-miljö. Systemet skapar inga externa kopior av e-post, bilagor eller metadata för lagring eller analys. Klubben är fortsatt personuppgiftsansvarig för all e-posthantering, på samma sätt som utan HMB, och detta ansvar förändras inte av systemets användning.

När HMB analyserar inkommande e-post och genererar förslag till svarsmallar sker AI-bearbetningen uteslutande på innehåll som är rensat från personidentifierande information. Avsändarens namn, e-postadress och andra identifierande uppgifter kommuniceras aldrig till AI-tjänsten. Systemet skickar inte e-postadresser, namn, medlemsnummer eller andra identifierande fält till externa AI-servrar.

Den AI-modell som används i HMB är ChatGPT. ChatGPT används enbart som ett språkstöd för att bearbeta anonymiserat och avidentifierat innehåll i syfte att föreslå svarstexter. Modellen får ingen information om vem avsändaren är, och har ingen möjlighet att identifiera eller särskilja individer.

All behandling av personuppgifter i HMB sker inom samma ändamål som den ordinarie e-posthanteringen, till exempel att besvara frågor, hantera medlemsärenden eller ge serviceinformation. Systemet används inte för profilering, beteendeanalys eller automatiserad bedömning av individer, och det bygger inga separata personregister.

En avgörande del av systemets GDPR-anpassning är att mänsklig kontroll aldrig kringgås. Svar som genereras av HMB är förslag. Det är alltid en användare som granskar, justerar och godkänner innehållet innan ett svar skickas. Därmed fattas inga beslut med faktisk betydelse för en individ av systemet självt.

Sammanfattningsvis är HMB GDPR-säkert därför att:

- personuppgifter aldrig skickas till AI-tjänsten,

- all e-post ligger kvar i klubbens Microsoft 365-miljö,

- AI-bearbetning sker på avidentifierat innehåll,

- och mänskligt ansvar alltid är kvar i besluts- och kommunikationskedjan.

Systemet är ett stöd för e-posthantering, inte en självständig aktör i personuppgiftsbehandlingen.

### Serverdelens funktioner i HMB (översikt)

Serverdelen i HMB fungerar som ett analys- och stödlager. Den utför följande funktioner:

- Tar emot **anonymiserat och avidentifierat innehåll** från klienten för vidare bearbetning. Servern får aldrig tillgång till avsändarens namn, e-postadress eller andra identifierande uppgifter.

- Utför **semantisk analys av e-postens innehåll** för att förstå ärendets karaktär, exempelvis om det rör medlemskap, bokning, avgifter, tider eller allmän information.

- Utför en analys av e-postens innehåll utifrån **ärendekomplexitet** och **tydlighet** gällande avsändarens intension.

- Identifierar **relevanta signaler och beroenden** i ärendet, till exempel tidsaspekter, villkor, policyberoenden eller behov av kompletterande information.

- Matchar ärendet mot **tillgängliga svarsmallar** och relaterade policyområden för att skapa ett strukturellt ramverk för svar.

- Använder svarsmallar som **byggstenar**, inte som färdiga svar, för att säkerställa konsekvent ton och korrekt inramning.

- Använder **ChatGPT som språk- och resonemangsstöd** för att formulera ett eller flera utkast till svar baserat på: analyserat innehåll, valda mallar, och tillgänglig policyinformation.

- Genererar **utkast (drafts)** som är avsedda att granskas, justeras eller avvisas av användaren i klienten.

- Kan generera **alternativa formuleringar** av samma svar med olika prioriteringar, till exempel mer handläggarnära eller mer robust/policycentrerade varianter.

- Utför **indikativa bedömningar** av ärendet, till exempel om: manuell hantering sannolikt krävs, eller om standardiserade svar är lämpliga. Dessa bedömningar presenteras alltid som underlag, aldrig som beslut.

- Säkerställer **konsistens över tid**, till exempel att liknande ärenden behandlas på liknande sätt och att uppdaterade mallar och policyer får genomslag i nya utkast.

- Arbetar helt **utan egen lagring av personuppgifter** och utan att bygga individuella profiler eller historik kopplad till identifierbara personer. Det som lagras på serversidan långsiktigt är emailkonversations-id för spårbarhet och att kunna lagra ärende- och beslutsstatus.

- Returnerar endast **strukturerad information och textförslag** till klienten för presentation för användaren.

- Servern lagrar endast följande information lokalt:

  - Policydokument och svarsmallar som är av vikt för att kunna utveckla drafts.

  - Ärende- och beslutsstatus baserat på emailkonversationsid. Detta görs för att möjliggöra spårbarhet om vad som har behandlats.

  - Statistikdata i form av antal email av olika ärendetyper, antal email som rekommenderats för manuell hantering, antal drafts genererade.

  - Kostnadsunderlag i form av tokennyttjande och antal genererade drafts.

  - Driftsdata med fokus på tillgänglighet och prestanda.

Viktiga begränsningar (implicit men centrala) är att serverdelen:

- har ingen åtkomst till klubbens brevlådor,

- har inga autentiseringsuppgifter,

- kan inte läsa eller skicka e-post,

- kan inte initiera åtgärder på egen hand,

- och kan inte koppla innehåll till en identifierbar individ.

Alla dessa begränsningar är arkitektoniska, inte konfigurationsval.

**Sammanfattande roll**

Serverdelen är ett centralt analys- och resonemangsstöd som avlastar användaren från repetitivt och kognitivt arbete, men som aldrig tar över ansvar, åtkomst eller beslut. Den gör det möjligt att använda avancerat AI-stöd på ett kontrollerat sätt, just därför att dess befogenheter är strikt avgränsade.

### Klientens roll och ansvar i HMB

I HMB är klienten avsiktligt utformad som en tunn och självständig komponent, med ett tydligt och begränsat ansvar. Den är endast löst kopplad till serverdelen och fungerar som den enda delen av systemet som har direkt tillgång till klubbens e-postmiljö.

Det är alltid klienten som autentiserar sig mot Microsoft 365 och som har behörighet att läsa och skriva i klubbens brevlådor. Serverdelen har ingen egen åtkomst till e-postsystemet och har aldrig tillgång till lösenord, tokens eller andra autentiseringsuppgifter. Den kan inte läsa e-post på egen hand och kan inte initiera någon kommunikation mot brevlådan.

När innehåll skickas vidare till serverdelen för analys och AI-stöd är det alltid klienten som avgör vad som skickas. Innan ett e-postmeddelande lämnar klienten anonymiseras innehållet så att avsändarens namn, e-postadress och andra identifierande uppgifter inte följer med. Serverdelen får därmed endast tillgång till ett rensat textinnehåll som är tillräckligt för semantisk analys, men som saknar personidentitet.

Denna uppdelning innebär att serverdelen aldrig befinner sig i en position där den kan koppla innehåll till en individ. Den kan inte heller återskapa identitet i efterhand, eftersom den aldrig får tillgång till den informationen från början. All koppling mellan analysresultat och faktisk avsändare sker uteslutande i klienten, efter att resultatet har returnerats.

Att klienten är tunn betyder inte att den är passiv, utan att den är avsiktligt begränsad till ett fåtal kritiska uppgifter: åtkomst till brevlådan, anonymisering av innehåll, presentation av analys och utkast, samt utskick av godkända svar. All annan logik är flyttad bort från klienten för att minska komplexitet och risk.

Den lösa kopplingen mellan klient och server innebär också att klienten inte ”litar” på servern med känslig information. Servern ses som ett beräknings- och analysstöd, inte som en del av klubbens interna IT-miljö. Detta gör arkitekturen robust även ur ett förtroendeperspektiv, eftersom ett eventuellt problem i serverdelen inte ger tillgång till e-post, identiteter eller autentiseringsuppgifter.

Som ett ytterligare förtroendeskapande inslag kan klientkoden hållas tillgänglig för granskning av klubbchefer eller tekniskt sakkunniga. Det gör det möjligt att i praktiken verifiera att klienten inte skickar vidare lösenord, e-postadresser eller identifierande data, och att anonymiseringen faktiskt sker innan någon extern behandling. Transparensen är här ett medvetet designval snarare än ett marknadsargument.

Sammantaget innebär detta att HMB:s säkerhet inte bygger på löften om hur servern beter sig, utan på en arkitektur där servern aldrig får möjlighet att göra något den inte ska. All åtkomst till brevlådan, all hantering av identitet och allt ansvar för utskick är koncentrerat till klienten, där klubbens kontroll redan finns.

<span id="_Toc217527444" class="anchor"></span>
