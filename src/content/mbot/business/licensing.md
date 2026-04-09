---
---
# Licens och IP

Om produkten ska kunna användas av flera organisationer måste du kunna kontrollera spridning, och samtidigt hålla installationen enkel.

## Praktiska mål

- klienten ska inte kunna kopieras till andra organisationer utan avtal
- konfiguration ska vara lätt att uppdatera, men svår att manipulera i smyg
- licensen ska kunna återkallas utan att du behöver handpåläggning på plats

## Tekniska mekanismer

- licensnyckel som binds till organisation id och server id
- periodiska serverkontroller, med rimlig tolerans vid nätavbrott
- signering av policy och taxonomi
- loggning av klientversion och konfig hash

## Juridiska mekanismer

- tydliga villkor om användning och begränsningar
- tydlig ansvarsfriskrivning för felaktiga utskick, särskilt om organisationen aktiverar autosändning

Teknik utan avtal är svagt. Avtal utan teknik är också svagt.
