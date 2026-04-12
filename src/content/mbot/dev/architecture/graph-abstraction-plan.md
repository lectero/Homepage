---
---
# Plan: Graph API Abstraktionslager

> **Historiskt dokument.** Beskriver designarbetet som ledde fram till den nuvarande [Graph-adaptern](/products/mbot/docs/dev/architecture/graph-adapter). Bevaras som beslutsunderlag.

## Operationer i klartext

### A. Läsa mail

1. **Lista mail i inkorgen** — Hämta en lista med mail, sorterade efter datum, med möjlighet att filtrera
2. **Bläddra genom alla mail** — Automatisk paginering när inkorgen har hundratals mail
3. **Hämta ett specifikt mail** — Läsa fullständig text, ämne, avsändare, bilagors metadata
4. **Hämta mail-metadata** — Snabb hämtning av bara rubrik, datum, kategorier (utan body)

### B. Skriva/skicka mail

5. **Skapa utkast** — Skapa ett svarsutkast som sparas i Drafts-mappen
6. **Skapa utkast som svar på mail** — Skapa utkast länkat till ursprungligt mail (conversation threading)
7. **Uppdatera utkast** — Ändra ämne eller brödtext på ett befintligt utkast
8. **Skicka mail direkt** — Skicka ett nytt mail utan att spara som utkast
9. **Skicka utkast** — Skicka ett tidigare sparat utkast
10. **Schemalagd sändning** — Skicka mail vid en specifik framtida tidpunkt
11. **Ta bort utkast** — Radera ett utkast som inte längre behövs

### C. Organisera mail

12. **Läsa kategorier på mail** — Se vilka kategorier (t.ex. "Processing-MBot") ett mail har
13. **Sätta kategorier på mail** — Lägga till/ta bort statusmarkeringar
14. **Flytta mail till mapp** — Flytta mail mellan mappar
15. **Markera som läst/oläst** — Ändra lässtatus
16. **Flagga mail** — Sätta follow-up-flaggor

### D. Kategorihantering (mailbox setup)

17. **Lista master-kategorier** — Se alla tillgängliga kategorier för en mailbox
18. **Skapa master-kategori** — Skapa ny kategori med namn och färg
19. **Uppdatera kategori-färg** — Ändra färg på befintlig kategori
20. **Ta bort master-kategori** — Ta bort en kategori helt

### E. Mappar

21. **Lista mail-mappar** — Se alla mappar (Inbox, Sent, Drafts, egna mappar)
22. **Skapa mapp** — Skapa ny mapp för organisering
23. **Hämta mapp-info** — Se antal olästa, totalt antal mail

### F. Bilagor

24. **Lista bilagor** — Se vilka bilagor ett mail har (namn, storlek, typ)
25. **Ladda ner bilaga** — Hämta en specifik bilaga
26. **Lägga till bilaga på utkast** — Bifoga fil till ett utkast

### G. Notifieringar (framtida)

27. **Prenumerera på ändringar** — Få notifiering när nytt mail kommer (webhooks)

---

## Prioritering

### Nu (v1)
- 1–4 (läsa mail)
- 5–6 (skapa utkast)
- 12–13 (kategorier på mail)
- 17–19 (master-kategorier)
- 8 (skicka mail — för testverktyg)

### Snart (v2)
- 7, 9, 11 (utkast-hantering)
- 10 (schemalagd sändning)
- 14–16 (organisera mail)
- 24–26 (bilagor)

### Senare (v3+)
- 21–23 (mappar)
- 27 (webhooks)

---

## Analys av befintlig implementation

### Vad som faktiskt används från Microsoft Graph

| Operation | Fil |
|-----------|-----|
| `list_inbox_messages()` — paginerad hämtning med OData-filter | `client/outlook_adapter.py` |
| `get_message()` — fullständigt meddelande | `client/outlook_adapter.py` |
| `patch_message_categories()` — uppdatera status-kategorier | `client/outlook_adapter.py` |
| `create_draft()` — skapa utkast-svar | `client/outlook_adapter.py` |
| `GET /outlook/masterCategories` — lista kategorier | `util/tools/msgraph_master_categories/` |
| `POST /outlook/masterCategories` — skapa kategori | `util/tools/msgraph_master_categories/` |
| `PATCH /outlook/masterCategories/{id}` — uppdatera färg | `util/tools/msgraph_master_categories/` |
| `POST /users/{id}/sendMail` — skicka testmail | `tools/mail_injector/` |

### Operationer som saknades i tidig spec men krävs

| Operation | Varför kritisk |
|-----------|----------------|
| PATCH categories | Kärnan i UX — visar status i Outlook |
| masterCategories CRUD | Krävs vid installation/setup |
| sendMail | Testverktyg, framtida notifieringar |
| Paginering (nextLink) | Inkorgen kan ha hundratals mail |
| OData `$filter` | Används vid scanning för att filtrera relevanta mail |

---

## Reviderad plan

### Fas 1: Datamodeller och exceptions (`shared/`)

