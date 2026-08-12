# Shia Resource Hub — Project Status & Continuation Guide

> Handoff point for continuing the project in a future conversation. Read this before major changes.

## Vision

Build a practical, modern Shia resource/discovery platform that reduces the gap between useful Islamic knowledge/resources and today's internet-native generation.

## Product principle

**Need → relevant resources → practical next step → learning path**

Do not become a huge content dump. A smaller set of high-value, discoverable resources is better than thousands of poorly classified links.

## Audience and age model

Children may have access to phones/internet as early as 3–4 years old. Current age bands: 3–5, 6–8, 9–12, 13–17, 18+.

Core audiences: parents/families, children, youth/students, ulema/teachers/mentors, and general learners/researchers.

## Religious/editorial direction

The owner is Shia Ithna Ashari and follows Ayatollah Sayyid Ali Khamenei. Content priority is Shia-compatible material, without unnecessarily branding the platform around the owner's personal identity. AI/recommendation logic is not a religious authority.

## Implemented

### Foundation / discovery

- Learning-path architecture in `data/learning-paths.md`.
- `js/search.js` derives `purpose`, `needs`, `goals`, and `ageRange` from existing resource metadata.
- Multi-field relevance uses name, description, type, categories, languages, tags, audience, derived intelligence and intent aliases.
- Need-based discovery page: `needs.html`.
- Homepage has `What do you need?` / need-based entry point.
- Resources page supports age-aware discovery and parent-context ranking.
- Resource-card fit explanations are implemented.

### Phase B — Parent Support

- `parent-support.html` MVP complete.
- Child age, goal, language, format and manageable-time selection complete.
- Structured signals are passed into resource discovery.
- Parent context is interpreted on resources page.
- Context-aware ranking and “why this fits” explanations complete.
- Small-start recommendations complete through `js/parent-small-start.js`.
- Optional deeper/next-step guidance complete: after the small start, parents are directed toward deeper reading/video/learning paths when needed.

### Phase C — Ulema / Teacher Support

The existing MVP is now implemented in `ulema-support.html` + `js/ulema-support.js`:

- learner age selection: 3–5, 6–8, 9–12, 13–17, 18+
- topic/goal selection: tarbiyat, Quran, practices/duas, history/seerah, youth learning, research
- preferred format: any, video, audio, book/reading
- optional learner task/instruction
- resource shortlist can be selected and carried into the Ulema flow
- selected resources can be ordered
- each resource can have frequency, minutes and a practical instruction
- overall task is preserved
- a shareable learning-plan URL can be generated/copied
- existing resources can be changed without requiring a CMS

This is intentionally a lightweight recommendation-set workflow, not a full admin/CMS system.

### Kids / video work — scoped and frozen

- Kids/family video page and curated video data implemented.
- Shia Kids Channels collection exists with age, language, focus, source-level and parent-note metadata.
- Urdu Kids — Start Here exists with age filtering and parent-preview guidance.
- Do not keep expanding video polish while roadmap work remains.

## Current resource data

Existing resource data is distributed across multiple JSON sources. `js/search.js` loads:

- `data/resources.json`
- `data/additional-resources.json`
- `data/research-resources.json`
- `data/urdu-south-asia-resources.json`
- `data/expansion-batch-01.json`
- `data/quality.json`
- `data/intent-aliases.json`

Do not create a duplicate resource database without a strong reason. Prefer a normalized runtime model.

## Roadmap

### Phase A — Foundation / Discovery

- [x] Existing resource data discovery
- [x] Learning-path data model
- [x] Derived resource intelligence
- [x] Multi-field relevance search
- [x] Need-based discovery page
- [x] Homepage need entry point
- [x] Age-aware metadata
- [x] Core frontend route inspection
- [x] Practical visible QA checklist for search/need flows (`QA_CHECKLIST.md`)
- [ ] Execute browser smoke tests and record results
- [ ] Automated tests (not currently available; do not claim execution)

### Phase B — Parent support

- [x] Parent Support MVP page
- [x] Child age selection
- [x] Parent goal selection
- [x] Format preference
- [x] Urdu language preference
- [x] Manageable time/effort preference
- [x] Pass structured signals into resource discovery URL
- [x] Link parent support prominently from homepage/navigation
- [x] Interpret parent age/need/language/format/time context on resources page
- [x] Context-aware resource ranking
- [x] Concise “why this fits” explanations on matching result cards
- [x] Small-start recommendations rather than broad result lists
- [x] Optional deeper/next-step guidance

Target flow: **Child age → parent's goal/need → language/format/time → small high-confidence set → why suitable → what parent does → optional next step**.

### Phase C — Ulema/teacher support

- [x] Audience/age selection
- [x] Topic/goal selection
- [x] Small resource set / selected-resource workflow
- [x] Optional learning task
- [x] Per-resource order/frequency/time/instruction
- [x] Shareable recommendation/learning-plan link
- [x] Reusable recommendation state via URL
- [x] Lightweight MVP without CMS

### Phase D — Youth engagement

Short tasks, watch/listen/read/practice combinations, progress through a path, achievable goals, reflection/discussion prompts, useful modern digital skills/resources where appropriate, and modern presentation without compromising religious/editorial direction.

### Phase E — Learning paths

Turn existing resources into short journeys such as `topic → short video → short reading → practice/reflection → optional deeper book`. Paths should be age-, language-, level-, and time-aware; short by default; and composed from existing resources.

### Phase F — Recommendation intelligence

Support natural-language needs such as: “Mera 7 saal ka beta Quran ki basic understanding start kare; Urdu mein engaging cheez chahiye.” Translate the request into structured signals and rank existing resources. Recommendations should explain why a resource was selected, age fit, format, language, purpose, and quality/verification signals.

### Phase G — Ulema + parents + community network

Longer-term: ulema recommendation sets, parent usefulness feedback, curated collections, community submissions, quality/verification workflow, and analytics on what users actually find/useful.

## What NOT to do

- Do not keep adding documentation instead of user-facing implementation.
- Do not manually tag hundreds of resources by default.
- Do not duplicate resource databases unnecessarily.
- Do not make the platform a generic everything-Islamic dump.
- Do not assume children start device use only at age 10+.
- Do not require parents to supervise every second; support imperfect real-life situations.
- Do not rank only by popularity; consider relevance, quality, suitability and editorial fit.
- Do not make AI the religious authority.
- Do not expand the video section with optional polish while the core roadmap has pending work.

## Immediate next task

**Execute the browser smoke-test checklist in `QA_CHECKLIST.md` and record any failures/fixes.** Do not start Phase D until this QA is complete.

## Continuation rule

When continuing in a new conversation, read this file first, inspect the current repository state, verify checklist items, and continue from **Immediate next task** rather than asking the user to repeat project history.
