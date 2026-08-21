# Resource Audit — 2026-08-21c (Urdu / South Asia phase)

## Goal

Strengthen Urdu and South Asia discoverability with a small high-value batch, quality enrichment, and one purposeful learning path.

## Urdu / South Asia additions (`data/urdu-south-asia-resources.json`)

| ID | Resource | Notes |
|---|---|---|
| `shiamultimedia-urdu` | ShiaMultimedia | Urdu books, lectures, marsiya — high regional use |
| `almuntazar-urdu` | Almuntazar Urdu | Urdu articles on Hussain / Mahdi / ziyarat |
| `shia-ziaraat-duas-app` | Shia Ziaraat and Duas | Popular Android ziyarat/dua app |
| `shia-muslim-app` | Shia Muslim app | Large-install Quran/dua/adhan app with Urdu support |
| `islamicmobility` | IslamicMobility | Mobile-friendly Shia ebook library |

Existing `almuntazar-library` (alibrary.org) and `hubeali` kept as distinct; no ID collisions.

## Quality enrichment

`data/quality.json` updated for batch-03 and new Urdu/South Asia IDs where free access is clear. No unsupported `official` flags.

## Learning path

Added `urdu-south-asia-starter` using existing + new resource IDs only.

## Intentionally skipped

- Aggregator-only or low-trust download dumps
- Sectarian polemic sites without clear educational value for the Hub audience
- Duplicate hosts already covered under different useful paths

## Next

1. Live verify after GitHub Pages deploy
2. Optional mobile polish / empty states
3. Stop bulk expansion; prefer user feedback-driven additions
