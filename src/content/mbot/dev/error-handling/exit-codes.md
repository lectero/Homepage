# CLI exit codes

Exit code signalerar processutfall, inte varje enskilt email.

## Grundregler
- Batch → välj högsta allvarlighetsgrad som inträffade.
- Recoverable fel kan ge `PARTIAL_SUCCESS`.
- C-klasser (komplexitet) påverkar inte exit code.

## Exit codes

- `0` OK
- `10` PARTIAL_SUCCESS

Klient:
- `20` CLIENT_CONFIG_ERROR (`K.CONFIG.*`)
- `21` CLIENT_ENV_ERROR (`K.ENV.*`)
- `22` CLIENT_INPUT_ERROR (`K.INPUT.*`)
- `23` CLIENT_CONNECTIVITY_ERROR (`K.CONNECTIVITY.*`)

Server:
- `30` SERVER_AUTH_ERROR (`S.AUTH.*`)
- `31` SERVER_VALIDATION_ERROR (`S.VALIDATION.*`)
- `32` SERVER_RATE_LIMIT (`S.RATE_LIMIT.*`)
- `33` SERVER_CAPACITY (`S.CAPACITY.*`)
- `34` SERVER_EXTERNAL_DEPENDENCY (`S.EXTERNAL.*`)
- `35` SERVER_DATA_ERROR (`S.DATA.*`)
- `36` SERVER_LOGIC_BUG (`S.LOGIC.*`)

Övrigt:
- `99` UNHANDLED_EXCEPTION
