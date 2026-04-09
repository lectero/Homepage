---
---
# Tillstånd, rekommenderade åtgärder och faktisk hantering
I HMB är det viktigt att skilja mellan **tillstånd**, **rekommenderade åtgärder** och **vad som faktiskt sker i hanteringen av ett ärende**. Dessa tre begrepp hänger ihop, men är inte samma sak.
Ett **tillstånd** beskriver var ett e-postärende befinner sig i hanteringsprocessen. En **rekommenderad åtgärd** är systemets förslag på vad som bör göras härnäst. Den faktiska hanteringen kan däremot innebära flera steg och flera åtgärder, även om endast en åtgärd initialt rekommenderas.
När ett e-postmeddelande kommer in analyseras det och sätts i ett initialt tillstånd. Utifrån analysen kan systemet försöka utföra vissa åtgärder, till exempel att skapa ett utkast till svar. Om detta lyckas förs ärendet vidare till ett tillstånd där utkast finns tillgängligt för granskning. Om försöket misslyckas, till exempel på grund av att relevant mall saknas, att innehållet är för oklart eller att riskkriterier triggas, övergår ärendet i stället till ett tillstånd som kräver manuell hantering.
Det innebär att även om **”Skapa utkast”** är den rekommenderade åtgärden för en viss kategori, är detta inte en garanti för att ett utkast faktiskt skapas. Rekommendationen anger vad systemet *försöker göra*, inte vilket resultat som alltid uppnås. Misslyckade eller avbrutna försök är en naturlig del av flödet och hanteras genom tydliga tillståndsövergångar.
För vissa kategorier kan det också vara rimligt att ha **flera rekommenderade åtgärder**. Ett ärende kan till exempel både lämpa sig för att ett utkast skapas och samtidigt vara avsett att hanteras av en specifik funktion i organisationen. I ett sådant fall kan systemet föreslå att ett utkast genereras, samtidigt som vidarebefordran till en ansvarig person eller funktion rekommenderas. Utkastet fungerar då som underlag för den som tar över ärendet, snarare än som ett svar från den gemensamma inkorgen.
På motsvarande sätt kan ett ärende rekommenderas för manuell hantering, men ändå föreslås bli vidarebefordrat till rätt funktion. Här är den primära signalen att ärendet inte lämpar sig för automatiserat stöd, medan vidarebefordran är ett sätt att snabbt placera ärendet där det hör hemma organisatoriskt.
Tillstånd används för att göra dessa situationer tydliga för användaren. Ett ärende kan exempelvis vara klassificerat, analyserat och markerat för manuell hantering, samtidigt som en rekommenderad åtgärd är att skicka det vidare till ekonomi eller tävlingsledning. Tillståndet beskriver alltså **läget**, medan åtgärden beskriver **nästa rimliga steg**.
Detta sätt att separera tillstånd och åtgärder gör att HMB kan hantera komplexa och realistiska arbetsflöden utan att bli svåröverskådligt. Systemet kan försöka ge stöd där det är möjligt, falla tillbaka till manuell hantering när det behövs och samtidigt hjälpa användaren att snabbt avgöra vem som bör ta över ett ärende.
**Översikt****: ****typiska**** ****tillståndsövergångar**** ****i**** HMB**
Ett e-postärende i HMB rör sig normalt genom följande övergripande steg:
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
Sammanfattningsvis är rekommenderade åtgärder i HMB vägledande, inte deterministiska. Ett ärende kan genomgå flera interna steg och tillstånd även när endast en åtgärd initialt föreslås. Det är genom denna flexibilitet som systemet kan fungera i praktiken, utan att låsa användaren till ett förenklat eller idealiserat arbetsflöde.
