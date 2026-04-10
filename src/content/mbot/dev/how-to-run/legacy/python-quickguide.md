---
---
# Python QuickGuide – Dennis & Anders
*(MBot – skriv Python som en C#/Java-utvecklare, fast i Python)*

Detta är en **1-sidig norm** för Python-kod i MBot.
Målet är att koden ska vara:
- lätt att förstå
- lätt att reviewa
- lätt att testa

Vi undviker “superpythonic” kompaktkod.

---

## 1. Grundregler (korta och hårda)

- Skriv **tydligt**, inte smart
- Hellre 10 rader loop än 1 rad “magi”
- Använd type hints på viktiga funktioner
- Separera logik från I/O (API/Graph/filer)

---

## 2. Struktur (minimalt)

### Filnivå
- En fil = ett ansvar
- Ingen “utils.py” som växer okontrollerat

### Funktionsnivå
- En funktion gör en sak
- Bryt upp om du börjar få “inre logikträsk”

---

## 3. Idiom som är OK (använd gärna)

### Enkel loop
```python
items: list[str] = []
for x in raw:
    if not x:
        continue
    items.append(x.strip())
```

### Tidig exit (guard clauses)
```python
def parse_subject(subject: str) -> str:
    if not subject:
        return ""
    return subject.strip()
```

### Dataclass för tydliga dataobjekt
```python
from dataclasses import dataclass

@dataclass(frozen=True)
class Mail:
    subject: str
    body: str
    sender: str
```

### `with` för resurser
```python
with open(path, "r", encoding="utf-8") as f:
    text = f.read()
```

### Dict-lookup med default
```python
value = mapping.get(key, "")
```

---

## 4. Idiom som är OK men bara i enkel form

### List comprehension (max en nivå, ingen komplex logik)
OK:
```python
names = [m.sender for m in mails]
```
Inte OK:
```python
names = [normalize(x) for m in mails for x in m.recipients if x and is_valid(x)]
```

### Ternary (bara om det är uppenbart)
OK:
```python
label = "yes" if flag else "no"
```

---

## 5. Saker ni ska undvika (nästan alltid)

- `eval`, `exec`
- `:=` (walrus operator)
- `reduce`
- comprehensions med flera loopar / flera villkor
- generatoruttryck som gömmer felhantering
- “korta” one-liners som gör mer än en sak
- metaprogrammering, decorators som ändrar beteende på ett dolt sätt

Tumregel:
> om du måste läsa raden två gånger, skriv om.

---

## 6. Felhantering (gör så här)

- fånga specifika fel
- logga och kasta vidare om du inte kan hantera

```python
try:
    n = int(text)
except ValueError as e:
    logger.error("Invalid number: %s", text, exc_info=e)
    raise
```

Undvik:
```python
except Exception:
    pass
```

---

## 7. Logging (gör så här)

- använd `logging`
- inga `print()` i incheckad kod
- logga beslut, inte persondata

---

## 8. “När ChatGPT ger kod” (krav)

När du ber ChatGPT om Python-kod, skriv alltid:
- “No clever one-liners”
- “Prefer explicit loops over comprehensions if logic is non-trivial”
- “Add type hints”
- “Add small unit tests”

Och gör alltid en snabb check:
> Förstår jag detta direkt utan att “kunna Python-idiom”?  
Om nej: förenkla.

---

## 9. Minimal verktygsrutin (för gemensam stil)

Kör vid behov:
```bash
black .
```

Om det finns `ruff` i projektet:
```bash
ruff check .
```


