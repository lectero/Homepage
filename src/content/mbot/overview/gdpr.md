---
---
# Dataskydd och GDPR

MBot är konstruerat för att uppfylla GDPR genom hur systemet hanterar data — inte genom efterhandsåtgärder eller användarberoende rutiner. Grundprincipen är att personuppgifter aldrig lämnar verksamhetens Microsoft 365-miljö i samband med AI-bearbetning.

## GDPR via arkitektur

All e-post som hanteras av MBot ligger kvar i verksamhetens Microsoft 365-miljö. Systemet skapar inga externa kopior av e-post, bilagor eller metadata för lagring eller analys. Verksamheten är fortsatt personuppgiftsansvarig för all e-posthantering — detta ansvar förändras inte av systemets användning.

När MBot analyserar inkommande e-post sker AI-bearbetningen uteslutande på innehåll rensat från personidentifierande information. Avsändarens namn, e-postadress och andra identifierande uppgifter kommuniceras aldrig till AI-tjänsten. Systemet skickar inte e-postadresser, namn, medlemsnummer eller andra identifierande fält till externa AI-servrar.

MBot använder OpenAI som primär språkmodell och Anthropic Claude som automatisk failover. Bägge används uteslutande för att bearbeta anonymiserat och avidentifierat innehåll i syfte att föreslå svarstexter. Ingen av modellerna får information om vem avsändaren är.

Mänsklig kontroll kringgås aldrig. Svar som genereras av MBot är förslag — alltid en användare som granskar och godkänner innan ett svar skickas.

## Två datakategorier

MBot skiljer tydligt på två kategorier av data med olika syfte och policy:

### 1. Operativ logg och revision

Syfte: drift, felsökning och systemrevision.

Operativa loggar innehåller minimalt med data: tidstämplar, anonymiserade avsändaridentifierare (hash, ej klartext), ärendekategori, statusövergångar, modellversion och statuskoder. Råa e-posttexter loggas inte som standard.

Tillåtet:
- `sender_hash` (pseudonymiserad, ej klartext e-postadress)
- Tidstämplar och kategoritilldelning
- Systemstatus, modellversioner, felkoder

Inte tillåtet utan explicit policy-undantag:
- Fullständig e-postadress i klartext
- Råa e-posttexter
- Fullständig e-postämnesrad

### 2. Utvärderingskorpus (kontrollerad)

Syfte: kvalitetsförbättring, promptutveckling och longitudinell analys.

För att kunna förbättra svarsförslag över tid — jämföra promptversioner, analysera drafts mot faktiskt skickade svar — behövs en separat utvärderingskorpus med striktare åtkomstkontroll och kortare retention än operativ logg.

Denna data:
- Hanteras med separat retention och åtkomstkontroll
- Används enbart för analys och förbättring, inte för operativ drift
- Täcks av DSAR-processen (rätt till registerutdrag och radering)

## Rätt till registerutdrag (DSAR)

Båda datakategorierna täcks av verksamhetens DSAR-process. Systemet stödjer identifiering av lagrad data per avsändarhash för att möjliggöra radering eller utlämning på begäran.

## Sammanfattning

MBot uppfyller GDPR på grund av att:

- personuppgifter aldrig skickas till AI-tjänsten
- all e-post ligger kvar i verksamhetens Microsoft 365-miljö
- AI-bearbetning sker på avidentifierat innehåll
- mänskligt ansvar alltid finns kvar i besluts- och kommunikationskedjan
- operativ logg och utvärderingsdata hanteras som separata datakategorier med tydliga policies

Systemet är ett stöd för e-posthantering, inte en självständig aktör i personuppgiftsbehandlingen.

## Fördjupning

Mer detaljer om klient och server, samt hur anonymisering och ansvarsfördelning fungerar, finns i manualen.

- [Manual: Klient och server](../../manual/arkitektur_klient/)
