---
---
# Server Access & Escalation Policy
*(MBot – normativt dokument)*

Detta dokument är **bindande** för alla som arbetar med MBot.

Syftet är att:
- skydda server-IP
- förhindra oavsiktliga drift- och säkerhetsincidenter
- tydliggöra ansvar, mandat och eskalationsvägar

Detta är **inte** ett tekniskt dokument.  
Det är ett **styr- och ansvarsdokument**.

---

## 1. Roller och ansvar

### Systemägare (Owner)
**Jörgen**
- Äger systemet (server, klient, API, testverktyg)
- Ansvarar för att
  - göra serverreleaser
  - ändra serverkonfiguration
  - godkänna API-kontraktsändringar
  - besluta om produktionssättning
  - hantera incidenter och rollback

Allt serverarbete sker **på Jörgens ansvar**, även om andra bidrar med kod.

---

### Utvecklare (Dennis, Anders m.fl.)
- Arbetar i:
  - klient
  - test- och injektionsverktyg
  - eventuellt API-kontrakt efter dialog

Git-åtkomst ersätter **inte** mandat.

---

## 2. Vad räknas som serverkritisk ändring

Följande betraktas alltid som **serverkritiskt**:

- ändring av klassificeringslogik
- ändring av policy enforcement
- ändring av dataflöden
- ändring av logging, retention eller radering
- ändring av autentisering eller behörighet
- ändring av kostnads- eller throttlinglogik
- ändring av externa integrationer
- ändring av miljövariabler

Även små kodändringar kan vara serverkritiska.

---

## 3. Eskalationsprincip

### När ska du eskalera?
Eskalera **omedelbart** om något av följande gäller:

- du är osäker på om en ändring är serverkritisk
- du upptäcker ett beteende som kan påverka:
  - dataskydd
  - säkerhet
  - stabilitet
  - kostnader
- något “känns fel” men du kan inte formulera exakt vad

Osäkerhet är **inte** ett misslyckande.  
Oeskalerad osäkerhet är det.

---

### Hur eskalerar du?
1. Gör inga fler ändringar
2. Dokumentera kort:
   - vad du sett
   - var (repo, branch, commit)
   - varför du reagerade
3. Kontakta Jörgen/Teamet så pratar vi ihop oss

Ingen förväntas “lösa det själv” på serversidan.


---

## 4. Principiell sammanfattning

- Servern är systemets mest känsliga del
- Eskalation är önskvärt, inte störande
- Hellre ett stopp för mycket än ett för lite

Detta dokument är till för att skydda:
- systemet
- användarna
- utvecklarna
