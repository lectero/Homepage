---
---
# ÄrendeKategorier för klassificering av inkommande e-post i MBot

MBot klassificerar inkommande e-post i ett antal huvudkategorier utifrån ärendetyp med tillhörande underkategorier. Klassificeringen används för att styra analys, mallmatchning och beslut om hur ärendet ska hanteras vidare.

| **Huvudkategorier** | **Beskrivning av epost som berör** |
|----|----|
| Medlemskap | Nuvarande eller framtida medlemskap i klubben. |
| Bokning och spel | Bokning av starttider och spel på banan. |
| Greenfee och gäster | Från eller om gäster och greenfeespel. |
| Avgifter och betalningar | Ekonomiska frågor utanför ren greenfee. |
| Tävlingar och aktiviteter | Klubbens tävlings- och aktivitetsverksamhet. |
| Träning och golfskola | Träning, lektioner och utbildning. |
| Bana och anläggning | Banans eller anläggningens status. |
| Administration och övrigt | Övriga kategorier eller epost som kräver särskild bedömning. |

Tabell XXX: Beskrivning av huvudkategorier.

Kategorierna som presenteras i tabell XXX och YYY är bas-kategorier. Dessa kan anpassas och utökas. Om inget annat anges så är det dessa kategorier som används som default.

<table class="w-full">
<colgroup>
<col class="w-[18%]" />
<col class="w-[36%]" />
<col class="w-[45%]" />
</colgroup>
<thead>
<tr>
<th class="text-center"><strong>Huvudgrupp</strong></th>
<th><strong>Undergrupp</strong></th>
<th><strong>Beskrivning</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="6" class="text-center"><strong>Medlemskap</strong></td>
<td>Ansökan</td>
<td>Ansökan om medlemskap</td>
</tr>
<tr>
<td>Former</td>
<td>Frågor om medlemsformer</td>
</tr>
<tr>
<td>Uppsägning/ändring</td>
<td>Uppsägning eller ändring av medlemskap</td>
</tr>
<tr>
<td>Paus/Vilande</td>
<td>Paus eller vilande medlemskap</td>
</tr>
<tr>
<td>Avgifter</td>
<td>Medlemsavgifter kopplade till medlemskap</td>
</tr>
<tr>
<td>Rättigheter/Skyldigheter</td>
<td>Allmänna frågor om rättigheter/skyldigheter som medlem</td>
</tr>
<tr>
<td rowspan="5" class="text-center"><strong>Bokning &amp; spel</strong></td>
<td>Bokning</td>
<td>Bokning av starttid</td>
</tr>
<tr>
<td>Ändring</td>
<td>Ändring eller avbokning av starttid</td>
</tr>
<tr>
<td>Problem</td>
<td>Problem med bokning eller bokningssystem</td>
</tr>
<tr>
<td>Tillgänglighet</td>
<td>Frågor om tillgänglighet</td>
</tr>
<tr>
<td>Regler</td>
<td>Spelrätt och bokningsregler</td>
</tr>
<tr>
<td rowspan="4" class="text-center"><strong>Greenfee &amp; gäster</strong></td>
<td>Greenfeepris</td>
<td>Frågor om greenfee-priser</td>
</tr>
<tr>
<td>Gäster</td>
<td>Gästspel och villkor</td>
</tr>
<tr>
<td>Betalning</td>
<td>Betalningsfrågor kopplade till greenfee</td>
</tr>
<tr>
<td>Undantag/kampanjer</td>
<td>Greenfee-relaterade undantag eller kampanjer</td>
</tr>
<tr>
<td rowspan="4" class="text-center"><strong>Avgifter &amp; betalningar</strong></td>
<td>Fakturor och betalningsstatus</td>
<td> </td>
</tr>
<tr>
<td>Påminnelser och betalningsfrågor</td>
<td> </td>
</tr>
<tr>
<td>Återbetalningar</td>
<td> </td>
</tr>
<tr>
<td>Övrigt</td>
<td>Övriga avgifter (t.ex. skåp, vagn, träning)</td>
</tr>
<tr>
<td rowspan="5" class="text-center"><strong>Tävlingar &amp; aktiviteter</strong></td>
<td>Anmälningar</td>
<td>Anmälan till tävling</td>
</tr>
<tr>
<td>Tävlingsregler</td>
<td>Frågor om tävlingsregler</td>
</tr>
<tr>
<td>Start- och resultatlistor</td>
<td> </td>
</tr>
<tr>
<td>Avanmälningar/ändringar</td>
<td>Avanmälan eller sena ändringar</td>
</tr>
<tr>
<td>Övrigt</td>
<td>Övriga aktiviteter arrangerade av klubben</td>
</tr>
<tr>
<td rowspan="4" class="text-center"><strong>Träning &amp; golfskola</strong></td>
<td>Bokning av lektioner</td>
<td> </td>
</tr>
<tr>
<td>Frågor om tränare/träningsupplägg</td>
<td> </td>
</tr>
<tr>
<td>Golfskola och kurser</td>
<td> </td>
</tr>
<tr>
<td colspan="2">Avbokning/ändring av träningstillfällen</td>
</tr>
<tr>
<td rowspan="5" class="text-center"><strong>Bana &amp; anläggning</strong></td>
<td>Banförhållanden</td>
<td> </td>
</tr>
<tr>
<td>Tillfälliga avstängningar</td>
<td> </td>
</tr>
<tr>
<td>Öppettider</td>
<td> </td>
</tr>
<tr>
<td>Underhåll eller driftstörningar</td>
<td> </td>
</tr>
<tr>
<td>Allmän information om anläggningen</td>
<td> </td>
</tr>
<tr>
<td rowspan="4" class="text-center"><strong>Administration &amp; övrigt</strong></td>
<td>Allmänna frågor</td>
<td> </td>
</tr>
<tr>
<td>Ärenden som rör flera områden</td>
<td> </td>
</tr>
<tr>
<td>Oklara eller svårklassificerade ärenden</td>
<td> </td>
</tr>
<tr>
<td>Övriga</td>
<td>Meddelanden som kräver manuell hantering</td>
</tr>
</tbody>
</table>

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

