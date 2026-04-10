---
---
# Using ChatGPT for Code Generation – 1-page checklist (v1.0)
*(For Dennis & Anders)*

## What ChatGPT is good at
- scaffolding: project structure, boilerplate, CLI skeletons
- translating intent to code: “do X with Y constraints”
- writing tests for well-specified behavior
- refactoring for clarity (if you tell it what “clear” means)

## What ChatGPT is NOT reliable at (assume it will fail)
- inventing correct API details you did not provide
- handling edge cases you forgot to mention
- choosing “the right architecture” without constraints
- security by default (it may propose unsafe shortcuts)
- correctness under ambiguity

## Before you ask for code (30 seconds)
Write 5 bullets:
1) What file(s) change?
2) Inputs and outputs (examples)
3) Error cases and how to handle them
4) Logging expectations (what to log, what not to log)
5) Tests you want (at least 2–3)

If you can’t write these, ChatGPT can’t guess them correctly.

## Prompt pattern that works
Use this structure:

1) Context:
- repo name
- relevant folders/files
- what the module does

2) Constraints:
- readable Python (no clever one-liners)
- type hints
- no secrets
- minimal dependencies

3) Task:
- implement function X
- modify file Y
- add tests in Z

4) Acceptance criteria:
- commands to run
- expected outputs
- failure modes

Example prompt:
“Use MBot ChatGPT Context Keeper v1.0.
Modify `hmb-mail-injector/src/injector.py` to support reading `.json` email files.
Constraints: explicit loops, type hints, no clever comprehensions, log decisions not data.
Add tests in `tests/test_injector.py` for 2 valid files and 2 invalid files.
Provide complete file contents.”

## After you get code (do this every time)
1) Read it like a reviewer: can you follow it without Python idioms?
2) Search for footguns:
   - eval/exec, walrus, reduce, broad except, global state
   - hidden network calls, hidden file writes
3) Run formatter/lint:
   - black .
   - ruff check . (if present)
4) Run tests.
5) If anything is unclear: ask ChatGPT to rewrite for clarity, not for compactness.

## Common failure modes (watch for these)
- Too clever comprehensions and one-liners
- Silent swallowing of exceptions
- “Just catch Exception” patterns
- Missing encoding handling for files
- Assuming paths exist, no validation
- Logging personal data
- Unclear separation of I/O vs logic
- Unstated new dependencies

