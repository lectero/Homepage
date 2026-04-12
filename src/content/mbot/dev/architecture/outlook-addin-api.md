---
---
# Outlook Add-in API Design

## Översikt

Detta dokument beskriver API-kontraktet mellan Outlook Add-in och MBot-servern.
Add-in:et visar en Task Pane när användaren öppnar ett mail, med:
- Ärendestatus och klassificering
- Extraherade uppgifter (personer, kontaktinfo)
- Föreslagna åtgärder (Golfens IT, Fortnox)
- Arbetsflödeskörning med realtidsstatus

## Designprinciper

1. **Robusthet först** — Alla operationer är idempotenta
2. **Human-in-the-loop** — Inga automatiska åtgärder utan bekräftelse
3. **Spårbarhet** — Alla beslut loggas för audit
4. **Graceful degradation** — Add-in fungerar även om backend är långsam

---

## API-endpoints

### 1. Hämta ärende baserat på mail-ID

**Syfte:** När användaren öppnar ett mail i Outlook, hämta all MBot-data för det mailet.

```
GET /v1/addin/case?provider_message_id={outlook_message_id}&tenant_id={tenant_id}
```

**Request:**
- `provider_message_id` (query): Outlook's message ID (från Office.js `item.itemId`)
- `tenant_id` (query): Tenant-identifierare

**Response (200 OK):**
```json
{
  "found": true,
  "entity_id": "abc123...",
  "tenant_id": "skovdegk",
  "server_state": "DRAFT_READY",
  "ui_status": "IN_DEV",
  "updated_ts": "2024-01-21T10:35:00Z",

  "classification": {
    "category": "medlemsansökan",
    "confidence": 0.92,
    "alternatives": [
      {"category": "allmän_fråga", "confidence": 0.05}
    ],
    "needs_human_review": false,
    "risk_flags": []
  },

  "extraction": {
    "persons": [
      {
        "id": "p1",
        "name": "Anna Andersson",
        "role": "primary_contact",
        "email": "anna@example.com",
        "phone": "070-1234567",
        "personnummer": null,
        "member_type": "senior",
        "status": "complete",
        "issues": []
      },
      {
        "id": "p2",
        "name": "Johan Andersson",
        "role": "family_member",
        "email": null,
        "phone": null,
        "personnummer": null,
        "member_type": "senior",
        "status": "complete",
        "issues": []
      },
      {
        "id": "p3",
        "name": "Lisa Andersson",
        "role": "family_member",
        "email": null,
        "phone": null,
        "personnummer": null,
        "member_type": "junior",
        "status": "incomplete",
        "issues": ["personnummer_missing"]
      },
      {
        "id": "p4",
        "name": "Erik Andersson",
        "role": "family_member",
        "email": null,
        "phone": null,
        "personnummer": "20150615-1234",
        "member_type": "junior",
        "status": "complete",
        "issues": []
      }
    ],
    "billing": {
      "suggested_payer_id": "p1",
      "suggested_payer_reason": "Avsändare skrev 'skicka fakturan till mig'",
      "invoice_type": "combined",
      "confidence": 0.85
    },
    "evidence_spans": [
      {
        "field": "body",
        "excerpt": "...skicka fakturan till mig...",
        "start_char": 145,
        "end_char": 168
      }
    ]
  },

  "draft": {
    "available": true,
    "job_id": "job-456...",
    "draft_key": "def789...",
    "subject": "RE: Vi vill bli medlemmar",
    "body_preview": "Hej Anna!\n\nTack för ert intresse...",
    "outlook_draft_id": "AAMkADMz..."
  },

  "suggested_actions": [
    {
      "action_id": "act1",
      "action_type": "register_members",
      "target_system": "golfens_it",
      "label": "Registrera 4 medlemmar i Golfens IT",
      "requires_confirmation": true,
      "blocked": false,
      "blocked_reason": null,
      "persons_involved": ["p1", "p2", "p3", "p4"]
    },
    {
      "action_id": "act2",
      "action_type": "create_invoice",
      "target_system": "fortnox",
      "label": "Skapa samlad faktura i Fortnox",
      "requires_confirmation": true,
      "blocked": true,
      "blocked_reason": "Betalare måste väljas",
      "depends_on_choices": ["payer_selection"]
    }
  ],

  "pending_choices": [
    {
      "choice_id": "payer_selection",
      "choice_type": "single_select",
      "label": "Välj betalare (obligatoriskt)",
      "required": true,
      "options": [
        {"value": "p1", "label": "Anna Andersson", "suggested": true},
        {"value": "p2", "label": "Johan Andersson", "suggested": false},
        {"value": "other", "label": "Annan person/organisation", "suggested": false}
      ],
      "current_value": null
    },
    {
      "choice_id": "invoice_type",
      "choice_type": "single_select",
      "label": "Faktura-upplägg",
      "required": false,
      "options": [
        {"value": "combined", "label": "Samlad faktura för alla", "suggested": true},
        {"value": "separate", "label": "Separata fakturor", "suggested": false}
      ],
      "current_value": "combined"
    },
    {
      "choice_id": "handle_incomplete_p3",
      "choice_type": "single_select",
      "label": "Lisa Andersson saknar personnummer",
      "required": true,
      "options": [
        {"value": "request_completion", "label": "Begär komplettering", "suggested": true},
        {"value": "skip", "label": "Hoppa över (registrera inte)", "suggested": false},
        {"value": "manual_entry", "label": "Ange personnummer manuellt", "suggested": false}
      ],
      "current_value": null
    }
  ]
}
```

