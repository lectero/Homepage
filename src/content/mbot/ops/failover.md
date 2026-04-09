# Failover och robusthet

Failover betyder olika saker beroende på risk och budget. Här är nivåer som brukar vara rimliga.

## Nivå 0, enkel

- en server
- daglig backup
- manuell återställning

## Nivå 1, praktisk

- två servrar
- en aktiv, en standby
- databackup som kan återställas snabbt
- DNS eller konfig som kan växla

## Nivå 2, mer avancerad

- två aktiva servrar
- replikering av state
- mer strikt idempotens

## Viktig observation

Failover utan tydlig state modell kan skapa dubbla processningar, dubbla drafts, och i värsta fall dubbla utskick. Därför måste state vara central, transaktionell, och byggd för idempotens.

Det är bättre med enklare drift som fungerar än avancerad drift som skapar tysta fel.
