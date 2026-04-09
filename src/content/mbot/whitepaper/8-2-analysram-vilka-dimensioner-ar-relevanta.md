# 8.2 Analysram: vilka dimensioner är relevanta?

För att undvika anekdotisk jämförelse används följande analysdimensioner genomgående:

1.  **Funktionell räckvidd**

Vad påstår sig lösningen kunna göra?

2.  **Beslutsmakt**

Vem eller vad fattar det slutliga beslutet?

3.  **Riskexponering**

Vad händer när systemet har fel?

4.  **Organisatorisk belastning över tid**

Minskar eller omfördelar lösningen arbete?

5.  **Krav på kompetens och drift**

Vad krävs för att lösningen ska fungera i praktiken?

6.  **Lärande och styrbarhet**

Kan organisationen förstå, justera och förbättra systemet?

Dessa dimensioner återkommer i analysen av samtliga alternativ.

| **Dimension** | **Egen LLM + chatbot** | **Extern chatbot-tjänst** | **Manuell ChatGPT/Claude** | **Integrerad mail-AI** | **Human-in-the-loop mailbot** |
|----|----|----|----|----|----|
| Primärt syfte | Direkt svar | Direkt svar | Individuell hjälp | Textförbättring | Beslutsstöd |
| Exponering mot användare | Direkt | Direkt | Indirekt | Direkt | **Ingen** |
| Slutligt beslutsfattande | AI | AI | Människa | AI | **Människa** |
| Risk vid fel | Mycket hög | Hög | Medel | Medel | **Låg** |
| Failure amplification | Hög | Hög | Medel | Medel | **Låg (dämpad)** |
| Krav på intern AI-kompetens | Mycket hög | Låg | Medel | Låg | **Medel (styrbar)** |
| Drift- och underhållskostnad | Hög | Medel | Låg | Låg | **Medel** |
| Konsistens över tid | Medel | Medel | Låg | Låg | **Hög** |
| Spårbarhet och revision | Låg | Låg | Mycket låg | Mycket låg | **Hög** |
| Organisatoriskt lärande | Låg | Låg | Ingen | Ingen | **Hög** |
| Governance-vänlighet | Låg | Låg | Mycket låg | Låg | **Hög** |
| Lämplighet som förstasteg | Låg | Låg | Låg | Låg | **Hög** |
