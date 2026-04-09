# 5.4 Human-in-the-loop som arkitektur, inte funktion

I många implementationer behandlas HITL som en funktionell detalj: ett godkännandeklick, en fallback-mekanism eller en manuell override. I detta white paper används begreppet i en striktare bemärkelse.

Human-in-the-loop förstås här som en **arkitektonisk princip** där:

- systemet explicit är designat för att inte fatta slutgiltiga beslut

- mänsklig bedömning är en integrerad del av flödet, inte ett undantag

- systemets output är formulerad som förslag, inte svar

Detta innebär bland annat att:

- osäkerhet ska kunna representeras och kommuniceras

- systemet ska kunna avstå från att föreslå svar när risknivån är hög

- mänsklig interaktion inte ska upplevas som ett misslyckande, utan som normalläge

Denna syn ligger nära forskning om *mixed-initiative systems*, där människa och system samverkar dynamiskt beroende på kontext och risknivå (Horvitz, 1999).

**Call-out: Ett system som alltid svarar är ett system som inte vet när det ska stanna**

Förmågan att avstå är inte en begränsning i intelligenta system, utan ett tecken på mognad.
