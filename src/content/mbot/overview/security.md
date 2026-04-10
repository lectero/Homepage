---
---
# Säkerhet och kontroll

Säkerhet handlar inte bara om kryptering. Det handlar om att minimera konsekvenser när något blir fel.

## Principer

- Minsta möjliga behörighet för alla konton och tokens.
- Separera klient, server, och driftmonitorering.
- Logga beslut och orsaker, inte bara utfall.
- Ingen dold automation. Allt som kan påverka utskick måste vara synligt och granskningsbart.

## Hotbilder som tas på allvar

- Felklassificering som leder till felaktigt svar.
- Data läcker via loggar eller felaktig lagring.
- Klienten kopieras och används av andra klubbar utan avtal.
- DNS manipulation eller omdirigering vid drift, särskilt i enkla IT miljöer.

## Motåtgärder på produktnivå

- Licensnycklar som binder klienten till en klubb och ett konto, med servervalidering.
- Signerade konfigurationsprofiler, så att policy och taxonomi inte kan manipuleras tyst.
- Begränsade tokens med kort livslängd.
- Möjlighet till allowlist av domäner för utskick, när autosändning används.

## Kontrollerbarhet

All automation i MBot bot kan beskrivas som en funktion av:

- Policy, som organisationen äger.
- Data, det vill säga inkommande mail.
- Trösklar, som kan justeras.
- Deterministisk motor, som kan granskas.

Språkmodellen får inte vara ett osynligt lager som bestämmer flöde.
