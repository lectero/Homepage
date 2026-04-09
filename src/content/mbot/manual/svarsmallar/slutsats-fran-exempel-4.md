---
---
# Slutsats från exempel 4

När Mailbot arbetar på detta sätt:

- mallskrivning blir ett gemensamt resonemang,

- systemstöd upplevs som kompetensförstärkande, inte korrigerande,

- och automation kan införas selektivt utan att tvinga fram en viss stil.

Det här är exakt den punkt där ett AI-stöd slutar kännas som ett regelverk och börjar fungera som ett professionellt verktyg.

**Appendix: Arkitektoniska säkerhetsprinciper och klientens roll**

Detta appendix riktar sig till läsare som vill förstå de tekniska och säkerhetsmässiga principer som ligger bakom HMB:s utformning. Avsnittet är inte nödvändigt för att använda systemet, men kan vara relevant för klubbchefer, IT-ansvariga eller andra som vill kunna bedöma lösningen på en mer strukturell nivå.

HMB är uppbyggt enligt en klient–server-arkitektur där ansvar och åtkomst är strikt separerade. En grundläggande princip i designen är att all åtkomst till klubbens e-postmiljö är koncentrerad till klienten, medan serverdelen saknar teknisk möjlighet att läsa, skriva eller autentisera sig mot brevlådor.

Klienten autentiserar sig mot Microsoft 365 med de behörigheter som klubben själv tilldelar. Serverdelen har aldrig tillgång till lösenord, tokens eller andra autentiseringsuppgifter och kan inte initiera någon egen kontakt med Exchange eller Outlook-miljön. Detta är inte en policyfråga utan en arkitektonisk avgränsning: servern saknar helt den information och de mekanismer som skulle krävas för att få sådan åtkomst.

När ett e-postmeddelande ska analyseras eller användas som underlag för att generera utkast är det alltid klienten som först bearbetar innehållet. I detta steg anonymiseras meddelandet så att avsändarens namn, e-postadress och andra identifierande uppgifter tas bort innan innehållet skickas vidare för extern behandling. Serverdelen och den AI-tjänst som används får därmed endast tillgång till ett rensat textinnehåll utan koppling till en identifierbar person.

Denna ordning innebär att identitet och innehåll aldrig samexisterar i serverdelen. Servern kan därför inte, ens teoretiskt, koppla ett ärende till en individ eller återskapa sådan information i efterhand. All koppling mellan analysresultat och faktisk avsändare sker uteslutande i klienten, efter att resultatet har returnerats.

Klienten är medvetet utformad som en tunn komponent. Det betyder inte att den är trivial, utan att dess ansvar är tydligt avgränsat: åtkomst till brevlådan, anonymisering av innehåll, presentation av analys och utkast för användaren samt utskick av godkända svar. All analyslogik, mallmatchning och AI-stöd ligger utanför klienten. Detta minskar komplexiteten i den del av systemet som har tillgång till känslig information och gör säkerhetsgranskning mer överskådlig.

Kopplingen mellan klient och server är lös i den meningen att klienten inte behöver lita på servern med identiteter eller behörigheter. Servern betraktas som ett beräknings- och resonemangsstöd snarare än som en del av klubbens interna IT-miljö. Ett eventuellt fel eller problem i serverdelen ger därför inte åtkomst till e-post, konton eller autentiseringsuppgifter.

Som ett ytterligare förtroendeskapande inslag kan klientkoden göras tillgänglig för granskning av klubbar som så önskar. Det gör det möjligt för tekniskt kunniga att verifiera hur anonymisering sker och att säkerställa att lösenord, e-postadresser och andra identifierande uppgifter aldrig skickas vidare. Transparens i klienten är därmed ett medvetet designval som kompletterar den tekniska avgränsningen.

Sammanfattningsvis bygger HMB:s säkerhet inte på antaganden om godartat beteende i alla delar av systemet, utan på en arkitektur där kritiska möjligheter helt enkelt inte finns. Serverdelen kan inte läsa e-post, kan inte identifiera avsändare och kan inte agera självständigt. All sådan förmåga är koncentrerad till klienten, där klubbens kontroll redan finns och där mänskligt ansvar alltid är närvarande.