**Response (200 OK, mail inte känt):**
```json
{
  "found": false,
  "reason": "not_processed",
  "suggestion": "Detta mail har inte skannats av MBot ännu."
}
```

**Response (200 OK, mail manuellt):**
```json
{
  "found": true,
  "entity_id": "abc123...",
  "server_state": "MAIL_RULE_SCREENED_MANUAL",
  "ui_status": "MANUAL",
  "manual_reason": "Mailet innehåller bilagor som kräver manuell granskning.",
  "classification": null,
  "extraction": null,
  "draft": null,
  "suggested_actions": [],
  "pending_choices": []
}
```

---

### 2. Uppdatera val/beslut

**Syfte:** Användaren gör val i Add-in (t.ex. väljer betalare).

```
POST /v1/addin/case/{entity_id}/choices
```

**Request:**
```json
{
  "tenant_id": "skovdegk",
  "choices": [
    {"choice_id": "payer_selection", "value": "p1"},
    {"choice_id": "invoice_type", "value": "combined"},
    {"choice_id": "handle_incomplete_p3", "value": "request_completion"}
  ],
  "operator_note": "Valde Anna som betalare enligt kundens önskemål"
}
```

**Response (200 OK):**
```json
{
  "ok": true,
  "entity_id": "abc123...",
  "updated_choices": ["payer_selection", "invoice_type", "handle_incomplete_p3"],
  "actions_now_available": ["act1", "act2"],
  "draft_updated": true,
  "new_draft_preview": "Hej Anna!\n\nTack för ert intresse. Vi saknar personnummer för Lisa..."
}
```

---

### 3. Kör arbetsflöde

**Syfte:** Användaren trycker "Kör arbetsflöde" — exekvera alla godkända åtgärder.

```
POST /v1/addin/case/{entity_id}/execute
```

**Request:**
```json
{
  "tenant_id": "skovdegk",
  "actions": ["act1", "act2"],
  "choices": {
    "payer_selection": "p1",
    "invoice_type": "combined",
    "handle_incomplete_p3": "request_completion"
  },
  "send_draft_after": false,
  "operator_id": "admin@skovdegk.se"
}
```

**Response (202 Accepted):**
```json
{
  "execution_id": "exec-789...",
  "entity_id": "abc123...",
  "status": "running",
  "actions": [
    {"action_id": "act1", "status": "pending"},
    {"action_id": "act2", "status": "pending"}
  ],
  "poll_url": "/v1/addin/execution/exec-789..."
}
```

---

### 4. Polla exekveringsstatus

**Syfte:** Add-in pollar för att visa realtidsstatus.

```
GET /v1/addin/execution/{execution_id}
```

**Response (200 OK, pågår):**
```json
{
  "execution_id": "exec-789...",
  "entity_id": "abc123...",
  "status": "running",
  "started_ts": "2024-01-21T10:40:00Z",
  "actions": [
    {
      "action_id": "act1",
      "status": "completed",
      "started_ts": "2024-01-21T10:40:01Z",
      "completed_ts": "2024-01-21T10:40:03Z",
      "result": {
        "members_created": 3,
        "members_skipped": 1,
        "member_ids": ["M-2024-001", "M-2024-002", "M-2024-003"],
        "skipped_details": [{"person_id": "p3", "reason": "Väntar på komplettering"}]
      }
    },
    {
      "action_id": "act2",
      "status": "running",
      "started_ts": "2024-01-21T10:40:04Z",
      "progress": "Skapar faktura i Fortnox..."
    }
  ]
}
```

