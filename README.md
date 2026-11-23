# RUST4SAP — public website

This repository is **the public website for RUST4SAP**, not the project itself. The gateway's
source code lives in a private repository; there is no application code here.

If you arrived from the "Docs" link expecting a Rust project, that's the confusion this file
exists to prevent.

## What is here

| path | what it is |
|---|---|
| `index.html` | the landing page |
| `preview.html` | byte-identical copy of `index.html` plus `noindex`, regenerated on every sync; exists only so a reviewer can fetch a URL that has never been cached. Not a second page: it is never edited, and search engines are told to ignore it |
| `demo/rbac-abac.html` | the interactive ABAC demo |
| `demo/decisions.json` | decisions exported by the Rust policy engine; the page replays them and never re-implements the policy |
| `demo/classify.mjs` | a **render gate, not a policy engine**: it checks the exported schema version, reads the engine's `outcome`, and decides whether the page may display facts or illuminate an outcome. It never decides access — an unrecognised schema produces `UNKNOWN`, not a guess |
| `deck/sap-abac-mcp-gateway.pptx` | the 8-slide presentation |
| `img/` | screenshot used on the landing page |
| `.github/ISSUE_TEMPLATE/` | access-request template linked from the page |

## How it is built

The site source lives in the private repository and is copied here by a sync script, which then
regenerates `preview.html` from `index.html`. There is one design rather than two; this repository
is output, never edited by hand.

## Demo data

Everything in `demo/decisions.json` is synthetic: fictional business partners (`Muster`,
`Dupont`), sequential IDs (`0000100001`), and **deliberately invalid** IBANs — the placeholders are
20 characters, where a real German IBAN has 22, so they cannot validate as an account. The
file contains no hostnames, no tenant identifiers and no real SAP data. It does contain the demo
policy's internal role names and rule ids, which is deliberate: the demo's purpose is to show
which rule produced which answer.

## Licence

MIT — see [LICENSE](LICENSE). It covers **this website** (markup, the demo, the deck). The
private gateway source is licensed separately; ask for access if you need to know its terms.

## Access

Email `centurionb6 [at] proton [dot] me`, or open an issue using the access-request template.
The policy engine and 37 of the gateway's tests are already public at
[rust4sap-samples](https://github.com/CenturionB6/rust4sap-samples).
