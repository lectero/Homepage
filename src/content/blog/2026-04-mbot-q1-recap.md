---
title: "MBot Q1 2026 — Outlook Add-in, multi-LLM och oförskämdhetsfilter"
summary: "Första kvartalet 2026 har gett MBot tre stora kapaciteter: en Outlook Task Pane som är fullt fungerande, automatisk failover mellan OpenAI och Anthropic Claude, samt ett oförskämdhetsfilter med fyra eskaleringsnivåer."
date: 2026-04-15
tags: ["MBot", "release"]
---

Det första kvartalet 2026 har varit ett av de mest produktiva i MBots historia. Tre stora funktioner har landat — alla med samma utgångspunkt: kontroll före hastighet.

## Outlook Add-in v2 — fullt fungerande

Tidigare versioner av Add-in:en var en demo som visade konceptet. Nu fungerar Task Pane direkt mot riktig backend: klassificering, drafts och korrektionsflöde. Personalen ser MBots förslag i samma fönster där de redan läser e-post, utan att lämna Outlook.

För kanslier som redan kör Microsoft 365 är det den lägsta möjliga friktionen — ingen separat klient, ingen kontextväxling.

## Multi-LLM med Claude-failover

OpenAI är fortsatt primär LLM. Men när OpenAI-tjänsten är otillgänglig — eller ger felsvar — växlar MBot automatiskt till Anthropic Claude. Failovern är tyst för användaren och kräver ingen konfiguration.

Det är inget magiskt: två oberoende LLM-leverantörer ger redundans, och MBots egna deterministiska regler för riskbedömning kör vidare oavsett vilken modell som svarar.

## Oförskämdhetsfilter

Inkommande e-post klassificeras nu i fyra nivåer:

- `ok` — vanlig korrespondens
- `crude_but_ok` — grovt språk men ärendet är hanterbart
- `over_the_line` — meddelandet bryter mot rimlig ton
- `escalated` — automatisk eskalering, hamnar aldrig i ett vanligt svarsflöde

Detta löser ett konkret problem: kanslipersonal ska inte behöva läsa hat eller hot för att avgöra att de inte ska besvaras med en mall. Filtret flaggar och separerar — människan beslutar.

## Vad kommer härnäst?

Vi jobbar parallellt med större kvalitetsdrift på Homepage (a11y, bildoptimering, multispråk) och med utbyggd statistikvy i MBot. Mer om det när det är klart.
