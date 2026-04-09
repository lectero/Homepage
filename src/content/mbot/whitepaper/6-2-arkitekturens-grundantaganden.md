---
---
# 6.2 Arkitekturens grundantaganden

Mailbot-arkitekturen vilar på ett antal explicita antaganden. Dessa är inte neutrala, utan uttrycker medvetna designval.

1.  **Alla inkommande mail är inte lika.**

Vissa är triviala, andra komplexa, några riskfyllda.

2.  **Språkmodeller är bra på text, sämre på konsekvensbedömning.**

De kan formulera förslag, men bör inte avgöra när ett svar är legitimt.

3.  **Risk är kontextuell, inte absolut.**

Samma fråga kan vara låg risk i ett sammanhang och hög risk i ett annat.

4.  **Systemet ska vara deterministiskt där det måste, probabilistiskt där det kan.**

Detta är en klassisk princip i säkerhetskritiska sociotekniska system.

Dessa antaganden ligger i linje med både äldre DSS-litteratur och modern forskning om *human-centered AI* (Amershi et al., 2019; Shneiderman, 2020).
