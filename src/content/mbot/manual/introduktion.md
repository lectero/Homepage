# Introduktion

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
