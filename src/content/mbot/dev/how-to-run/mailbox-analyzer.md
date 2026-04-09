---
---
# Mailbox-analyzer

Mailbox-analyzer används för att analysera historisk inbox och ge volymer per typ, fokus på låg tokenkostnad.

## Syfte

- förstå var volymerna ligger
- guida vilka templates som är värda att utveckla
- minimera LLM-användning

## Körning

Exakt kommando beror på var programmet ligger, men mönstret är:

```bash
python -m tools.mailbox_analyzer --mailbox peg@skovdegk.se --out reports/mailbox_summary.json
```

## Rekommendationer

- börja regelbaserat
- använd LLM sparsamt, endast för “unknown bucket” och gärna genom sampling eller klustring
- exportera resultaten som JSON så att de kan användas i BI senare
