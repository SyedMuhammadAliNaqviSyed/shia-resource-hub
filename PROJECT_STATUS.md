# Shia Resource Hub — Project Status & Continuation Guide

> Handoff point for continuing the project. Read this before major changes.

## Vision

Build a practical, modern Shia resource/discovery platform that reduces the gap between useful Islamic knowledge/resources and today's internet-native generation.

## Product principle

**Need → relevant resources → practical next step → learning path**

Do not become a huge content dump. A smaller set of high-value, discoverable resources is better than thousands of poorly classified links.

## Current resource data

Runtime datasets (same order in `js/app.js` and `js/search.js`):

1. `data/resources.json`
2. `data/additional-resources.json`
3. `data/research-resources.json`
4. `data/urdu-south-asia-resources.json` *(expanded 2026-08-21c)*
5. `data/expansion-batch-01.json`
6. `data/expansion-batch-02.json`
7. `data/expansion-batch-03.json`
8. `data/quality.json` (overlay, enriched 2026-08-21c)

## Recent phases completed

- **2026-08-21** — Cross-dataset duplicate cleanup; loader unification
- **2026-08-21b** — High-value batch-03 (Alhassanain, Thaqlain, etc.); learning paths expansion
- **2026-08-21c** — Urdu/South Asia batch; quality enrich; Urdu starter learning path

Audits: `data/resource-audit-2026-08-21.md`, `...21b.md`, `...21c.md`

## Learning paths (active)

- Quran Starter — Youth
- Hadith Research Starter
- Practical Fiqh — Start Here
- Family Learning — Urdu Start
- Duas & Ziyarat — Daily Start
- Shia Beliefs — English Youth Path
- Digital Library Desk
- **Urdu & South Asia — Start Here** *(new)*

## Roadmap / remaining work

1. Live verification on GitHub Pages after deploy
2. Mobile UX polish / clearer empty states (optional)
3. Prefer feedback-driven additions over more bulk batches
4. Longer-term: community usefulness signals, richer parent/ulema tools

## What NOT to do

- Do not become a generic everything-Islamic dump
- Do not expand only for quantity
- Do not claim official/verified without basis
- Do not make AI a religious authority

## Immediate next task

**Live verify Urdu batch + learning path on the live site.** After that, pause bulk curation unless a clear high-value gap appears.

## Continuation rule

Read this file and the latest `data/resource-audit-*.md` before major changes. Continue from the Immediate next task.
