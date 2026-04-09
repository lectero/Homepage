# Klient och server

## Översikt
HMB Mailbot bygger på en klient–server-arkitektur där åtkomst och ansvar är strikt separerade.

- Klienten är den enda komponenten med åtkomst till klubbens Microsoft 365-miljö.
- Servern är ett analys- och resonemangslager utan åtkomst till brevlådor och utan personidentifierande data.

## Varför denna separation?
- GDPR genom design: personuppgifter lämnar inte Microsoft 365 vid AI-bearbetning.
- Riskkontroll: servern kan inte skicka mail, läsa brevlådor eller agera självständigt.
- Förtroende: arkitekturen gör fel i serverdelen mindre farliga.

## Klientens ansvar (klubb-lokal agent)
- autentisering mot Microsoft 365
- läsning av e-post
- anonymisering/avidentifiering innan serveranrop
- presentation av resultat till användare i Outlook
- utskick sker först efter mänskligt beslut

## Serverns ansvar
- semantisk analys av avidentifierat innehåll
- klassificering mot taxonomi
- matchning mot mallar och policy
- generering av drafts
- sammanställning av klubbnivå-statistik

## Avgränsningar
- servern har inga tokens eller lösenord för Microsoft 365
- servern har ingen möjlighet att identifiera individer
- beslut om utskick tas inte av LLM
