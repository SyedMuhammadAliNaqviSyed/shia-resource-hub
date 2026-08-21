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

Parent Support, Ulema/Teacher Support, Youth Engagement and Learning Paths MVPs are implemented and browser-tested.

Learning paths expanded (2026-08-21b) with Duas, Beliefs (English youth), and Digital Library Desk paths.

### Kids Videos / Urdu Kids

- Kids video directory with age, language, topic, channel and playlist/series discovery.
- Shia Kids Channels collection.
- Urdu Kids — Start Here curated section.

**Browser smoke test: PASS.**

## Current resource data

Runtime datasets (same order in `js/app.js` and `js/search.js`):

1. `data/resources.json`
2. `data/additional-resources.json`
3. `data/research-resources.json`
4. `data/urdu-south-asia-resources.json`
5. `data/expansion-batch-01.json`
6. `data/expansion-batch-02.json`
7. `data/expansion-batch-03.json` *(new 2026-08-21b)*
8. `data/quality.json` (overlay)

### Recent integrity + curation

- 2026-08-21: removed cross-dataset duplicates; unified loaders for batch-02
- 2026-08-21b: added high-value batch-03 (Alhassanain, Thaqlain, House of Taha, Shia Lectures, Shia Central, Shia Companion app); expanded learning paths

See `data/resource-audit-2026-08-21.md` and `data/resource-audit-2026-08-21b.md`.

## Resource curation phase

### Curation rules

- Preserve existing IDs unless a real identity problem requires a change.
- Do not add the same canonical destination more than once across runtime datasets.
- Prefer high-value, discoverable resources over catalogue growth for its own sake.
- Do not claim `official` or `verified` without a defensible source basis.
- Work in small documented batches and verify after each meaningful batch.

## Roadmap / remaining work

1. Live verification after deploy (homepage count, newest resources, learning paths page)
2. Optional quality.json enrichment for batch-03 IDs after deeper review
3. Urdu / South Asia high-value additions only
4. Near-duplicate destination review (distinct value only)
5. Longer-term: community usefulness feedback, richer ulema/parent network tools

## What NOT to do

- Do not become a generic everything-Islamic dump
- Do not rank only by popularity
- Do not make AI the religious authority
- Do not expand learning paths only for quantity

## Immediate next task

**Live verify batch-03 + new learning paths on GitHub Pages**, then continue only high-value Urdu/South Asia or quality enrichment work.

## Continuation rule

When continuing in a new conversation, read this file and the latest `data/resource-audit-*.md`, inspect the repository state, and continue from the Immediate next task.
