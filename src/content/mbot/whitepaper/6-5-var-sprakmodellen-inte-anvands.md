# 6.5 Var språkmodellen inte används

En lika viktig del av arkitekturen är var språkmodellen **inte** används. Den används inte för att:

- fatta beslut om utskick

- avgöra policyfrågor

- klassificera hög-risk-ärenden utan deterministiskt stöd

Detta är ett medvetet avsteg från många kommersiella chatbot-lösningar, där språkmodellen ofta får bära både analys, bedömning och svar i ett sammanhållet steg.

Arkitekturvalet speglar insikten att **modellernas största svaghet inte är att de ibland har fel, utan att de är dåliga på att veta när de har fel**.

**”Begränsning som styrka**

Att begränsa en komponent är inte ett

misslyckande, utan ett sätt att placera den

där den gör mest nytta och minst skada.”
