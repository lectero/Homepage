---
---
# Utvecklingsidéer (Epics)

Denna sida samlar större utvecklingsidéer (epics) för MBot.

Epics är avsedda att fungera som sammanhållna utvecklingsspår snarare än
funktionella backlog-poster. De beskriver riktning, motiv, avgränsningar
och designprinciper, inte färdiga lösningar.

Innehållet här är inte tidsbundet och inte ett löfte.
Det är avsett att mogna genom praktisk användning, dialog och reflektion.

---

## Epic: Windows-klient som klubb-lokal agent

### Bakgrund och motiv
Den svenska golfklubbsvärlden är i praktiken starkt Windows- och PC-orienterad.
Administrativa system, GIT, ekonomisystem och klientmiljöer körs nästan alltid
på Windows. En dedikerad Windows-klient skapar därför både igenkänning och
professionell trovärdighet.

Samtidigt är MBot medvetet byggd kring Outlook som primärt
arbetsgränssnitt. Klienten ska därför inte ersätta eller konkurrera
med Outlook, utan fungera som en stabil och diskret lokal agent.

### Grundidé
En (1) klubb-lokal klient kör kontinuerligt och:

- bevakar definierade inkorgar
- kommunicerar med MBot-servern
- hanterar autentisering och nycklar
- signalerar systemets status

Klienten representerar klubben som helhet, inte enskilda användare.

### Designprinciper
- En klient per klubb
- Outlook är alltid primärt arbetsgränssnitt
- Klienten är tunn och innehåller minimal affärslogik
- Tillgänglighet och korrekthet prioriteras framför snabb reaktion
- Dubbelhantering är värre än korta driftglapp

### Användning och interaktion
Klienten körs normalt kontinuerligt i bakgrunden och kräver mycket
sällan aktiv interaktion.

Interaktion sker främst vid:
- initial installation
- uppladdning av nya mallar
- ändring av policy eller kategorier
- felsökning

### Avgränsningar
- Ingen per-användar-inloggning
- Ingen daglig operativ användning
- Ingen duplicering av Outlook-funktionalitet

---

## Epic: Multi-server och tillgänglighet som grundkrav

### Bakgrund och motiv
Ett system som upplevs som instabilt underminerar snabbt förtroendet hos
kanslipersonal. För MBot är därför tillgänglighet ett högre
prioriterat krav än maximal säkerhetshärdning.

### Grundidé
MBot ska från skarp drift använda flera servrar för att:

- undvika single points of failure
- möjliggöra planerade och oplanerade avbrott
- stödja framtida skalning

Klienten känner till flera servrar och kan själv hantera failover.

### Designprinciper
- Tillgänglighet prioriteras framför aggressiv fail-fast
- Klienten väljer server vid behov
- Serverarkitekturen ska vara transparent för högre funktioner

### Säkerhet och autentisering
- Autentisering sker på klubb-/klientnivå, inte individnivå
- Bootstrap-nycklar används endast vid installation
- Löpande access sker via roterbara tokens med grace-period

### Avgränsningar
- Ingen central lastbalanserare som enda åtkomstpunkt
- Ingen beroende av extern infrastruktur för grundläggande drift

---

## Epic: Klubb som första-klassens domänobjekt

### Bakgrund och motiv
När fler klubbar ansluts räcker det inte att se klubbar som
konfigurationsposter. Varje klubb har egna arbetsmönster,
policyval och volymer som måste respekteras.

### Grundidé
En klubb är ett första-klassens domänobjekt med:

- identitet
- konfiguration
- historik
- livscykel

### Konsekvenser
- Statistik och policy är alltid klubb-specifik
- Klubbar kan pausas eller avvecklas utan tekniska ingrepp
- Ingen korsvis dataläckage mellan klubbar

### Avgränsningar
- Inga individbaserade domänobjekt
- Ingen jämförelse mellan klubbar i ranking-syfte

---

## Epic: Statistik för transparens och lärande

### Bakgrund och motiv
Statistik i MBot är inte till för övervakning,
utan för att skapa förståelse och gemensam insikt.

### Grundidé
Statistik används för:

- driftövervakning
- dialog under onboarding
- gemensamt lärande mellan MBot och klubb

### Användningsnivåer
- Operativ: toppar, avvikelser, fel
- Periodisk: månadsrapporter och sammanfattningar

### Designprinciper
- Fokus på mönster, inte individer
- Samma bild för MBot och klubbens tekniskt ansvariga
- On-demand snarare än kontinuerlig presentation

### Avgränsningar
- Ingen individövervakning
- Ingen prestationsmätning av personal

---

## Epic: Explainability som stöd, inte störning

### Bakgrund och motiv
Automation utan förklarbarhet skapar osäkerhet och motstånd.

### Grundidé
MBot ska kunna förklara sitt beteende när användaren vill,
utan att belasta det dagliga flödet.

### Exempel
- Varför ett ärende inte automatiserades
- Varför autosändning avvisades
- Vilka riskdimensioner som var avgörande

### Designprinciper
- Förklaringar är tillgängliga men inte påträngande
- Förklaringar stödjer dialog, inte rättfärdigande

---

## Epic: Onboarding som lärandeprocess

### Bakgrund och motiv
De första 10–15 klubbarna representerar inte bara kunder utan även
en gemensam lärandeperiod.

### Grundidé
Onboarding ses som en dialog där:

- klubben lär sig systemets logik
- MBot lär sig klubbarnas verkliga behov

### Användning av statistik
Statistik används aktivt för att:

- diskutera arbetsmönster
- identifiera förbättringar
- avgöra vad som kan automatiseras bort i framtiden

### Målbild
- Minskad onboarding-friktion över tid
- Mer självbärande klubbar
- Ett system som speglar verklig användning
