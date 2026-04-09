---
---
# 8.3 Alternativ A: Egen LLM-server och intern chatbot

### 8.3.1 Vad lösningen lovar

Att drifta en egen LLM, ofta i kombination med dokumentuppladdning och en chatbot, framstår vid första anblicken som attraktivt, då ansatsen har potentialen att man har:

- full kontroll över data

- möjlighet till lokal anpassning

- oberoende från externa leverantörer

- signal om teknisk framkant

Dvs, i teorin erbjuder detta maximal autonomi. I praktiken är bilden betydligt mer komplex.

### 8.3.2 Teknisk realitet: modell, infrastruktur och drift

Forskning och industrirapporter från de senaste åren visar att **egen LLM-drift är kvalitativt annorlunda än att konsumera en färdig molntjänst**.

Centrala utmaningar inkluderar:

- **Modellkvalitet**

> Mindre öppna modeller presterar genomgående betydligt sämre än state-of-the-art-modeller tränade med massiv datamängd och kontinuerlig RLHF (Brown et al., 2020; OpenAI, 2023).

- **Inference-kostnader och latens**

> Även relativt små modeller kräver betydande hårdvaruresurser för stabil drift (Patterson et al., 2021).

- **Kontinuerlig uppdatering**

> Modeller åldras snabbt. Utan kontinuerlig reträning eller finjustering degraderas prestandan i takt med förändrad verksamhet och språkbruk. Modellerna tenderar att öka i storlek vilket ofta innebär behov av mer krävande hårdvara.

Flera empiriska studier och industrirapporter pekar på att organisationer ofta **underskattar driftkomplexiteten med en faktor 5–10** jämfört med initial kalkyl (Narayanan et al., 2021).

### 8.3.3 Organisatoriska konsekvenser: falsk autonomi

Den kanske största risken är dock inte teknisk, utan organisatorisk. Interna chatbotar tenderar att:

- svara med hög språklig säkerhet

- sakna förståelse för lokala undantag

- etablera förväntningar hos användare

När svaren är lågkvalitativa men övertygande uppstår ett välkänt mönster:

1.  Chatboten ger ett ungefärligt svar

2.  Användaren agerar på svaret

3.  Kansliet måste senare korrigera eller förklara

4.  Arbetsbördan ökar, inte minskar

Detta fenomen har beskrivits i forskningen som *failure amplification* och *authority misalignment* (Bender et al., 2021; Elish, 2019).

**”Egen drift betyder eget ansvar**

Att drifta en egen LLM innebär inte bara teknisk kontroll,  
utan att organisationen själv blir ansvarig för  
modellens begränsningar, fel och konsekvenser.”

### 8.3.4 Empiriska lärdomar: lyckade och misslyckade exempel

Det finns lyckade exempel på intern LLM-användning, men de delar vissa kännetecken:

- extremt snäva domäner

- låg konsekvens vid fel

- stark intern AI-kompetens

Misslyckade exempel, vilket är vanligare i servicekontexter, kännetecknas av:

- överskattad modellförmåga

- underskattad driftkostnad

- avsaknad av human-in-the-loop

- otydligt ansvar

Särskilt i kund- och medlemskommunikation är misslyckanden väl dokumenterade (Liao et al., 2023; Mozilla Foundation, 2023).
