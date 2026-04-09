# HMB Python Development & ChatGPT Usage Guidelines (v1.2)
*(Gemensam norm för Python-kod och AI-stödd kodgenerering i HMB Mailbot)*

Detta dokument ersätter:
- Python QuickGuide
- Python Coding Guidelines
- ChatGPT CodeGen Checklist

Syftet är att samla **allt som rör Python och ChatGPT** i ett sammanhållet ramverk,
utan överlapp eller motstridiga instruktioner.

Målbilden är enkel:
- Python-kod ska vara **lättläst för C/C#/Java-utvecklare**
- ChatGPT ska vara ett **verktyg**, inte en källa till okontrollerad magi
- Koden ska vara **granskbar, testbar och långsiktigt hållbar**

---

## 1. Grundhållning

- Läsbarhet slår korthet
- Explicit kod slår implicit “pythonic” magi
- Stabilitet och spårbarhet slår kreativ kodstil
- Hellre några rader extra än kod som kräver Python-idiom för att förstå

Python används här som **ett tydligt språk**, inte som ett uttrycksmedel.

---

## 2. Tillåten komplexitet (viktigt)

Vi utgår från att:
- teamet är starkt i C/C#/Java och Unix
- Python är nytt för alla

Detta innebär:
- avancerade Python-konstruktioner **är inte förbjudna i sig**
- men de är **inte norm**
- om de används ska det vara motiverat, dokumenterat och enkelt att följa

Tumregel:
> Om en kollega måste “kunna Python” för att förstå koden → skriv om.

---

## 3. Kodstil och struktur

### 3.1 Formatterare och lint
- Följ PEP 8
- `black` används konsekvent (88 tecken)
- `ruff` används om projektet har det

```bash
black .
ruff check .   # om tillgängligt
```

### 3.2 Fil- och modulstruktur
- En fil = ett tydligt ansvar
- Undvik växande `utils.py`
- Separera:
  - domänlogik
  - I/O (Graph, nätverk, filsystem)

### 3.3 Funktioner
- En funktion gör en sak
- Undvik långa funktioner (>40–50 rader)
- Använd guard clauses hellre än nästlad logik

---

## 4. Typning och data

- Använd type hints där det är rimligt
- Publika funktioner ska alltid ha typer
- Använd `dataclass` när data har tydlig struktur

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class Mail:
    subject: str
    body: str
    sender: str
```

Typning ses som **körbar dokumentation**.

---

## 5. Python-idiom: vad som är OK – och inte

### 5.1 OK att använda
- tydliga `for`-loopar
- `with` för resurser
- enkel list comprehension (en nivå, ingen logik)
- dict `.get()` med default

### 5.2 Använd med stor återhållsamhet
- list/dict/set comprehensions med villkor
- generatoruttryck
- ternary operator (endast om uppenbart)

### 5.3 Undvik normalt (kräver motivering)
- walrus operator `:=`
- `functools.reduce`
- komplexa one-liners
- metaprogrammering
- decorators som ändrar beteende dolt

### 5.4 Förbjudet i produktionskod
- `eval`, `exec`
- monkey patching
- dynamiska imports via strängar

---

## 6. Felhantering och logging

- Fånga **specifika** exceptions
- Undvik `except Exception:` utan re-raise
- Logga beslut och händelser, inte persondata
- `print()` får inte checkas in i produktionskod

```python
try:
    value = int(text)
except ValueError as e:
    logger.error("Invalid input: %s", text, exc_info=e)
    raise
```

---

## 7. Tester

- Ny logik → tester
- Bugfix → regressionstest
- Tester ska vara deterministiska
- Testkod är förstaklasskod

---

## 8. ChatGPT – hur vi använder det klokt

### 8.1 Vad ChatGPT är bra på
- struktur och scaffolding
- översätta tydliga krav till kod
- skriva tester för väl specificerat beteende
- föreslå refaktorering för **klarhet**

### 8.2 Vad ChatGPT inte är bra på
- gissa API-detaljer
- säkerhet “by default”
- arkitekturval utan ramar
- edge cases som inte nämns

Utgå alltid från att ChatGPT **kan ha fel**.

---

## 9. Krav när ChatGPT används för kod

När du ber ChatGPT om kod:

1. Be om **läsbar kod**, inte kompakt
2. Be om type hints
3. Be om fullständiga filer, inte fragment
4. Be om tester för ny logik
5. Be om tydlig felhantering
6. Använd placeholders för secrets

Efter generering:
- läs koden som reviewer
- leta efter “footguns”
- förenkla om något känns för smart

---

## 10. Säkerhet och integritet

- Lägg aldrig in riktiga secrets i prompts
- Undvik persondata i exempel
- Om kod riskerar att lagra, logga eller skicka persondata:
  → stanna och ta dialog

---

## 11. Snabb kodgranskningschecklista

- Förstår jag kontrollflödet direkt?
- Är typer och data tydliga?
- Är felhantering specifik?
- Är loggning rimlig?
- Finns onödiga Python-tricks?
- Finns tester för icke-trivial logik?

---

## 12. Slutprincip

Python används här för att:
- vara tydlig
- vara stabil
- vara underhållbar

Inte för att vara smart.

Kod som:
- inte kan förstås
- inte kan testas
- inte kan förklaras

…hör inte hemma i systemet.
