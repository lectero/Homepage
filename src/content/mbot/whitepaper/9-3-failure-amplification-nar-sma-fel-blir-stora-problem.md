# 9.3 Failure amplification: när små fel blir stora problem

Begreppet *failure amplification* används för att beskriva situationer där ett systems fel inte bara leder till ett lokalt misslyckande, utan förstärks genom efterföljande processer. I servicekommunikation tar detta ofta följande form:

1.  Ett system ger ett felaktigt eller ofullständigt svar

2.  Svaret uppfattas som auktoritativt

3.  Användaren agerar på svaret

4.  Organisationen tvingas korrigera, förklara eller göra undantag

5.  Merarbete uppstår som är större än om inget svar givits

Forskning om automatiserade beslutsstöd har visat att denna typ av amplifikation är vanlig när systemets begränsningar inte är tydliga för användaren (Bainbridge, 1983; Parasuraman et al., 2000).

I praktiken innebär detta att **ett AI-system kan vara korrekt i majoriteten av fallen och ändå vara organisatoriskt skadligt**, om de fall där det har fel är tillräckligt konsekvenskänsliga.

**”Nästan rätt är ofta farligare än fel**

Ett svar som är tydligt fel är lätt att ifrågasätta.

Ett svar som är nästan rätt etablerar förväntningar

som är svåra att backa från."
