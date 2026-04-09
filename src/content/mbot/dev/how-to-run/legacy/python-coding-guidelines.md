# HMB Mailbot – Python Coding Guidelines
*(Gemensam norm)*

Syftet är **förutsägbarhet, läsbarhet och säkerhet**.

---

## 1. Grundprinciper

- Läsbar kod slår kort kod
- Explicit är bättre än implicit
- Fel ska upptäckas tidigt
- Kod skrivs för nästa person, inte för dig själv

---

## 2. Stil och struktur

- Följ **PEP 8** konsekvent/så gott det går, här är länk till
- Använd **black** för formattering
- Max 88 tecken per rad (black default)

```bash
black .
```

---

## 3. Typning

- Använd **type hints** överallt där det är rimligt
- Funktioner ska ha tydliga in- och ut-typer

```python
def classify_mail(subject: str, body: str) -> str:
    ...
```

Typning är dokumentation som körs i huvudet.

---

## 4. Funktioner

- En funktion gör **en sak**
- Undvik långa funktioner (över 40–50 rader)
- Bryt hellre upp än att optimera

---

## 5. Felhantering

- Fånga **specifika** exceptions
- Undvik `except Exception:`
- Logga alltid fel med kontext

```python
try:
    ...
except ValueError as e:
    logger.error("Invalid input", exc_info=e)
    raise
```

---

## 6. Logging

- Använd standard `logging`
- Inga `print()` i produktionskod
- Logga beslut, inte data

Loggar är för drift och felsökning, inte debug-spam.

---

## 7. Konfiguration

- Ingen hårdkodad konfiguration
- Använd miljövariabler eller config-filer
- Defaults ska vara säkra

---

## 8. Tester

- Skriv tester för:
  - logik
  - gränsfall
  - regressioner
- Tester ska vara deterministiska

---

## 9. Dokumentation

- Docstrings på publika funktioner
- Förklara *varför*, inte *vad*

```python
def route_mail(mail: Mail) -> Category:
    """
    Routes incoming mail to a category based on taxonomy rules.
    """
```

---

## 10. Vad vi aktivt undviker

- clever tricks
- magiska globala tillstånd
- dolda sidoeffekter
- överdriven metaprogrammering

Stabilitet slår elegans.

---

## 11. Slutprincip

Kod som:
- inte kan förstås
- inte kan testas
- inte kan förklaras

…ska inte in i systemet.
