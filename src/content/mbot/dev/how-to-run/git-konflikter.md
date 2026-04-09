---
---
!!! note "Status"
    Den här sidan är kvar för historik och komplettering. Primär Git-dokumentation finns nu i **[Git](git.md)** och **[Git fusklapp](git-fusklapp.md)**.

# Git – konflikter utan panik

Konflikter är inte fel. De uppstår när två personer ändrat samma rader i samma fil och Git inte kan välja automatiskt.

## Grundregel
Stanna upp. Gissa inte.

## Hur en konflikt ser ut
Du kan se markörer i filen:

```text
<<<<<<< HEAD
din version
=======
deras version
>>>>>>> branch
```

## Så här löser du
1. Öppna filen
2. Välj din version, deras version eller kombinera
3. Ta bort konfliktmarkörerna
4. Spara filen
5. Commit

## När ska du be om hjälp?
Be om hjälp om konflikten gäller policy, risk, ansvar eller produkttext. Då är det ofta en sakfråga, inte en teknikfråga.
