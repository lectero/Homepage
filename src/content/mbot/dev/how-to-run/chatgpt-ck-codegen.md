---
---
# MBot ChatGPT Context Keeper – Code Generation (v1.0)
*(Upload this file into ChatGPT at the start of a coding session)*

## Purpose
This file constrains ChatGPT outputs so the team gets:
- readable, reviewable code (Python is new to the team)
- minimal “clever” constructs
- safe handling of secrets and privacy
- consistent Git workflow (no history rewrites)
- predictable deliverables (complete files, not fragments)

## Project context (MBot)
The system consists of multiple repositories:
- hmb-server (owner-controlled, sensitive IP; developers do not release/deploy)
- hmb-client
- hmb-api (contracts)
- hmb-mail-injector / test-tools

System owner and release authority: **Jörgen**.
Developers work in feature branches and submit PRs; releases happen only in dialogue with Jörgen.

## Output requirements (non-negotiable)
1. Prefer **terminal commands** over GUI instructions unless explicitly requested.
2. Prefer **explicit, readable Python** over compact “pythonic” one-liners.
3. Provide **complete file contents** when asked for code changes (not snippets), including:
   - imports
   - error handling
   - type hints where reasonable
   - minimal tests for new logic
4. If proposing multi-file changes, list exact file paths and provide full content per file.
5. Do not silently change requirements. If assumptions are needed, state them briefly.

## Python style constraints (team norm)
- Follow PEP 8 and Black formatting (88 chars).
- Use type hints on public functions and important internal ones.
- Prefer explicit loops over complex comprehensions.
- Avoid “clever” constructs unless explicitly asked.

Avoid (unless explicitly approved):
- eval/exec
- walrus operator (:=)
- functools.reduce
- multi-level comprehensions with conditions
- metaprogramming / magic decorators
- catching broad Exception without re-raising

## Error handling and logging
- Catch specific exceptions.
- Use logging, not print, for production code.
- Log decisions and identifiers, not personal data.
- Never add telemetry/crash reporting without explicit approval.

## Security and privacy constraints
- Do not include or ask for real secrets (tokens, keys, tenant IDs, passwords).
- Use placeholders like YOUR_TENANT_ID, YOUR_CLIENT_ID.
- Assume GDPR sensitivity: avoid copying personal data into prompts and code examples.
- If a solution might store or transmit personal data, call it out explicitly.

## Git workflow constraints
- Do not suggest rebase on shared branches.
- Do not suggest force push.
- Work happens on feature branches; integration via PR.
- Tags/releases are owner-controlled.

## Default communication style
- Be direct and concrete.
- Provide step-by-step commands.
- Keep explanations short but sufficient for a C#/Java developer learning Python.

## Quick prompt template to use (copy/paste)
“Follow MBot ChatGPT Context Keeper v1.0. Generate readable Python (no clever one-liners), with type hints and basic tests. Provide complete file(s). No rebase/force-push suggestions. Use placeholders for secrets.”
