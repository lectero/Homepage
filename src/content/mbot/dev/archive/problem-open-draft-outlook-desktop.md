---
---
# Problem: Öppna ett specifikt utkast i Outlook Desktop (macOS) programmatiskt

> **Arkiverat problemdokument.** Dokumenterar en specifik teknisk utmaning som uppstod vid implementationen av Outlook-integrationen. Bevaras som referens.

## Sammanfattning

Vi har en Python-applikation (companion app) som kör på samma maskin som Outlook Desktop (macOS). Applikationen skapar e-postutkast via **Microsoft Graph API** (app-only, server-to-server). Vi vill att en knapp i companion-appen öppnar det skapade utkastet **i Outlook Desktop för redigering** — inte i webbläsaren.

## Miljö

- **macOS** (primär plattform, ska även fungera på Windows)
- **Microsoft Outlook for Mac** version 16.105.2 (den nya Outlook)
- **Python 3.14** med `subprocess` för att köra AppleScript/shell-kommandon
- Exchange Online (Microsoft 365) konto

## Vad vi har tillgängligt

### Från Graph API (vid draft-skapande)

```json
{
  "id": "AAMkADY1NGIxMDYwLTdmMmUtNDQzNy04ZTUwLTBlN2EyNmY2YmQ2NQBG...AAA=",
  "webLink": "https://outlook.office365.com/owa/?ItemID=AAMk...&exvsurl=1&viewmodel=ReadMessageItem"
}
```

- **`id`**: Graph API message ID (EWS-format)
- **`webLink`**: URL som öppnar meddelandet i Outlook Web — **inte** i desktop-appen

### Från Outlook Desktop (via AppleScript)

Outlook for Mac exponerar ett AppleScript-gränssnitt. Varje mail-meddelande har:
- `id` — Outlooks lokala numeriska ID (t.ex. `843053`)
- `exchange id` — EWS-format-ID, liknande Graph API:s `id`

Registrerade URL-scheman: `mailto`, `ms-outlook`, `com.microsoft.office.outlook`

## Vad vi försökte och varför det inte fungerade

### 1. AppleScript: `open draft message id {id}`
**Resultat:** `draft message` är inte en giltig klass. Klassen heter bara `message`.

### 2. AppleScript: Iterera Drafts-mappen, matcha på subject
**Resultat:** Timeout — 3 078 drafts tar >15 sekunder att iterera igenom.

### 3. AppleScript: `whose`-klausul
```applescript
set matches to messages of dFolder whose subject is "target subject"
```
**Resultat:** Returnerar 0 matchningar för Graph API-skapade drafts — troligtvis har draftet inte synkats till lokala Drafts-mappen ännu.

### 4. URL-schema: `ms-outlook://open?restid={graph_api_id}`
**Resultat:** Kommandot returnerar utan fel men Outlook reagerar inte. Inget dokumenterat stöd för `restid`-parametern.

### 5. `webLink` via `webbrowser.open()`
**Resultat:** Öppnar meddelandet i webbläsaren (Outlook Web), inte i Outlook Desktop.

## Möjliga angreppssätt

### A. AppleScript: Matcha `exchange id` mot Graph API `id`

Graph API:s `id` och Outlooks `exchange id` verkar vara i samma EWS-format:

```applescript
tell application "Microsoft Outlook"
    set targetMsg to first message of [drafts folder] whose exchange id is "{graph_api_id}"
    open targetMsg
end tell
```

**Outredd fråga:** Fungerar `whose exchange id is "..."` snabbt (indexerat)?

### B. Vänta på synk + öppna via `whose`

Polla tills draft synkas till lokal Outlook-klient, öppna sedan via AppleScript.

### C. Acceptera begränsningen

Öppna Drafts-mappen i Outlook utan att navigera till specifikt meddelande. Inte idealt men fungerar alltid.

## Tekniska begränsningar

- Appen kör som separat Python-process — inte som ett Outlook-plugin
- Drafts skapas server-side via Graph API med app-only credentials
- ~3 000 drafts i mappen — linjär iteration inte acceptabelt
- Outlook for Mac "new Outlook" — AppleScript-stödet kan skilja sig från äldre versioner

## Slutsats

Problemet är olöst i detta dokument. Outlook Add-in v2 (Task Pane-baserad) är en bättre lösning som undviker AppleScript-problematiken helt — Add-in:et körs direkt i Outlook-processen och har native tillgång till det öppna mailmeddelandet via Office.js.

## Se även

- [Outlook Add-in API](/products/mbot/docs/dev/architecture/outlook-addin-api) — Nuvarande Add-in-arkitektur
- [Graph-adapter](/products/mbot/docs/dev/architecture/graph-adapter) — Graph API-abstraktionslager
