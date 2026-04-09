---
---
# En klient per klubb

## Beslut
HMB-klienten körs som en klubb-lokal agent, en (1) instans per klubb, inte per användare.

## Motiv
- Delade inkorgar och få brevlådor gör per-användar-klienter till en concurrency-risk.
- Flera klienter per brevlåda driver koordinationslogik och dubbelhantering.
- Klubbens process är viktigare än individuella preferenser.

## Konsekvenser
- Klienten identifieras som klubb/installation, inte individ.
- UI i klienten ska stödja drift och administration, inte daglig handläggning.
- Single-instance-lås och robust återstart vid krasch är grundkrav.

## Avgränsning
Detta beslut utesluter inte att flera personer använder Outlook samtidigt; det utesluter att flera klientinstanser bevakar samma brevlåda.
