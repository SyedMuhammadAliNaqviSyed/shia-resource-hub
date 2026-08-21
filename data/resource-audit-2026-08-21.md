# Resource Audit — 2026-08-21

## Purpose

Continue resource integrity work from the 2026-08-13 baseline. Focus on cross-dataset duplicate removal and consistent runtime data loading.

## Confirmed cleanup in this batch

### Cross-dataset duplicate IDs removed from `expansion-batch-01.json`

These IDs already existed in `additional-resources.json` (which loads earlier and wins via the `seen` Set). Keeping two copies created silent inconsistency and maintenance risk:

- `rafed`
- `al-shia`
- `ziaraat`
- `shia-maktab`

Canonical records remain in `data/additional-resources.json`.

`expansion-batch-01.json` now only contains non-overlapping expansion entries:

- `al-islam-hadith`
- `thaqalayn-quran`
- `sistani-books`
- `al-islam-duas`
- `al-islam-kids`

### Runtime data loader unification

- `js/app.js` previously omitted `data/expansion-batch-02.json`
- `js/search.js` already included it

Both loaders now use the same DATA_PATHS list so homepage counts and directory results stay consistent.

## Current runtime datasets (order)

1. `data/resources.json`
2. `data/additional-resources.json`
3. `data/research-resources.json`
4. `data/urdu-south-asia-resources.json`
5. `data/expansion-batch-01.json`
6. `data/expansion-batch-02.json`

Plus overlay: `data/quality.json`

## Notes

- First occurrence of an ID wins; later duplicates are dropped at runtime.
- Prefer editing the canonical earlier file rather than re-adding the same ID in a later batch.
- URL variants for the same destination (e.g. ziaraat.com vs ziaraat.net) should be resolved to one canonical record before adding new IDs.

## Next recommended steps

1. Spot-check live homepage resource count after deploy.
2. Review near-duplicate destinations (same host, different path) only where they provide distinct user value.
3. Add pending high-value candidates (e.g. Alhassanain) only after first-party verification.
4. Align any quality.json IDs that do not match resource IDs (example: `sadiqain-workbook` vs `shiakids-sadiqain`).