- **Skapa utkast till svar:** Ett eller flera utkast genereras baserat på mallar och analys.

- **Vidarebefordra till ansvarig funktion eller person:** E-posten bör hanteras av en annan funktion, till exempel ekonomi, tävlingsledning eller tränarverksamhet.

- **Markera för manuell hantering:** Ärendet bedöms olämpligt för systemstöd och kräver full manuell handläggning.

- **Ingen åtgärd:** Om en kategori är markerad som *Ingen åtgärd* vidtas ingen åtgärd alls. Detta innebär att: (i) inget utkast skapas, (ii) ingen vidarebefordran föreslås, och (iii) ärendet lämnas orört av MBot efter klassificering.

Denna inställning är avsedd för kategorier som klubben medvetet valt att inte hantera via systemet, till exempel informationskopior, interna meddelanden eller ärenden som alltid hanteras utanför MBot:s arbetsflöde.

Tabellen ZZZ visar exempel på hur kategorier kan kopplas till olika åtgärder.Tabellen illustrerar tre saker:

- samma ärendekategori kan leda till olika åtgärder beroende på organisatoriskt ansvar (tabellen visar i detta fall på åtgärder på huvudkategorier för ärenden men det går att bestämma åtgärder per underkategori).

- rekommenderad åtgärd är alltid ett förslag, inte en automatisk handling,

- konfigurationen kan göras selektivt, per kategori.