**Response (200 OK, klart):**
```json
{
  "execution_id": "exec-789...",
  "entity_id": "abc123...",
  "status": "completed",
  "started_ts": "2024-01-21T10:40:00Z",
  "completed_ts": "2024-01-21T10:40:08Z",
  "actions": [
    {
      "action_id": "act1",
      "status": "completed",
      "result": {
        "members_created": 3,
        "member_ids": ["M-2024-001", "M-2024-002", "M-2024-003"]
      }
    },
    {
      "action_id": "act2",
      "status": "completed",
      "result": {
        "invoice_id": "INV-2024-0042",
        "invoice_number": "1042",
        "amount": 12500.00,
        "currency": "SEK",
        "recipient": "Anna Andersson",
        "fortnox_url": "https://app.fortnox.se/invoices/1042"
      }
    }
  ],
  "summary": {
    "total_actions": 2,
    "completed": 2,
    "failed": 0,
    "skipped": 0
  },
  "next_steps": [
    {"type": "send_draft", "label": "Skicka välkomstmail", "available": true},
    {"type": "close_case", "label": "Stäng ärende", "available": true}
  ]
}
```

**Response (200 OK, delvis fel):**
```json
{
  "execution_id": "exec-789...",
  "status": "partial_failure",
  "actions": [
    {
      "action_id": "act1",
      "status": "completed",
      "result": {"members_created": 3}
    },
    {
      "action_id": "act2",
      "status": "failed",
      "error": {
        "code": "FORTNOX_AUTH_ERROR",
        "message": "Behörighet saknas för att skapa fakturor",
        "recoverable": true,
        "suggested_action": "Be klubbchef aktivera Fortnox-integration eller ge behörighet"
      }
    }
  ],
  "retry_available": true,
  "retry_actions": ["act2"]
}
```

---

### 5. Retry misslyckad åtgärd

```
POST /v1/addin/execution/{execution_id}/retry
```

**Request:**
```json
{
  "tenant_id": "skovdegk",
  "actions": ["act2"]
}
```

**Response (202 Accepted):**
```json
{
  "execution_id": "exec-789...",
  "status": "running",
  "retrying_actions": ["act2"]
}
```

---

### 6. Manuell override — logga avvikelse

**Syfte:** Om användaren överstyr ett förslag (t.ex. väljer annan betalare än föreslagen).

```
POST /v1/addin/case/{entity_id}/override
```

**Request:**
```json
{
  "tenant_id": "skovdegk",
  "override_type": "billing_payer",
  "original_suggestion": "p1",
  "user_choice": "p2",
  "reason": "Kunden ringde och bad om att Johan ska stå på fakturan",
  "operator_id": "admin@skovdegk.se"
}
```

**Response (200 OK):**
```json
{
  "ok": true,
  "logged": true,
  "event_id": "evt-123..."
}
```

---

## Autentisering

### Alternativ 1: Tenant-baserad (enkel)

Add-in skickar `tenant_id` i varje request, server validerar mot `tenants.yaml`.
Samma modell som befintlig client.

**Fördelar:** Enkelt, matchar befintligt mönster  
**Nackdelar:** Ingen användar-autentisering

### Alternativ 2: Azure AD SSO (rekommenderat för produktion)

Add-in använder Office.js `getAccessToken()` för att få en Azure AD-token.
Server validerar token och mappar till tenant baserat på domän.

```javascript
// Add-in JavaScript
const token = await Office.auth.getAccessToken({ allowSignInPrompt: true });
fetch('/v1/addin/case?...', {
  headers: { 'Authorization': `Bearer ${token}` }
});
```

**Server-sida:**
```python
@app.get("/v1/addin/case")
async def get_case(
    provider_message_id: str,
    authorization: str = Header(None)
):
    claims = validate_azure_token(authorization)
    tenant_id = lookup_tenant_by_domain(claims["email"].split("@")[1])
    # ...
```

**Rekommendation:** Börja med Alternativ 1 för MVP, migrera till Alternativ 2 för produktion.

---

## Hosting av Add-in

### Alternativ A: Samma server (port 8081)

```
/v1/addin/...           → API endpoints
/addin/                 → Static files (HTML, JS, CSS)
/addin/manifest.xml     → Office manifest
```

**Rekommendation:** Börja med Alternativ A för enkelhetens skull.

---

## Office-manifest

