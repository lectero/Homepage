# 3.3 Asynkronicitet, tolkning och risk

Email är asynkront. Detta är både dess styrka och dess risk.

Asynkronicitet innebär att avsändare och mottagare inte delar kontext i realtid. Tonfall, osäkerhet, tvekan och villkor måste uttryckas explicit i text för att inte gå förlorade. Forskning inom Computer-Supported Cooperative Work (CSCW) och Human–Computer Interaction (HCI) har visat att detta ökar risken för feltolkning, särskilt i situationer där:

- mottagaren saknar full kontext

- frågan rör undantag snarare än regel

- svaret innehåller implicita antaganden

I serviceorganisationer är dessa situationer inte undantag utan snarare norm.

När automation introduceras i ett sådant medium förstärks denna risk. Ett automatiserat eller AI-genererat svar saknar inte bara mänsklig intuition, utan också den sociala förmågan att markera osäkerhet på ett sätt som mottagaren intuitivt uppfattar som just osäkerhet. Språkmodeller tenderar dessutom, av design, att producera välformulerade och självsäkra svar, även när den underliggande tolkningen är osäker.

Detta skapar en asymmetri: **ju mer välformulerat ett felaktigt svar är, desto större är risken att det tas för sant**. Detta fenomen har i forskningen beskrivits som *algorithmic authority* och *automation bias* (Lee & See, 2004; Parasuraman & Riley, 1997).
