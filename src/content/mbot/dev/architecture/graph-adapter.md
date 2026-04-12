---
---
# MS Graph Abstraktionslager

## Översikt

MBot använder ett abstraktionslager för att kommunicera med Microsoft Graph API. Detta ger:

- **Provider-agnostik kod** — Core-logik är oberoende av Graph-specifika detaljer
- **Testbarhet** — Mock-adapter för enhetstester utan nätverkskontakt
- **Framtidssäker** — Enkelt att lägga till andra e-postproviders (Gmail, etc.)

## Arkitektur

```
shared/graph/
├── base_adapter.py    # Abstract Base Class (interface)
├── models.py          # Datamodeller (MbotMailMessage, etc.)
├── exceptions.py      # Provider-agnostika exceptions
└── mock_adapter.py    # Mock för tester

client/graph/
├── adapter.py         # MicrosoftGraphAdapter (produktion)
├── auth.py            # Token-hantering (MSAL)
└── transport.py       # HTTP-lagret med retry
```

## Interface (BaseGraphAdapter)

Abstract base class definierar kontraktet för alla adapter-implementationer:

### A. Läsa mail (operationer 1–4)

```python
# Lista inbox (med paginering)
result = adapter.list_inbox_messages(
    mailbox="peg@skovdegk.se",
    top=50,
    filter_expr="receivedDateTime ge 2024-01-01",
)
# result.messages: List[MbotMailMessage]
# result.next_link: Optional[str]

# Inkrementell synk via Delta Query
delta_result = adapter.list_inbox_messages_delta(
    mailbox="peg@skovdegk.se",
    delta_link=saved_delta_link,  # None = full sync
)
# delta_result.messages: Nya/uppdaterade
# delta_result.removed_ids: Borttagna
# delta_result.delta_link: Spara för nästa synk

# Hämta enskilt meddelande
msg = adapter.get_message("peg@skovdegk.se", message_id)
```

### B. Skriva/skicka mail (operationer 5–11)

```python
# Skapa utkast
draft = MbotDraft(subject="Re: Fråga", body="Tack för...")
draft_id = adapter.create_draft("peg@skovdegk.se", draft)

# Skapa svarsutkast (med conversation threading)
draft_id = adapter.create_reply_draft(
    "peg@skovdegk.se",
    original_message_id,
    draft,
)

# Skicka mail direkt
outgoing = MbotOutgoingMessage(
    subject="Test",
    body="Hello",
    to_recipients=["test@example.com"],
)
adapter.send_mail("sender@domain.com", outgoing)
```

### C. Organisera mail (operationer 12–16)

```python
# Läsa kategorier
categories = adapter.get_message_categories(mailbox, message_id)

# Sätta kategorier (ersätter alla)
adapter.set_message_categories(mailbox, message_id, ["Processing-MBot"])

# Flytta mail
new_id = adapter.move_message(mailbox, message_id, folder_id)

# Markera läst/oläst
adapter.set_read_status(mailbox, message_id, is_read=True)
```

### D. Kategorihantering (operationer 17–20)

```python
# Lista master categories
cats = adapter.list_master_categories(mailbox)

# Skapa kategori
cat = adapter.create_master_category(mailbox, "Processing-MBot", "preset1")

# Uppdatera färg
adapter.update_master_category(mailbox, cat.id, color="preset4")
```

## Datamodeller

### MbotMailMessage

```python
@dataclass
class MbotMailMessage:
    id: str                            # Graph message ID
    subject: str
    body: str                          # Ren text (strippad)
    body_type: str                     # "text" | "html"
    from_address: MbotEmailAddress
    to_recipients: List[MbotEmailAddress]
    received_at: datetime
    categories: List[str]              # Outlook-kategorier
    conversation_id: str
    is_read: bool
    attachments: List[MbotAttachmentInfo]
```

### MbotDeltaResult

```python
@dataclass
class MbotDeltaResult:
    messages: List[MbotMailMessage]  # Nya eller uppdaterade
    removed_ids: List[str]           # Borttagna message IDs
    next_link: Optional[str]         # Om fler sidor finns
    delta_link: Optional[str]        # Spara för nästa synk
```

## Exceptions

Provider-agnostik exception-hierarki som döljer Graph-specifika HTTP-koder:

```
MbotGraphError (base)
├── MbotAuthenticationError    # 401 - Token-problem
├── MbotPermissionError        # 403 - Åtkomst nekad
├── MbotNotFoundError          # 404 - Resurs hittades inte
├── MbotThrottledError         # 429 - Rate-limitad
├── MbotNetworkError           # Timeout, anslutningsfel
├── MbotValidationError        # 400 - Ogiltig input
└── MbotDeltaSyncExpired       # 410 - Delta-token utgången
```