| **Ärendekategori** | **Ansvarsfunktion** | **Rekommenderad åtgärd** |
|----|----|----|
| Medlemskap | Kansli | Skapa utkast till svar |
| Medlemsavgifter | Ekonomi | Vidarebefordra till ansvarig funktion |
| Bokning av starttid | Reception | Skapa utkast till svar |
| Ändring/avbokning av starttid | Reception | Skapa utkast till svar eller markera för manuell hantering |
| Greenfee och gäster | Reception | Skapa utkast till svar |
| Fakturor och betalningar | Ekonomi | Vidarebefordra till ansvarig funktion |
| Tävlingar (allmänt) | Tävlingskommitté | Vidarebefordra till ansvarig person |
| Specifik tävling | Tävlingsledare | Vidarebefordra till namngiven ansvarig |
| Träning och golfskola | Tränarverksamhet | Vidarebefordra till tränare + skapa utkast till svar. |
| Bana och anläggning | Banchef / drift | Vidarebefordra till ansvarig funktion |
| Oklara eller sammansatta ärenden | Kansli | Markera för manuell hantering |

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

**Översikt: typiska tillståndsövergångar i MBot**

Ett e-postärende i MBot rör sig normalt genom följande övergripande steg:

> **Steg 1: E-post inkommet**
>
> E-postmeddelandet har mottagits och registrerats. Ingen analys eller åtgärd har ännu skett.
>
> **Steg 2: E-post analyserat och klassificerat**
>
> Innehållet har analyserats och klassificerats. Ärendekategori, ansvarsfunktion och möjliga åtgärder har identifierats.
>
> → *Om systemet bedömer att ärendet är olämpligt för vidare*
>
> *systemstöd taggas e-posten som för* **manuell hantering** (meddelas i outlook)
>
> → *Om systemet bedömer att utkast kan försöka skapas (och det är*
>
> *den önskade åtgärden), så taggas e-posten för att ett* **utkast ska skapas** (försök)
>
> → *Om systemet är konfigurerat för att endast vidarebefordra e-posten givet dess ärendekategori, så taggas e-posten för* **vidarebefordran**
>
> **Steg 3a: Utkast tillgängligt**
>
> Ett eller flera utkast har skapats och finns tillgängliga för granskning. Användaren meddelas i outlook genom att sätta e-posten till kategorin XXX
>
> → *Om utkast inte kunde skapas eller riskkriterier triggas*
>
>   **Manuell hantering**
>
> → *Om vidarebefordran också är relevant*
>
>   **Utkast tillgängligt** (eposten taggas med XXX) **+ Rekommenderad vidarebefordran**
>
> **Steg 3b: Manuell hantering**
>
> Ärendet kräver mänsklig handläggning utan ytterligare systemförsök.
>
> **Steg 4a: Manuell hantering**: e-posten taggas med XXX  
> **Steg 4b: Utkast tillgängligt**: e-posten taggas med YYY
>
> **Steg 4c: Vidarebefordra**: e-posten skickas (automatiskt) vidare berörd ansvarsfunktion om det har specificerats för ärendekategorin (taggar som manuell hantering/draft finns tillgängligt följer då med).
>
> **Steg 5: E-post granskning av personal** som agerar på det (med eller utan draft
>
> **Steg 6: E-post besvarad/avslutad**
>
> \#1: Inkommet
>
> \|
>
> v
>
> \#2: Analyserat
>
> \|
>
> +--\> \#3a: Försök skapa utkast
>
> \| \|
>
> \| +--\> Utkast tillgängligt
>
> \| \|
>
> \| +--\> Misslyckat / ej lämpligt
>
> \| \|
>
> \| v
>
> \| Manuell hantering
>
> \|
>
> +--\> \#3b: Manuell hantering
>
> \|
>
> v
>
> ===== \#5: Användarintervention (Human-in-the-loop) =====
>
> \|
>
> v
>
> \#6: E-post besvarad/avslutad

Sammanfattningsvis är rekommenderade åtgärder i MBot vägledande, inte deterministiska. Ett ärende kan genomgå flera interna steg och tillstånd även när endast en åtgärd initialt föreslås. Det är genom denna flexibilitet som systemet kan fungera i praktiken, utan att låsa användaren till ett förenklat eller idealiserat arbetsflöde.
