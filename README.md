# RUST4SAP — public website

This repository is **the public website for RUST4SAP**, not the project itself. The gateway's
source code lives in a private repository; there is no application code here.

If you arrived from the "Docs" link expecting a Rust project, that's the confusion this file
exists to prevent.

## What is here

| path | what it is |
|---|---|
| `index.html` | the landing page |
| `preview.html` | byte-identical copy of `index.html`, regenerated on every sync; exists so a reviewer can fetch a URL that has never been cached |
| `demo/rbac-abac.html` | the interactive ABAC demo |
| `demo/decisions.json` | decisions exported by the Rust policy engine; the page replays them and never re-implements the policy |
| `demo/classify.mjs` | the page's only decision logic: refuses to render a decision whose schema it does not recognise |
| `deck/sap-abac-mcp-gateway.pptx` | the 8-slide presentation |
| `img/` | screenshot used on the landing page |
| `.github/ISSUE_TEMPLATE/` | access-request template linked from the page |

## How it is built

`docs/index.html` in the private repository is the source of truth. A sync script copies it here
and regenerates `preview.html` from it, so there is one design rather than two.

## Demo data

Everything in `demo/decisions.json` is synthetic: fictional business partners (`Muster`,
`Dupont`), sequential IDs (`0000100001`), placeholder IBANs (`DE00 0000 0000 0000 0001`). The
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
