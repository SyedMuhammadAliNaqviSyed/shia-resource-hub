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

### Parent Support

`parent-support.html` + related JS implement:

- Child age, goal, language, format and manageable-time selection.
- Structured discovery URL context.
- Context-aware ranking and “why this fits” explanations.
- Small-start recommendations and optional deeper/next-step guidance.
- Normal searches do not show the Parent Support banner.

**Browser smoke test: PASS.**

### Ulema / Teacher Support

`ulema-support.html` + `js/ulema-support.js` implement:

- Age and topic/goal selection.
- Preferred format and optional learner task.
- Resource shortlist and ordering.
- Per-resource frequency, minutes and practical instruction.
- Shareable learning-plan URLs.
- Openable shared-plan link for manual verification.

**Browser smoke test: PASS.**

### Youth Engagement MVP

`youth.html` + `js/youth.js` implement:

- 13–17 and 18+ age choices.
- Quran, practice, history, research and Ahlulbayt missions.
- Watch/listen/read → practice → reflection flow.
- Existing-resource discovery links with age/topic context.
- Local mission completion marker.
- Responsive mobile layout.

**Browser smoke test: PASS.** Age/topic live click confirmation had limited visual tooling, but source logic was verified.

### Learning Paths MVP

`data/learning-paths.json` + `learning-paths.html` implement:

1. Quran Starter — Youth
2. Hadith Research Starter
3. Practical Fiqh — Start Here
4. Family Learning — Urdu Start

Cards expose goal, age/audience, level, estimated time, language, engagement type, required steps and optional deeper steps. Audience/age filters and related-resource links work.

**Browser smoke test: PASS.** Homepage main nav, homepage start card, footer and mobile navigation were separately verified as PASS.

### Kids Videos / Urdu Kids

- Kids video directory with age, language, topic, channel and playlist/series discovery.
- Shia Kids Channels collection.
- Urdu Kids — Start Here curated section.
- Three curated Urdu Kids entries are loaded at runtime.

**Browser smoke test: PASS.** One prayer-card title differs slightly between data and deployed display; functionality is unaffected.

### Natural-Language Structured Discovery

Natural-language queries can now extract structured signals such as:

- `7 saal` → 6–8
- `15 saal` → 13–17
- `18+` → 18+
- Urdu → Urdu language context
- Video → Video format
- time expressions such as 5–10 min → time context

`parent-context.js` was updated so age-only or language/format-only extracted context remains visible.

**Browser smoke test: PASS** for age-only, adult age-only, youth, full child query, normal-search regression and mobile. Audio required separate taxonomy handling.

### Audio intent / taxonomy

The catalog currently has no clean `type: "Audio"` resources. Audio intent therefore works as **relevance/tag scoring**, not as a hard format filter. This avoids creating an invalid `Audio` dropdown state.

Rawda is a strong audio candidate but is not Urdu-tagged, so it is correctly excluded from an Urdu-filtered query. Other multi-feature resources remain eligible.

**Final Audio Intent browser smoke test: PASS.**

### Recommendation feedback safety

`js/ranking-feedback.js` uses feedback only as a conservative secondary signal:

- Minimum 3 observations per resource.
- At least 2 mature resources before feedback reorder can run.
- Feedback effect is capped.
- Contextual relevance remains primary.

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

Do not create a duplicate resource database without a strong reason. Prefer a normalized runtime model.

## QA status

Major browser smoke-test areas completed and verified on the deployed site:

- Need Discovery
- Search and filters
- Parent Support
- Ulema Support
- Resource Details + Visit
- Homepage/navigation
- Kids Videos
- Youth
- Learning Paths
- Urdu Kids
- Natural-language structured parsing
- Audio intent
- Recommendation feedback safety

Automated tests are **not currently available/executed**. Do not claim automated test execution.

## Roadmap / remaining work

### Recommendation intelligence

Core natural-language structured parsing is implemented and browser-tested. Future improvements should be incremental and data-driven rather than replacing the current contextual ranking.

### Ulema + parents + community network

Longer-term: richer recommendation sets, parent usefulness feedback, curated collections, community submissions, quality/verification workflow, and analytics on what users actually find useful.

### Optional future youth progress

Progress/path expansion remains optional and should only be added if it provides real user value.

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

**Run a final repository/state audit for genuinely remaining implementation gaps.** Do not repeat already-verified browser tests or stale findings. Inspect current code/data first, identify only confirmed remaining work, then implement the highest-value small fix if one exists.

## Continuation rule

When continuing in a new conversation, read this file first, inspect the current repository state, and continue from **Immediate next task** rather than asking the user to repeat project history.
