# Resource Audit — 2026-08-13

## Purpose

Controlled resource curation after the completed Phase A browser QA and duplicate-cleanup work. This document records the audit rules and confirmed cleanup so future batches do not repeat or undo earlier decisions.

## Working rules

- Preserve existing IDs unless a real identity problem requires a change.
- Do not add the same canonical destination more than once across runtime datasets.
- Treat URL variants as possible duplicates, not automatic duplicates; inspect destination purpose first.
- Keep distinct resources when they provide materially different user value (for example a main site versus a dedicated search/tool/app).
- Do not claim `official` or `verified` without a defensible source basis.
- Prefer high-value, discoverable resources over catalogue growth for its own sake.
- Make changes in small batches and verify after each batch.

## Confirmed cleanup completed before this audit

Recent commits removed confirmed duplicate/cross-dataset records involving:

- `al-islam-quran`
- `sistani-qa`
- broken Thaqalayn expansion paths
- duplicate ShiaKids records found across datasets
- duplicate HREC records
- duplicate app records
- duplicate cross-dataset expansion records

Recent cleanup commits include:

- `df2c8297` — Clean duplicate and broken expansion entries
- `98e6a25` — Clean duplicate resource entries in additional batch
- `a73bcbc` — Remove remaining duplicate app entries from additional batch
- `357ac09` — Remove cross-dataset duplicate resources from expansion batch
- `13ab3b4` — Remove duplicate HREC and app resources from Urdu batch

## Current datasets in runtime

- `data/resources.json`
- `data/additional-resources.json`
- `data/research-resources.json`
- `data/urdu-south-asia-resources.json`
- `data/expansion-batch-01.json`
- `data/quality.json`
- `data/intent-aliases.json`

## Batch 1 — Core reference additions

Added three high-confidence, non-overlapping reference resources after source and overlap review:

- `rafed` — Rafed Cultural Development Network; broad Arabic Shia library, research and media resource.
- `al-shia` — Al-Shia.org; Persian/Arabic Shia knowledge and research portal.
- `ziaraat` — Ziaraat.com; dedicated Ziyarat literature and devotional reference.

Claims such as `official`/`verified` were intentionally not added where the available evidence did not justify them.

Commit: `b81add8` — Add verified core Shia reference resources batch

## Batch 2 — Multilingual library addition

Added one high-confidence library resource after checking the existing runtime datasets for overlap:

- `shia-maktab` — Shia Maktab; volunteer-maintained digital library with searchable books, articles, video and audio across many languages, including English, Urdu and Arabic.

The live site explicitly describes itself as a volunteer-maintained Shia digital library and provides multilingual library sections. It also states that it is not affiliated with an organization, so `official` and `verified` claims were intentionally omitted.

Commit: `60e68bf` — Add Shia Maktab library resource batch

### Candidates intentionally not added in Batch 2

- `duas.org` — already exists in `data/resources.json` as `duas-org`; no duplicate was added.
- `Alhassanain` — useful candidate, but the current primary site was not sufficiently accessible for a clean first-party verification pass in this batch. Keep pending rather than adding with unsupported claims.

## Next audit sequence

1. Reconcile the current runtime resource count from the live build/data loader.
2. Check cross-dataset duplicate IDs and normalized canonical URLs.
3. Review remaining high-confidence near-duplicates manually rather than deleting by hostname alone.
4. Review pending candidate additions such as Alhassanain and structured learning resources only after overlap and source-quality checks.
5. Add new resources in small documented batches.
6. Run targeted live verification after each meaningful batch; defer the full regression suite until the resource curation pass is substantially complete.

## Status

Phase A product/browser QA is complete. Current work is resource integrity and curation, not another broad feature-testing cycle.
