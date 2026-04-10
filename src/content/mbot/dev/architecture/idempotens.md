---
---
# Idempotens och dubbelhantering

Idempotens betyder att samma input kan behandlas flera gånger utan att resultatet blir dubbelt.

I MBot är detta centralt eftersom dubbelhantering:
- slösar aktiv tid hos personal
- underminerar förtroende
- kan skapa motstridiga drafts och status

## Praktisk strategi

- identifiera mail med stabila id:n (message id, thread eller conversation id)
- lagra state per klubb och mailbox
- gör operationer idempotenta, till exempel att “create draft” blir no-op om draft redan finns

## Relation till multi-server

Failover kräver att redan utförda steg kan upptäckas utan att skapa dubletter.
Det kan uppnås genom gemensam state-store eller genom server-svar som inkluderar “already processed”.

## Relation till fel-taxonomi

Fel-taxonomin ska hantera scenarier där ett steg är delvis utfört och klienten är osäker på om en åtgärd lyckades.
Default ska vara att undvika dubletter.
