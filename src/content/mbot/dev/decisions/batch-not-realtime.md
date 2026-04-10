---
---
# Batch-orienterad handläggning

## Beslut
MBot optimeras för planerad handläggning i batch, inte reaktiv realtidsreaktion på varje inkommande mail.

## Motiv
- Syftet är att minska kognitiv friktion och skapa arbetsro.
- Dubbelhantering och onödiga avbrott är dyrare än kort fördröjning.
- Många kanslier arbetar ändå i avstämningscykler.

## Konsekvenser
- Notifieringar ska vara restriktiva och meningsfulla.
- Statistik och förklaringar ska vara on-demand för människor, inte konstant brus.
- Systemet får hellre “köa” än trigga stress.

## Avgränsning
Akuta undantag kan hanteras via policy, men defaultbeteendet är planering, inte reaktion.