```
shared/
├── graph/
│   ├── __init__.py
│   ├── models.py       # MbotMailMessage, MbotDraft, MbotCategory
│   ├── exceptions.py   # MbotGraphError, MbotAuthError, etc.
│   └── types.py        # TypedDict för Graph-responses
```

### Fas 2: Adapter interface (`shared/graph/`)

Abstract base class som definierar kontraktet:

```python
class BaseGraphAdapter(ABC):

    # === MAIL OPERATIONS ===
    @abstractmethod
    def list_inbox_messages(...) -> MailListResult: ...

    @abstractmethod
    def get_message(mailbox: str, message_id: str) -> MbotMailMessage: ...

    @abstractmethod
    def patch_categories(mailbox: str, message_id: str, categories: List[str]) -> None: ...

    @abstractmethod
    def create_draft(mailbox: str, draft: MbotDraft) -> str: ...

    @abstractmethod
    def send_mail(sender_id: str, message: MbotOutgoingMessage) -> None: ...

    # === CATEGORY MANAGEMENT ===
    @abstractmethod
    def list_master_categories(user_id: str) -> List[MbotCategory]: ...

    @abstractmethod
    def create_master_category(user_id: str, name: str, color: str) -> MbotCategory: ...

    @abstractmethod
    def update_master_category(user_id: str, cat_id: str, color: str) -> None: ...
```

### Fas 3: Microsoft Graph-implementation (`client/graph/`)

```
client/
├── graph/
│   ├── __init__.py
│   ├── adapter.py      # MicrosoftGraphAdapter(BaseGraphAdapter)
│   ├── auth.py         # Flytta från graph_auth.py
│   └── transport.py    # HTTP-lagret (requests, retry, backoff)
```

**Princip:** Befintlig `OutlookGraphTransport` fungerar bra — behåll transport-lagret intakt, wrappar det i en adapter.

### Fas 4: Mock adapter för testning

```
shared/graph/
└── mock_adapter.py     # MockGraphAdapter för tester
```

### Fas 5: Migration

Uppdatera befintliga filer att använda adaptern:
- `client/runtime.py`
- `client/outlook_categories.py`
- `util/tools/msgraph_master_categories/`
- `tools/mail_injector/`

---

## Detaljerad filstruktur (mål)

```
shared/
├── graph/
│   ├── __init__.py
│   ├── models.py
│   ├── exceptions.py
│   ├── types.py
│   ├── base_adapter.py
│   └── mock_adapter.py

client/
├── graph/
│   ├── __init__.py
│   ├── adapter.py
│   ├── auth.py
│   └── transport.py
├── outlook_adapter.py      # DEPRECATED — proxy till graph/
├── graph_auth.py           # DEPRECATED — proxy till graph/
├── outlook_categories.py   # Uppdateras
└── runtime.py              # Uppdateras
```

---

## Exceptions

```python
class MbotGraphError(Exception):
    pass

class MbotAuthenticationError(MbotGraphError):
    pass

class MbotNotFoundError(MbotGraphError):
    pass

class MbotThrottledError(MbotGraphError):
    retry_after: int  # sekunder

class MbotPermissionError(MbotGraphError):
    pass

class MbotNetworkError(MbotGraphError):
    pass
```

---

## Bakåtkompatibilitet

1. **Deprecation proxies** — Befintliga imports fungerar:
   ```python
   # client/outlook_adapter.py
   from client.graph.transport import OutlookGraphTransport, GraphError
   __all__ = ["OutlookGraphTransport", "GraphError", "GraphRequest"]
   ```

2. **Feature flag** — Stegvis aktivering:
   ```python
   # client/config.py
   use_graph_adapter: bool = False
   ```

---

## Implementationsordning

| Steg | Beskrivning | Risk | Rollback |
|------|-------------|------|----------|
| 1 | Skapa `shared/graph/` med modeller/exceptions | Låg | Ta bort katalog |
| 2 | Skapa `BaseGraphAdapter` interface | Låg | Ta bort fil |
| 3 | Flytta `transport.py` till `client/graph/` | Medium | Git revert |
| 4 | Skapa `MicrosoftGraphAdapter` | Medium | Feature flag |
| 5 | Lägg till kategori-operationer | Medium | Feature flag |
| 6 | Uppdatera `runtime.py` (bakom flag) | Medium | Feature flag |
| 7 | Uppdatera verktyg | Låg | Git revert |
| 8 | Aktivera som default | Hög | Feature flag → off |

---

## Öppna frågor (vid tidpunkten för designen)

1. **Adapter i `shared/` eller `client/`?** — Interface i `shared/`, implementation i `client/`.
2. **Delegated vs application auth?** — Nuvarande: bara app (daemon). Add-in kan behöva delegated. Förslag: `TokenProvider` abstract class.
3. **Caching i första iteration?** — Nej, lägg till senare vid behov.
4. **Schemalagd sändning** — Graph API har inte inbyggt stöd; kräver server-side scheduler.

## Se även

- [Graph-adapter](/products/mbot/docs/dev/architecture/graph-adapter) — Nuvarande implementation
- [Klient–server](/products/mbot/docs/dev/architecture/client-server) — Arkitekturöversikt
