# Dataskydd och GDPR

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
