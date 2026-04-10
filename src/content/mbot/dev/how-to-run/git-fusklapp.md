---
---
# Git – 1-sidig manual för Dennis & Anders
*(MBot – vardagsarbete)*

Detta dokument är **normativt**.  
Det beskriver **vad ni "får" göra**, **hur ni gör det**, och **vad ni inte ska göra**.

Systemägare och release-ansvarig: **Jörgen**.  
Alla releaser (server, klient, API, testverktyg) sker **endast i dialog**.

Ni arbetar i **klient**, **testverktyg** eller andra icke-kritiska delar.  
Servern och release-hantering görs av en person (för närvarande Jörgen). Detta är egentligen endast för att vi inte skall få svåra "merge-konflikter" etc som är svåra att nysta upp.

---

## 1. Grundprincip (läs detta först)

- Ni jobbar **aldrig direkt på `main`**
- Ni jobbar **alltid i egna branches**
- Ni gör **inga releaser**
- Ni gör **inga rebase**
- Ni gör **inga force push**
- När något “känns klart” → **ta dialog**, gör inget själv

---

## 2. Var repon ligger

### macOS (Jörgen)
```text
~/GIT/MBot-Mailbot/
```

### Windows (Dennis & Anders)
```text
C:\GIT\MBot-Mailbot\
```

Exempel:
```text
hmb-client
hmb-mail-injector
(hmb-server – rörs ej utan uttrycklig dialog)
```

---

## 3. Terminal vs GitHub Desktop

### Använd **GitHub Desktop** till:
- se vilka filer du ändrat
- skapa branch
- skriva commit-meddelanden
- pusha
- öppna Pull Request

### Använd **Terminal** till:
- **ingenting avancerat**
- endast om du får instruktioner

Om du är osäker → **stanna i Desktop**.

---

## 4. Dagligt arbetsflöde (detta är 90 % av jobbet)

### Steg 1 – uppdatera `main`
```bash
git checkout main
git pull
```

(Detta kan göras i Desktop också.)

---

### Steg 2 – skapa din branch
```bash
git checkout -b feature/kort-beskrivning
```

Exempel:
```text
feature/client-ui-cleanup
feature/mail-injector-json-input
```

---

### Steg 3 – jobba och commita
```bash
git add .
git commit -m "Kort, tydlig beskrivning"
```

Gör hellre **flera små commits** än en stor.

---

### Steg 4 – pusha din branch
```bash
git push -u origin feature/kort-beskrivning
```

Nu är ditt arbete synligt för Jörgen, men inget är integrerat.

---

### Steg 5 – öppna Pull Request
- Görs i GitHub Desktop eller på GitHub
- Beskriv kort:
  - vad du gjort
  - vad som är klart
  - vad som eventuellt återstår

Nu är du klar.

---

## 5. När något “känns klart”

Gör **inte**:
- taggar
- release branches
- merge till `main`

Gör istället:
- säg till Jörgen
- peka på din PR
- diskutera nästa steg

All release-logik hanteras centralt.

---

## 6. Absoluta “DON’T DO”

Dessa är **förbjudna** utan undantag:

- ❌ `git rebase`
- ❌ `git push --force`
- ❌ jobba direkt på `main`
- ❌ skapa eller radera taggar
- ❌ merge utan PR
- ❌ ändra serverlogik
- ❌ “snabbfixa” något i sista stund

Om något verkar behöva detta → **stanna och fråga**.

---

## 7. Om något går fel

- Ta det lugnt, gör hellre för lite och stanna upp.
- Commits försvinner nästan aldrig
- Säg exakt vad du gjorde

Git är designat för att vara återställbart.

---

## 8. Sammanfattning

- Din uppgift: utveckla din del, "isolerat"
- Jörgens uppgift: integration, release, ansvar
- Git används för spårbarhet
- När du är osäker → gör inget

Detta räcker för att vi ska kunna arbeta effektivt **utan att riskera systemet** och att vi får svåra GIT-problematiker (jag är ingen expert på GIT så ovan är enkla spelregler som förhoppningsvis skall göra att vi inte får svåra domino-effekter och git-cirkus)
