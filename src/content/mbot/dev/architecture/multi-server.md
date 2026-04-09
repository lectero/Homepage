---
---
# Multi-server och failover

## Översikt
Vid skarp drift bortom pilot körs HMB Mailbot mot flera servrar för att undvika single points of failure.

Klienten känner till flera servrar och kan välja en alternativ endpoint vid behov.

## Principer
- tillgänglighet prioriteras
- failover ska inte skapa dubbelhantering
- klienten ska kunna fortsätta i säkra lägen vid delvis degraderad drift

## Konsekvenser för state och idempotens
För att failover ska vara säkert måste systemet:
- vara idempotent per message-id och/eller thread-id
- kunna känna igen redan behandlade ärenden
- undvika att samma mail behandlas flera gånger på olika noder

## Autentisering
Autentisering sker på klubb-/klientnivå. Nycklar och tokens måste kunna valideras oavsett vilken servernod som svarar.

## Öppet
Detaljerad felhantering styrs av fel-taxonomin.


## Se även

- [Idempotens och dubbelhantering](idempotens.md)