```xml
<?xml version="1.0" encoding="UTF-8"?>
<OfficeApp xmlns="http://schemas.microsoft.com/office/appforoffice/1.1"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:type="MailApp">
  <Id>mbot-addin-{tenant_id}</Id>
  <Version>1.0.0</Version>
  <ProviderName>MBot</ProviderName>
  <DefaultLocale>sv-SE</DefaultLocale>
  <DisplayName DefaultValue="MBot"/>
  <Description DefaultValue="Granska och kör arbetsflöden för e-postärenden"/>

  <Hosts>
    <Host Name="Mailbox"/>
  </Hosts>

  <Requirements>
    <Sets>
      <Set Name="Mailbox" MinVersion="1.1"/>
    </Sets>
  </Requirements>

  <FormSettings>
    <Form xsi:type="ItemRead">
      <DesktopSettings>
        <SourceLocation DefaultValue="https://mbot-server.example.com/addin/taskpane.html"/>
        <RequestedHeight>450</RequestedHeight>
      </DesktopSettings>
    </Form>
  </FormSettings>

  <Permissions>ReadItem</Permissions>

  <Rule xsi:type="RuleCollection" Mode="Or">
    <Rule xsi:type="ItemIs" ItemType="Message" FormType="Read"/>
  </Rule>
</OfficeApp>
```

---

## Sekvensdiagram: Komplett flöde

```
┌─────────┐     ┌─────────────┐     ┌────────────┐     ┌──────────┐     ┌─────────┐
│ Outlook │     │ Add-in      │     │ MBot Server│     │Golfens IT│     │ Fortnox │
│ (User)  │     │ (Task Pane) │     │            │     │          │     │         │
└────┬────┘     └──────┬──────┘     └─────┬──────┘     └────┬─────┘     └────┬────┘
     │                 │                  │                 │                │
     │ Öppnar mail     │                  │                 │                │
     │────────────────>│                  │                 │                │
     │                 │ GET /addin/case  │                 │                │
     │                 │─────────────────>│                 │                │
     │                 │ {classification, │                 │                │
     │                 │  extraction,     │                 │                │
     │                 │  actions,        │                 │                │
     │                 │  choices}        │                 │                │
     │                 │<─────────────────│                 │                │
     │ Visar panel     │                  │                 │                │
     │<────────────────│                  │                 │                │
     │ Väljer betalare │                  │                 │                │
     │────────────────>│                  │                 │                │
     │                 │ POST /choices    │                 │                │
     │                 │─────────────────>│                 │                │
     │                 │ {ok, updated}    │                 │                │
     │                 │<─────────────────│                 │                │
     │ Trycker "Kör"   │                  │                 │                │
     │────────────────>│                  │                 │                │
     │                 │ POST /execute    │                 │                │
     │                 │─────────────────>│                 │                │
     │                 │ {execution_id,   │                 │                │
     │                 │  status:running} │                 │                │
     │                 │<─────────────────│                 │                │
     │ Visar progress  │                  │ Registrera      │                │
     │<────────────────│                  │ medlemmar       │                │
     │                 │                  │────────────────>│                │
     │                 │                  │ {member_ids}    │                │
     │                 │                  │<────────────────│                │
     │                 │                  │ Skapa faktura   │                │
     │                 │                  │────────────────────────────────>│
     │                 │                  │ {invoice_id}    │                │
     │                 │                  │<────────────────────────────────│
     │                 │ GET /execution   │                 │                │
     │                 │─────────────────>│                 │                │
     │                 │ {status:complete,│                 │                │
     │                 │  results}        │                 │                │
     │                 │<─────────────────│                 │                │
     │ Visar resultat  │                  │                 │                │
     │<────────────────│                  │                 │                │
```

---

## Öppna frågor

1. **Extraktion av personer** — Ska detta vara en separat LLM-pipeline eller del av klassificering?
2. **Golfens IT integration** — Finns det ett API? Dokumentation?
3. **Fortnox integration** — Ska vi använda befintlig Fortnox-modul eller bygga ny?
4. **Offline-stöd** — Ska Add-in fungera när servern är otillgänglig?
5. **Caching** — Hur länge ska Add-in cacha ärendedata?

## Se även

- [Graph-adapter](/products/mbot/docs/dev/architecture/graph-adapter) — MS Graph-abstraktionslager
- [Tillståndsmodell](/products/mbot/docs/dev/architecture/state-model) — Klient/server-tillståndsmodell
- [Klient–server](/products/mbot/docs/dev/architecture/client-server) — Arkitekturöversikt