### Felhantering

```python
try:
    result = adapter.list_inbox_messages_delta(mailbox, delta_link=saved_link)
except MbotDeltaSyncExpired:
    # Delta-token har expirerat - gör full sync
    result = adapter.list_inbox_messages_delta(mailbox, delta_link=None)
except MbotThrottledError as e:
    # Rate-limitad - vänta och försök igen
    time.sleep(e.retry_after)
except MbotAuthenticationError:
    # Token-problem - refresh eller re-auth
    raise
```

## Delta Query

Delta Query är kritiskt för effektiv inbox-synk. Istället för att hämta alla mail varje gång hämtas endast ändringar sedan senaste synk.

### Workflow

```python
class MailSyncer:
    def __init__(self, adapter):
        self.adapter = adapter
        self._delta_link: Optional[str] = None

    def sync(self, mailbox: str):
        try:
            result = self.adapter.list_inbox_messages_delta(
                mailbox=mailbox,
                delta_link=self._delta_link,
            )
        except MbotDeltaSyncExpired:
            # Token utgången, gör full sync
            self._delta_link = None
            result = self.adapter.list_inbox_messages_delta(mailbox=mailbox)

        # Processera ändringar
        for msg in result.messages:
            self.process_new_or_updated(msg)
        for removed_id in result.removed_ids:
            self.handle_removal(removed_id)

        # Hantera paginering
        while result.next_link:
            result = self.adapter.list_inbox_messages_delta(
                mailbox=mailbox,
                delta_link=result.next_link,
            )

        # Spara delta_link för nästa synk
        if result.delta_link:
            self._delta_link = result.delta_link
```

### Jämförelse: polling vs Delta Query

| Aspekt | Polling | Delta Query |
|--------|---------|-------------|
| Datamängd | Alla mail varje gång | Endast ändringar |
| API-anrop | Fler, större | Färre, mindre |
| Latens | Långsammare | Snabbare |
| Rate limits | Högre risk | Lägre risk |

## MicrosoftGraphAdapter

Produktionsimplementering i `client/graph/adapter.py`:

```python
from client.graph.adapter import MicrosoftGraphAdapter

# Skapa adapter
adapter = MicrosoftGraphAdapter(
    access_token=token,  # Från MSAL
)

# Använd
messages = adapter.list_inbox_messages("user@domain.com", top=20)
```

### Transport-lagret

HTTP-kommunikation hanteras av `OutlookGraphTransport` med:

- Automatisk retry vid 429 (rate limit)
- Exponential backoff vid nätverksfel
- Centraliserade timeouts från `NetworkConfig`
- HTTPS-krav för remote servers

## MockGraphAdapter

För enhetstester utan nätverkskontakt:

```python
from shared.graph.mock_adapter import MockGraphAdapter

# Skapa mock med fördefinierade data
mock = MockGraphAdapter()
mock.add_message(MbotMailMessage(
    id="msg-1",
    subject="Test",
    body="Hello",
    # ...
))

# Använd i test
result = mock.list_inbox_messages("any@user.com")
assert len(result.messages) == 1
```

## Implementationsstatus

### Implementerat (v1)

- `list_inbox_messages` — Lista inbox med paginering
- `list_inbox_messages_delta` — Inkrementell synk
- `get_message` — Hämta enskilt meddelande
- `get_message_metadata` — Metadata utan body
- `create_reply_draft` — Skapa svarsutkast
- `get_message_categories` — Läsa kategorier
- `set_message_categories` — Sätta kategorier
- `list_master_categories` — Lista master categories
- `create_master_category` — Skapa kategori

### Planerat (v2)

- `update_draft` — Uppdatera utkast
- `send_draft` — Skicka utkast
- `delete_draft` — Radera utkast
- `move_message` — Flytta mail
- `set_read_status` — Markera läst/oläst
- `set_flag` — Flagga mail

### Framtida (v3+)

- `schedule_send` — Schemalagd sändning
- `list_folders` — Lista mappar
- `get_attachment_content` — Ladda ner bilagor

## Loggning

Adaptern loggar till `LogSource.GRAPH`:

```python
from shared.logging import get_logger, LogSource
_log = get_logger(LogSource.GRAPH)

_log.debug("Delta query started", mailbox=mailbox, is_initial=True)
_log.debug("Delta query completed", messages=5, removed=0, duration_ms=234)
_log.error("set_message_categories failed", message_id="AAMk...", error="...")
```

## Se även

- [Loggning](/products/mbot/docs/dev/logging) — Loggningssystemet
- [Nätverkskonfiguration](/products/mbot/docs/dev/architecture/network-config) — Nätverkskonfiguration
- [Tillståndsmodell](/products/mbot/docs/dev/architecture/state-model) — Klientens tillståndsmodell
