---
---
# Mail-injector

Mail-injectorn används för att skicka in ett antal testmail för att provköra hela pipelinen.

## Syfte

- reproducibla testmail
- batch av mail med olika intention
- underlag för demo, regressionstest och felsökning

## Körning

Exakt kommando beror på var injectorn ligger i repo och vilken variant du använder.

Rekommenderat mönster:

1. Aktivera venv
2. Kör injectorn med mailbox och antal mail
3. Lägg en unik prefix i subject, exempel `[HMB-INJECT]`

Exempel:

```bash
python -m tools.mail_injector --mailbox peg@skovdegk.se --count 20 --prefix "[HMB-INJECT]"
```

Om du har flera injectors, dokumentera dem var för sig och håll kvar samma CLI-kontrakt.

## Tips

- Kör injector efter reset när du vill få ren testcykel.
- Använd prefix så att du kan filtrera i Outlook under felsökning.
