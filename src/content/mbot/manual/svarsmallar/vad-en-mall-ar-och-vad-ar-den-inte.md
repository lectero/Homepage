---
---
# Vad en mall är (och vad är den inte)

En mall i Mailbot är **inte** ett färdigt standardsvar som skickas rakt av till mottagaren. Den är inte heller en generell ”text som brukar fungera”.

En mall är i stället en **semantisk byggsten** som:

- kombineras med information från det inkommande mailet,

- kompletteras med policy- och regeldata,

- och används som underlag för ett förslag till svar, eller i vissa fall för ett kontrollerat automatiskt utskick.

Detta innebär två viktiga saker:

- **Mallen ska inte försöka lösa hela ärendet.  **
  Den ska bidra med struktur, ton och korrekt inramning, inte ersätta mänsklig bedömning eller policylogik.

- **Mallen ska fungera även när kontexten varierar.**

> Den måste tåla olika formuleringar, olika grad av information och olika mottagare utan att bli felaktig eller vilseledande.

En bra tumregel är att en mall ska vara användbar i många närliggande situationer, men aldrig så bred att den blir vag eller riskfylld.
