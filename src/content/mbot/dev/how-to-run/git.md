# Git-manual för HMB Mailbot
*(server, klient, api-kontrakt, testverktyg)*

Denna manual är skriven för utvecklare som **inte förutsätts ha läst någon Git‑bok**.
Alla begrepp som används förklaras – först kort i Git‑termer, sedan i vanlig svenska.

Målet är **förståelse + skadeisolering**, inte Git‑finess.

---

## 0. Grundhållning (viktigast)

Git är ett **versionsarkiv**, inte ett samarbetsmagiskt system.
Vi använder Git för att:
- kunna återskapa exakt vad som kördes
- kunna felsöka bakåt i tiden
- undvika att misstag sprider sig (“dominoeffekt”)

Vi använder **så få Git‑funktioner som möjligt**.

---

## 1. Repositories (vad som finns och varför)

Ni har fyra repos:

1. **hmb-server**
   - Serverlogik, IP, policy, integrationer
   - Privat
2. **hmb-client**
   - Kod som kan delas externt (t.ex. GDPR-granskning)
3. **hmb-api**
   - Kontrakt: OpenAPI, JSON Schema
   - Definierar exakt vad klient och server får säga
4. **hmb-mail-injector / hmb-test-tools**
   - Fristående test- och injektionsverktyg
   - Ska aldrig påverka produktion

Separata repos = isolerade risker.

---

## 2. Katalogstruktur (alla miljöer)

### macOS
```text
~/GIT/HMB-Mailbot/
```

### Windows (Git Bash eller PowerShell)
```text
C:\GIT\HMB-Mailbot\
```

Alla repos ligger bredvid varandra, inte inuti varandra.

---

## 3. Terminal vs GitHub Desktop (mycket viktigt)

### Grundregel
- **Terminalen = sanningen**
- **GitHub Desktop = bekvämlighet**

### Använd terminalen till:
- gå till tidigare versioner (taggar, commits)
- felsökning
- release‑arbete
- jämförelser mot historik

### Använd GitHub Desktop till:
- se vilka filer du ändrat
- skriva commits
- skapa branches
- pusha
- öppna Pull Requests

**GitHub Desktop ersätter inte Git.**
Den gömmer flera kritiska operationer.

---

## 4. Centrala begrepp (med full förklaring)

### Commit
**Git‑term:** snapshot identifierad av hash.

**Förklaring:**  
En commit är ett fryst tillstånd av alla filer vid ett tillfälle.
Den förändras aldrig i efterhand.
All felsökning börjar med commits.

---

### Branch
**Git‑term:** rörlig pekare till commit.

**Förklaring:**  
En branch är en egen arbetslinje.
Du kan prova saker där utan att påverka den stabila versionen.
När du är klar kan branchen slås ihop med main.

---

### Main
**Git‑term:** huvudbranch.

**Förklaring:**  
`main` är den version alla litar på.
Den ska alltid gå att bygga och köra.
Om `main` är trasig har teamet ett problem.

---

### Tag
**Git‑term:** fast namn på commit.

**Förklaring:**  
En tag säger:
> “detta exakt är version X”

Taggar används för:
- beta
- skarpa releaser
- felsökning

De flyttar sig aldrig.

---

### Pull Request (PR)
**Git‑term:** begäran att merge:a branch.

**Förklaring:**  
En PR är ett kontrollerat sätt att föra in ändringar i `main`.
Inget hamnar i `main` utan PR.

---

### Merge
**Git‑term:** sammanfogning av brancher.

**Förklaring:**  
Merge betyder:
> “lägg till denna ändring ovanpå det som redan finns”

Merge **skriver inte om historien**.
Det är därför säkert.

---

### Rebase  ❌ (används inte i teamet)
**Git‑term:** flyttar om commits ovanpå annan bas.

**Förklaring utan Git‑lingo:**  
Rebase ändrar historien bakåt i tiden.
Commit‑ID:n ändras.
Om någon annan redan sett branchen uppstår förvirring och risk.

**Policy:**  
Rebase används **inte** på branches som delas.
I praktiken: använd inte rebase alls.

---

### Force push  ❌
**Git‑term:** `git push --force`

**Förklaring:**  
Force push skriver över historiken på servern.
Andras arbete kan försvinna eller bli inkonsekvent.

**Policy:**  
Force push är förbjudet på `main` och förbjudet på delade branches.

---

## 5. Minimal uppsättning kommandon (detta räcker)

### Orientering
```bash
git status
git log --oneline --decorate --graph --max-count=15
```

### Uppdatera lokalt utan risk
```bash
git fetch origin --tags
git pull
```

### Skapa branch
```bash
git checkout -b feature/min-grej
```

### Commit
```bash
git add .
git commit -m "Beskriv ändringen"
```

### Push
```bash
git push -u origin feature/min-grej
```

### Ta in senaste `main` i din branch (säkert)
```bash
git fetch origin
git merge origin/main
```

---

## 6. Gå tillbaka till tidigare version (felsökning)

### Exempel: reproducera kundbugg i v2.1.0
```bash
git fetch --tags
git checkout v2.1.0
```

Nu är du exakt i det tillståndet.

För att jobba vidare:
```bash
git checkout -b debug/v2.1.0
```

Inget kan gå sönder här.

---

## 7. Release‑modell

### Utveckling
- feature‑branches
- PR till `main`

### Beta
```text
v2.1.0-beta.1
```

### Skarp
```text
v2.1.0
```

Beta och skarp är **taggar**, inte branches.

---

## 8. Mail‑injector / test‑repo

- Får vara friare
- Ska aldrig påverka produktion
- Används för reproducerbara tester

Git‑reglerna är samma, men kraven lägre.

---

## 9. “Don’t do” (absoluta regler)

1. Jobba inte direkt på `main`
2. Rebase inte delade branches
3. Force‑push aldrig
4. Radera inte releasetaggar
5. Lita inte på GUI för historik
6. Blanda inte testkod i produktion
7. Gör inte stora, otydliga commits

---

## 10. Slutlig sammanfattning

- Git används för **spårbarhet**, inte kreativitet
- Brancher ger isolering
- Taggar ger sanning
- PR ger kontroll
- Terminalen är grunden
- GitHub Desktop är hjälpmedel

Om du följer denna manual kan du:
- alltid gå bakåt
- alltid förstå vad som kördes
- aldrig råka riva sönder andras arbete
