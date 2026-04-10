---
---
# Exempel 4: två system-föreslagna varianter beroende på riskprofil
### Steg 1. Användarens initiala mall (rå draft)
***“Mallens syfte***
*Svara på frågor om möjligheten att frysa ett medlemskap under en period.*
***Avsedd användning***
*Draft som granskas av medarbetare före utskick.*
***Malltext (initial draft)***
*Det går bra att frysa medlemskapet under vintern.*
*Pausen gäller från november till mars och kostar 500 kr.*
*Hör av dig om du vill att vi ordnar detta.”*
Detta är ett typiskt kompetent utkast:
- konkret,
- tydligt,
- praktiskt användbart i många fall.
Samtidigt är det:
- policykänsligt,
- tidsbundet,
- avgiftsbundet.
### Steg 2. Systemet identifierar två rimliga tolkningsriktningar
Utifrån mallens innehåll och användningsläge kan systemet generera två olika varianter, beroende på vad som prioriteras:
- Variant A: Handläggarnära, effektiv
- Variant B: Robust, policyavlastad
Båda är legitima. De löser olika problem.
### Steg 3A. System-föreslagen variant A (handläggarnära/låg friktion)
Det finns möjlighet att pausa medlemskapet under vinterperioden.
Pausen gäller normalt från november till mars och innebär en avgift.
Om du vill kan vi hjälpa dig vidare och kontrollera vad som gäller i ditt fall.
**Egenskaper**
- Ligger nära användarens original.
- Behåller konkret vägledning.
- Löser upp exakta belopp och låser dem inte i mallen.
- Enkel för handläggare att justera:
- lägga till avgift,
- bekräfta period,
- eller avslå vid behov.
**Lämplig när**
- handläggaren redan känner policyn,
- ärendet är vardagligt,
- och effektivitet prioriteras.
### Steg 3B. System-föreslagen variant B (robust/policycentrerad)
Möjligheten att pausa ett medlemskap beror på period, medlemsform och gällande villkor. 
Aktuella regler för paus och eventuella avgifter framgår av medlemsvillkoren.
Hör gärna av dig om du vill att vi tittar närmare på vad som gäller för dig.
Egenskaper
- Maximal stabilitet över tid.
- Ingen inbyggd tids- eller avgiftsuppgift.
- Låg risk för att bli inaktuell.
- Kräver mer aktiv handläggning i det enskilda ärendet.
Lämplig när
- policyn ofta ändras,
- ärendet är ovanligt,
- eller kommunikationen sker i ett känsligt sammanhang.
### Steg 4. Hur detta presenteras för användaren
Användaren får:
- originalutkastet (oförändrat),
- Variant A: *System-föreslagen variant, handläggarnära*,
- Variant B: *System-föreslagen variant, robust*.
Samt en kort, neutral notis:	“Systemet har tagit fram två alternativa formuleringar med olika prioriteringar. Välj den som bäst passar sammanhanget, eller fortsätt arbeta med din originaltext.”
Ingen rangordning.
Ingen rekommendation.
Ingen ”förbättring”.
### Steg 5. Viktig princip som demonstreras
Detta exempel visar tre centrala saker:
- Kvalitet är kontextuell
Samma ärende kan kräva olika formuleringar beroende på situation.
- Systemets roll är att bredda valrummet
Inte att styra mot ett ”rätt” svar.
- Användaren förblir ansvarig
Systemet visar konsekvenser, inte beslut.
## Slutsats från exempel 4
När Mailbot arbetar på detta sätt:
- mallskrivning blir ett gemensamt resonemang,
- systemstöd upplevs som kompetensförstärkande, inte korrigerande,
- och automation kan införas selektivt utan att tvinga fram en viss stil.
Det här är exakt den punkt där ett AI-stöd slutar kännas som ett regelverk och börjar fungera som ett professionellt verktyg.
**Appendix: Arkitektoniska säkerhetsprinciper och klientens roll**
Detta appendix riktar sig till läsare som vill förstå de tekniska och säkerhetsmässiga principer som ligger bakom MBot:s utformning. Avsnittet är inte nödvändigt för att använda systemet, men kan vara relevant för klubbchefer, IT-ansvariga eller andra som vill kunna bedöma lösningen på en mer strukturell nivå.
MBot är uppbyggt enligt en klient–server-arkitektur där ansvar och åtkomst är strikt separerade. En grundläggande princip i designen är att all åtkomst till klubbens e-postmiljö är koncentrerad till klienten, medan serverdelen saknar teknisk möjlighet att läsa, skriva eller autentisera sig mot brevlådor.
Klienten autentiserar sig mot Microsoft 365 med de behörigheter som klubben själv tilldelar. Serverdelen har aldrig tillgång till lösenord, tokens eller andra autentiseringsuppgifter och kan inte initiera någon egen kontakt med Exchange eller Outlook-miljön. Detta är inte en policyfråga utan en arkitektonisk avgränsning: servern saknar helt den information och de mekanismer som skulle krävas för att få sådan åtkomst.
När ett e-postmeddelande ska analyseras eller användas som underlag för att generera utkast är det alltid klienten som först bearbetar innehållet. I detta steg anonymiseras meddelandet så att avsändarens namn, e-postadress och andra identifierande uppgifter tas bort innan innehållet skickas vidare för extern behandling. Serverdelen och den AI-tjänst som används får därmed endast tillgång till ett rensat textinnehåll utan koppling till en identifierbar person.
Denna ordning innebär att identitet och innehåll aldrig samexisterar i serverdelen. Servern kan därför inte, ens teoretiskt, koppla ett ärende till en individ eller återskapa sådan information i efterhand. All koppling mellan analysresultat och faktisk avsändare sker uteslutande i klienten, efter att resultatet har returnerats.
Klienten är medvetet utformad som en tunn komponent. Det betyder inte att den är trivial, utan att dess ansvar är tydligt avgränsat: åtkomst till brevlådan, anonymisering av innehåll, presentation av analys och utkast för användaren samt utskick av godkända svar. All analyslogik, mallmatchning och AI-stöd ligger utanför klienten. Detta minskar komplexiteten i den del av systemet som har tillgång till känslig information och gör säkerhetsgranskning mer överskådlig.
Kopplingen mellan klient och server är lös i den meningen att klienten inte behöver lita på servern med identiteter eller behörigheter. Servern betraktas som ett beräknings- och resonemangsstöd snarare än som en del av klubbens interna IT-miljö. Ett eventuellt fel eller problem i serverdelen ger därför inte åtkomst till e-post, konton eller autentiseringsuppgifter.
Som ett ytterligare förtroendeskapande inslag kan klientkoden göras tillgänglig för granskning av klubbar som så önskar. Det gör det möjligt för tekniskt kunniga att verifiera hur anonymisering sker och att säkerställa att lösenord, e-postadresser och andra identifierande uppgifter aldrig skickas vidare. Transparens i klienten är därmed ett medvetet designval som kompletterar den tekniska avgränsningen.
Sammanfattningsvis bygger MBot:s säkerhet inte på antaganden om godartat beteende i alla delar av systemet, utan på en arkitektur där kritiska möjligheter helt enkelt inte finns. Serverdelen kan inte läsa e-post, kan inte identifiera avsändare och kan inte agera självständigt. All sådan förmåga är koncentrerad till klienten, där klubbens kontroll redan finns och där mänskligt ansvar alltid är närvarande.
## ÄrendeKategorier för klassificering av inkommande e-post i MBot
MBot klassificerar inkommande e-post i ett antal huvudkategorier utifrån ärendetyp med tillhörande underkategorier. Klassificeringen används för att styra analys, mallmatchning och beslut om hur ärendet ska hanteras vidare.
Tabell XXX: Beskrivning av huvudkategorier.
Kategorierna som presenteras i tabell XXX och YYY är bas-kategorier. Dessa kan anpassas och utökas. Om inget annat anges så är det dessa kategorier som används som default.
Tabell YYY: Huvud- och underkategorier.
### Arbete i delade inkorgar
I många klubbar bevakas en gemensam inkorg, till exempel info@...-gk.se, av flera personer med olika roller och ansvarsområden. Detta skapar särskilda krav på tydlighet, samordning och ansvar, som MBot är utformat för att stödja.
I en delad inkorg är den största utmaningen sällan brist på information, utan osäkerhet kring vem som bör hantera vad. Utan stöd riskerar samma ärende att tolkas av flera personer, eller att bli liggande eftersom ingen upplever sig ha ett tydligt ansvar. MBot adresserar detta genom att tidigt i processen strukturera ärendet utifrån både innehåll och ansvarsfunktion.
När ett e-postmeddelande kommer in till den gemensamma inkorgen analyserar MBot innehållet och föreslår vilken typ av ärende det rör sig om. Parallellt kan systemet föreslå vilken funktion i organisationen som normalt hanterar denna typ av fråga. För användaren innebär detta att e-posten inte bara presenteras som “ännu ett mejl”, utan som ett ärende med en rimlig nästa åtgärd.
I praktiken kan detta användas på flera sätt. En person i receptionen kan snabbt se att ett ärende rör ekonomi och därför bör lämnas vidare, utan att själv behöva sätta sig in i detaljerna. En person på kansliet kan se att ett tävlingsärende sannolikt hör hemma hos tävlingskommittén och välja att vidarebefordra det direkt. På så sätt minskar behovet av intern koordinering via separata mejl eller muntliga avstämningar.
Det är viktigt att betona att MBot inte inför ett nytt beslutsflöde för vem som “äger” ett ärende. Systemet föreslår, men det är alltid användaren som avgör om ett ärende ska hanteras direkt, skickas vidare eller tas över manuellt. Detta gör att systemet kan användas även i organisationer där ansvarsfördelningen är informell eller situationsberoende.
I delade inkorgar bidrar MBot också till att skapa spårbarhet. När ett ärende vidarebefordras eller markeras för manuell hantering sker detta med ett tydligt sammanhang, snarare än som ett frikopplat mejl. Det gör det lättare att i efterhand förstå vad som hänt och varför.
Sammanfattningsvis är MBot i delade inkorgar ett stöd för att göra ansvar synligt, utan att centralisera eller automatisera bort mänsklig bedömning. Systemet hjälper användarna att snabbt orientera sig, fatta rimliga beslut om nästa steg och undvika onödigt dubbelarbete, samtidigt som den gemensamma inkorgen fortsätter att fungera som en gemensam kontaktpunkt för klubben.
### Möjliga åtgärder på e-post
Efter klassificering och analys kan MBot föreslå en åtgärd för ett e-postmeddelande. Åtgärden anger hur ärendet bör hanteras vidare, inte vad svaret ska innehålla. Vilka åtgärder som används är konfigurerbart per kategori.
Följande åtgärder används i nuläget:
- **Skapa utkast till svar****: **Ett eller flera utkast genereras baserat på mallar och analys.
- **Vidarebefordra till ansvarig funktion eller person****: **E-posten bör hanteras av en annan funktion, till exempel ekonomi, tävlingsledning eller tränarverksamhet.
- **Markera för manuell hantering****: **Ärendet bedöms olämpligt för systemstöd och kräver full manuell handläggning.
- **Ingen åtgärd****: **Om en kategori är markerad som *Ingen åtgärd* vidtas ingen åtgärd alls. Detta innebär att: (i) inget utkast skapas, (ii) ingen vidarebefordran föreslås, och (iii) ärendet lämnas orört av MBot efter klassificering.
Denna inställning är avsedd för kategorier som klubben medvetet valt att inte hantera via systemet, till exempel informationskopior, interna meddelanden eller ärenden som alltid hanteras utanför MBot:s arbetsflöde.
Tabellen ZZZ visar exempel på hur kategorier kan kopplas till olika åtgärder.Tabellen illustrerar tre saker:
- samma ärendekategori kan leda till olika åtgärder beroende på organisatoriskt ansvar (tabellen visar i detta fall på åtgärder på huvudkategorier för ärenden men det går att bestämma åtgärder per underkategori).
- rekommenderad åtgärd är alltid ett förslag, inte en automatisk handling,
- konfigurationen kan göras selektivt, per kategori.
Tabell ZZZ: Ärendekategori vs ansvarsfunktion vs rekommenderad åtgärd.
### Tillstånd, rekommenderade åtgärder och faktisk hantering
I MBot är det viktigt att skilja mellan **tillstånd**, **rekommenderade åtgärder** och **vad som faktiskt sker i hanteringen av ett ärende**. Dessa tre begrepp hänger ihop, men är inte samma sak.
Ett **tillstånd** beskriver var ett e-postärende befinner sig i hanteringsprocessen. En **rekommenderad åtgärd** är systemets förslag på vad som bör göras härnäst. Den faktiska hanteringen kan däremot innebära flera steg och flera åtgärder, även om endast en åtgärd initialt rekommenderas.
När ett e-postmeddelande kommer in analyseras det och sätts i ett initialt tillstånd. Utifrån analysen kan systemet försöka utföra vissa åtgärder, till exempel att skapa ett utkast till svar. Om detta lyckas förs ärendet vidare till ett tillstånd där utkast finns tillgängligt för granskning. Om försöket misslyckas, till exempel på grund av att relevant mall saknas, att innehållet är för oklart eller att riskkriterier triggas, övergår ärendet i stället till ett tillstånd som kräver manuell hantering.
Det innebär att även om **”Skapa utkast”** är den rekommenderade åtgärden för en viss kategori, är detta inte en garanti för att ett utkast faktiskt skapas. Rekommendationen anger vad systemet *försöker göra*, inte vilket resultat som alltid uppnås. Misslyckade eller avbrutna försök är en naturlig del av flödet och hanteras genom tydliga tillståndsövergångar.
För vissa kategorier kan det också vara rimligt att ha **flera rekommenderade åtgärder**. Ett ärende kan till exempel både lämpa sig för att ett utkast skapas och samtidigt vara avsett att hanteras av en specifik funktion i organisationen. I ett sådant fall kan systemet föreslå att ett utkast genereras, samtidigt som vidarebefordran till en ansvarig person eller funktion rekommenderas. Utkastet fungerar då som underlag för den som tar över ärendet, snarare än som ett svar från den gemensamma inkorgen.
På motsvarande sätt kan ett ärende rekommenderas för manuell hantering, men ändå föreslås bli vidarebefordrat till rätt funktion. Här är den primära signalen att ärendet inte lämpar sig för automatiserat stöd, medan vidarebefordran är ett sätt att snabbt placera ärendet där det hör hemma organisatoriskt.
Tillstånd används för att göra dessa situationer tydliga för användaren. Ett ärende kan exempelvis vara klassificerat, analyserat och markerat för manuell hantering, samtidigt som en rekommenderad åtgärd är att skicka det vidare till ekonomi eller tävlingsledning. Tillståndet beskriver alltså **läget**, medan åtgärden beskriver **nästa rimliga steg**.
Detta sätt att separera tillstånd och åtgärder gör att MBot kan hantera komplexa och realistiska arbetsflöden utan att bli svåröverskådligt. Systemet kan försöka ge stöd där det är möjligt, falla tillbaka till manuell hantering när det behövs och samtidigt hjälpa användaren att snabbt avgöra vem som bör ta över ett ärende.
**Översikt****: ****typiska**** ****tillståndsövergångar**** ****i**** MBot**
Ett e-postärende i MBot rör sig normalt genom följande övergripande steg:
**Steg 1: E-post ****i****nkommet**
E-postmeddelandet har mottagits och registrerats. Ingen analys eller åtgärd har ännu skett.
**Steg 2: E-post a****nalyserat**** och klassificerat**
Innehållet har analyserats och klassificerats. Ärendekategori, ansvarsfunktion och möjliga åtgärder har identifierats.
→ *Om systemet bedömer att ärendet är olämpligt för vidare** *
*s**ystemstöd** taggas e-posten som för ***ma****nuell hantering**** **(meddelas i outlook)
→ *Om systemet bedömer att utkast kan försöka skapas** (och det är *
*den önskade åtgärden), så taggas e-posten för att ett ***ut****kast ****ska ****skapas **(försök)
→ *Om systemet **är konfigurerat för att endast vidarebefordra e-posten givet dess ärendekategori, så taggas e-posten för ***vidarebefordran*** *
**Steg 3a: ****Utkast tillgängligt**
Ett eller flera utkast har skapats och finns tillgängliga för granskning. Användaren meddelas i outlook genom att sätta e-posten till kategorin XXX
→ *Om utkast **inte kunde skapas** eller riskkriterier triggas*
**Manuell hantering**** **
→ *Om vidarebefordran också är relevant*
**Utkast tillgängligt **(eposten taggas med XXX) **+ Rekommenderad vidarebefordran**
**Steg 3b: ****Manuell hantering**
Ärendet kräver mänsklig handläggning utan ytterligare systemförsök.
**Steg ****4a****: ****Manuell hantering**: e-posten taggas med XXX
**Steg 4****b****: ****Utkast tillgängligt**: e-posten taggas med YYY
**Steg 4****c****: ****Vidarebefordra**: e-posten skickas (automatiskt) vidare berörd ansvarsfunktion om det har specificerats för ärendekategorin (taggar som manuell hantering/draft finns tillgängligt följer då med).
**Steg ****5****: ****E****-****post**** ****g****ranskning**** av personal** som agerar på det (med eller utan draft
**Steg ****6****: ****E-post**** besvarad/avslutad**
#1: Inkommet
|
v
#2: Analyserat
|
+--> #3a: Försök skapa utkast
|        |
|        +--> Utkast tillgängligt
|        |
|        +--> Misslyckat / ej lämpligt
|                 |
|                 v
|           Manuell hantering
|
+--> #3b: Manuell hantering
|
v
===== #5: Användarintervention (Human-in-the-loop) =====
|
v
#6: E-post besvarad/avslutad
Sammanfattningsvis är rekommenderade åtgärder i MBot vägledande, inte deterministiska. Ett ärende kan genomgå flera interna steg och tillstånd även när endast en åtgärd initialt föreslås. Det är genom denna flexibilitet som systemet kan fungera i praktiken, utan att låsa användaren till ett förenklat eller idealiserat arbetsflöde.
