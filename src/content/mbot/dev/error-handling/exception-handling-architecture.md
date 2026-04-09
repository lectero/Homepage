# Exception handling: arkitektur

## Mål
- homogent beteende: inga “print här och där”
- samma felkod oavsett var felet uppstår
- enkel triage: kod → domän/grupp → åtgärd

## Regler

1) Domänlogik rapporterar inte
- inga `print()`
- ingen slutloggning på ERROR-nivå

2) All signalering sker som `HMBError`
- adapters/wrappers översätter vendor-exceptions → `HMBError(code=...)`

3) Endast boundaries rapporterar
- CLI entrypoint
- server request handler
- worker loop / scheduler

## Konsekvens
- du kan bygga funktionslogik snabbt,
- men I/O-gränser och top-level har alltid kontrollerad felrapportering.
