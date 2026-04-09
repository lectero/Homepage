---
---
# 6.3 Funktionell uppdelning: analys, bedömning, förslag

En central arkitektonisk princip är **funktionell separation**. Mailboten delas upp i tre logiska steg som hålls så oberoende som möjligt:

1.  **Analys**

2.  **Bedömning**

3.  **Förslag**

Denna uppdelning är avsiktlig och syftar till att undvika att generativa komponenter får implicit beslutsmakt.

### 6.3.1 Analys: vad handlar mailet om?

I analyssteget bearbetas inkommande mail för att extrahera strukturell information, exempelvis:

- ärendetyp

- avsändarkategori

- identifierbara objekt (datum, bokningar, personer)

- språkliga signaler på osäkerhet, konflikt eller frustration

Detta steg kan delvis använda språkmodeller, men är i första hand **beskrivande**, inte normativt. Målet är inte att avgöra *vad som ska göras*, utan att skapa ett strukturerat underlag.

I DSS-termer motsvarar detta *intelligence phase* (Simon, 1960).

### 6.3.2 Bedömning: hur riskfyllt är ärendet?

I bedömningssteget sker det som arkitektoniskt är mest avgörande: **riskklassificering**. Här bedöms bland annat:

- om ärendet rör policy, undantag eller tolkning

- om ett felaktigt svar kan få juridiska eller relationella konsekvenser

- om ärendet bör eskaleras direkt till mänsklig handläggning

Detta steg bör i huvudsak vara **regelbaserat och deterministiskt**, just för att säkerställa spårbarhet och förutsägbarhet. Språkmodeller kan användas som stöd, men inte som ensam beslutsinstans.

Denna design hållning är väl förankrad i forskning om *risk-aware AI* och *human-AI collaboration*, där man betonar vikten av explicita kontrollpunkter i system med potentiellt höga konsekvenser (Rahwan et al., 2019; Amodei et al., 2016).

**”Där risken är hög måste systemet vara tråkigt**

I riskfyllda delar av ett system är förutsägbarhet  
ofta viktigare än sofistikation.”

### 6.3.3 Förslag: generativt, men inte auktoritativt

Först i detta tredje steg används språkmodeller i sin mest synliga roll: att generera textförslag. Avgörande är dock att:

- texten presenteras som *förslag*

- kontext och bedömning följer med

- systemet inte maskerar osäkerhet genom språklig elegans

Här utnyttjas språkmodellernas styrka, formulering, tonanpassning, sammanhang, samtidigt som deras begränsningar hanteras genom arkitekturen snarare än genom promptar.

Detta ligger nära principer som i modern litteratur beskrivs som *bounded autonomy* och *scaffolded intelligence* (Shneiderman, 2020).

### 6.4 Human-in-the-loop i praktiken

Human-in-the-loop realiseras i arkitekturen inte genom ett enskilt godkännandeklick, utan genom att:

- systemet **inte kan avsluta ett ärende själv**

- människan alltid möter ett strukturerat beslutsunderlag

- ansvar och avsändarskap förblir mänskliga

Ett centralt designmål är att **inte skapa ett extra granskningsarbete**, utan snarare att minska den kognitiva belastningen genom att:

- reducera variation i svarsförslag

- göra risk och osäkerhet explicit

- samla relevant kontext på ett ställe

Forskning om kognitiv belastning och arbetsflödesstöd visar att detta är avgörande för att beslutsstödssystem faktiskt ska användas, snarare än kringgås (Norman, 2013; Endsley, 2017).
