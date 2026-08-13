# Shia Resource Hub — Project Status & Continuation Guide

> Handoff point for continuing the project. Read this before major changes.

## Vision

Build a practical, modern Shia resource/discovery platform that reduces the gap between useful Islamic knowledge/resources and today's internet-native generation.

## Product principle

**Need → relevant resources → practical next step → learning path**

Do not become a huge content dump. A smaller set of high-value, discoverable resources is better than thousands of poorly classified links.

## Audience and age model

Current age bands: 3–5, 6–8, 9–12, 13–17, 18+.

Core audiences: parents/families, children, youth/students, ulema/teachers/mentors, and general learners/researchers.

## Implemented / verified

### Foundation / Discovery

- Need-based discovery page: `needs.html`.
- Searchable resource directory with multi-field relevance scoring.
- Search uses resource metadata plus intent aliases and derived intelligence.
- Age-aware discovery and parent-context ranking.
- Resource-card fit explanations.
- Resource detail pages and external Visit links.
- Shareable URL-based searches and filters.

**Browser smoke test: PASS.**

### Parent / Ulema / Youth / Learning Paths

Parent Support, Ulema/Teacher Support, Youth Engagement and Learning Paths MVPs are implemented and browser-tested. Homepage navigation, learning-path links and shared-plan flows were also verified.

### Kids Videos / Urdu Kids

- Kids video directory with age, language, topic, channel and playlist/series discovery.
- Shia Kids Channels collection.
- Urdu Kids — Start Here curated section.
- Three curated Urdu Kids entries are loaded at runtime.

**Browser smoke test: PASS.**

### Natural-Language Structured Discovery

Natural-language queries extract structured signals such as age bands, Urdu/English language context, video format and time expressions. Age-only/language/format context remains visible.

**Browser smoke test: PASS.**

### Audio intent / taxonomy

The catalog currently has no clean `type: "Audio"` resources. Audio intent therefore works as relevance/tag scoring, not as a hard format filter. This avoids creating an invalid Audio dropdown state.

**Final Audio Intent browser smoke test: PASS.**

### Recommendation feedback safety

Feedback is used conservatively as a secondary signal: minimum 3 observations per resource, at least 2 mature resources before reorder, and a capped effect. Contextual relevance remains primary.

**Browser smoke test: 7/7 PASS.**

## Current resource data

Runtime resource data is distributed across:

- `data/resources.json`
- `data/additional-resources.json`
- `data/research-resources.json`
- `data/urdu-south-asia-resources.json`
- `data/expansion-batch-01.json`
- `data/quality.json`
- `data/intent-aliases.json`

Recent cleanup commits removed confirmed duplicate/cross-dataset records involving `al-islam-quran`, `sistani-qa`, broken Thaqalayn expansion paths, ShiaKids records, HREC records and duplicate app/cross-dataset records. See `data/resource-audit-2026-08-13.md` for the controlled curation baseline.

Do not create a duplicate resource database without a strong reason. Prefer a normalized runtime model.

## QA status

Major browser smoke-test areas have already been completed on the deployed GitHub Pages site, including Need Discovery, Search/Filters, Parent Support, Ulema Support, Resource Details/Visit, Homepage/navigation, Kids Videos, Youth, Learning Paths, Urdu Kids, natural-language parsing, Audio intent and recommendation-feedback safety.

Automated tests are **not currently available/executed**. Do not claim automated test execution.

**Phase A browser QA is complete. Do not repeat the broad QA suite unless a regression appears.**

## Resource curation phase

Current work is resource integrity and curation rather than another broad feature-testing cycle.

### Curation rules

- Preserve existing IDs unless a real identity problem requires a change.
- Do not add the same canonical destination more than once across runtime datasets.
- Treat URL variants as possible duplicates, not automatic duplicates; inspect destination purpose first.
- Keep distinct resources when they provide materially different user value (for example a main site versus a dedicated search/tool/app).
- Do not claim `official` or `verified` without a defensible source basis.
- Prefer high-value, discoverable resources over catalogue growth for its own sake.
- Work in small documented batches and verify after each meaningful batch.

## Roadmap / remaining work

### Resource integrity and curation — CURRENT

1. Reconcile the current runtime resource count from the live build/data loader.
2. Check cross-dataset duplicate IDs and normalized canonical URLs.
3. Review remaining high-confidence near-duplicates manually rather than deleting by hostname alone.
4. Review candidate additions (including duas.org, al-shia.org, Rafed, Ziaraat, Alhassanain and Shia Maktab) only after overlap and source-quality checks.
5. Add new resources in small documented batches.
6. Run targeted live verification after each meaningful batch; defer the full regression suite until the resource curation pass is substantially complete.

### Recommendation intelligence

Continue incremental, data-driven improvements rather than replacing the current contextual ranking.

### Ulema + parents + community network

Longer-term: richer recommendation sets, parent usefulness feedback, curated collections, community submissions, quality/verification workflow, and analytics on what users actually find useful.

### Learning-path expansion

Do not expand the path library merely for quantity. Add paths only where they provide a clear purposeful journey using existing high-quality resources.

## What NOT to do

- Do not keep adding documentation instead of user-facing implementation.
- Do not manually tag hundreds of resources by default.
- Do not duplicate resource databases unnecessarily.
- Do not make the platform a generic everything-Islamic dump.
- Do not rank only by popularity; consider relevance, quality and suitability.
- Do not make AI the religious authority.
- Do not keep polishing videos while higher-value roadmap work remains.
- Do not invent resource taxonomy entries without real supporting data.

## Immediate next task

**Continue the resource integrity audit from the documented 2026-08-13 baseline.** Reconcile the live/runtime count and normalized duplicate set first, then implement only confirmed high-value cleanup or additions in controlled batches. Do not repeat completed feature QA.

## Continuation rule

When continuing in a new conversation, read this file and `data/resource-audit-2026-08-13.md`, inspect the current repository state, and continue from the Immediate next task rather than asking the user to repeat project history.
