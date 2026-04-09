---
---
# Serverdelens funktioner i HMB (översikt)
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
- Arbetar helt **utan egen lagring av personuppgifter** och utan att bygga individuella profiler eller historik kopplad till identifierbara personer. Det som lagras på serversidan långsiktigt är emailkonversations-id  för spårbarhet och att kunna lagra ärende- och beslutsstatus.
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
##
