# MBot — content-guide för skärmbilder och skärminspelning

Sektionen "Se MBot i bruk" på `/products/mbot/` läser från två
content-collections. Tills minst en av dem har en publicerad entry
visas en honest "kommer snart"-teaser med CTA "Boka demo".

## Skärmbilder

**Plats:** `src/content/mbot-screenshots/<slug>.md`
**Bilder:** `src/assets/mbot/screenshots/<slug>.{jpg,png}`

En markdown-fil per skärmbild. Frontmatter:

```yaml
---
image: ../../assets/mbot/screenshots/klassificering.png
altSv: "Outlook Add-in visar klassificering av inkommande mejl med kategori, underkategori och konfidens."
altEn: "Outlook Add-in showing classification of an incoming email with category, sub-category and confidence."
captionSv: "Klassificering syns direkt i Task Pane:n."
captionEn: "Classification shows directly in the Task Pane."
order: 10
---
```

`order` styr visning (lägre först). `draft: true` gömmer bilden under
granskning. Astro pipeline-optimerar bilden till AVIF/WebP automatiskt.

### Förberedelse

- Anonymisera all PII (för-/efternamn, e-postadresser, klubbnamn → fiktiva)
- Källbild ~1600 px bredd, JPEG eller PNG
- Skarp och utan onödiga UI-detaljer (stäng ovidkommande paneler)

## Skärminspelning

**Plats:** `src/content/mbot-screencast/<slug>.md`
**Videofiler:** `public/mbot/screencast/<slug>.{mp4,webm}` (lagras
i public eftersom Astro Image-pipelinen inte hanterar video)
**Poster-bild:** `src/assets/mbot/screenshots/<slug>-poster.png`

Endast en publicerad entry visas. Frontmatter:

```yaml
---
titleSv: "MBot Outlook Add-in — komplett flöde"
titleEn: "MBot Outlook Add-in — full flow"
mp4: /mbot/screencast/full-flow.mp4
webm: /mbot/screencast/full-flow.webm
poster: ../../assets/mbot/screenshots/full-flow-poster.png
width: 1920
height: 1080
durationSeconds: 45
---
```

### Förberedelse

- 30–60 sekunder, ingen voiceover (sajten beskriver flödet i text)
- 1920x1080 eller 1280x720
- Storleksmål: `mp4` < 3 MB, `webm` < 2 MB
- Komprimering: `ffmpeg -i in.mov -c:v libx264 -crf 28 -preset slow -an out.mp4`
  och `ffmpeg -i in.mov -c:v libvpx-vp9 -crf 33 -b:v 0 -an out.webm`
- Anonymisera all PII i inspelningen

## Beteende på sidan

- Sektionen är alltid synlig på `/products/mbot/`
- Utan publicerade entries: teaser med "Boka demo"-CTA
- Med publicerade entries: skärminspelningen autostartar muted vid
  intersection (utom när användaren har `prefers-reduced-motion: reduce`,
  då visas poster-bild med play-knapp)
- Skärmbilderna i ett 3-up grid med `<dialog>`-baserad lightbox
  som är tangentbordsnavigerbar (Esc, ←, →)
- Lightbox är keyboard-accessible och har focus trap via native dialog

## När du lägger till nytt innehåll

1. Skapa frontmatter-filen + lägg till media-filerna
2. `npm run build` — kontrollera att bilderna pipeline-optimeras
3. Verifiera teasern försvunnit och nya sektionen renderar
4. Manuell verifiering med `prefers-reduced-motion: reduce` aktiverat
5. Lighthouse Performance ≥ 90
