# Resource Audit — 2026-08-21b (Next Phase)

## Goal

Continue curation after integrity cleanup: add a small high-value batch and expand learning paths without catalogue bloat.

## Batch 3 — High-value additions (`data/expansion-batch-03.json`)

Verified accessible destinations and non-overlapping IDs:

| ID | Resource | Why added |
|---|---|---|
| `alhassanain` | Alhassanain Network | Major free multilingual Shia book/heritage library (pending from earlier roadmap) |
| `thaqlain-org` | Thaqlain | Strong English structured learning / beliefs series |
| `house-of-taha` | House of Taha | English Shia books + kids titles |
| `shia-lectures` | Shia Lectures | English lecture library |
| `shia-central` | Shia Central | Research / hadith analysis |
| `shia-companion-app` | Shia Companion (iOS) | Ja'fari prayer times + duas app |

No `official` claim was added without clear institutional basis. `free` only where public free access is clear.

## Learning paths

Expanded `data/learning-paths.json` with purposeful paths only:

- Duas & Ziyarat — Daily Start
- Shia Beliefs — English Youth Path
- Digital Library Desk

Each path reuses existing resource IDs (including new batch-03 IDs).

## Loader update

`js/app.js` and `js/search.js` now include `data/expansion-batch-03.json` in the same DATA_PATHS order.

## Intentionally not added yet

- Near-duplicate path pages for hosts already covered (unless distinct tool value)
- Unverified regional apps without stable public pages
- Large unstructured link dumps

## Next

1. Live check homepage count + newest sort after deploy
2. Optional quality.json entries for new IDs after deeper review
3. Continue Urdu/South Asia high-value only additions
