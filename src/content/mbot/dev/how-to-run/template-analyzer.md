# Template-analyzer

Template-analyzer är ett offline-verktyg som analyserar templates och bygger kandidatkort, tags och korta beskrivningar.

## Syfte

- minska promptstorlek vid classify
- göra templates mer sökbara och jämförbara
- identifiera överlapp och luckor

## Körning

Exempel:

```bash
python -m tools.template_analyzer --templates server/mailbot_engine/Templates --out server/mailbot_engine/Templates/_catalog.json
```

## Output

- `_index.json`: lista av templates
- `_catalog.json`: semantisk katalog för classify

## Tips

- kör analyzern efter varje template-ändring
- validera att varje template har rimliga tags och tydlig intention
