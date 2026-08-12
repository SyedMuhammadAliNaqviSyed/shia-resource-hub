# Shia Resource Hub — Project Status & Continuation Guide

> Handoff point for continuing the project in a future conversation. Read this before major changes.

## Vision

Build a practical, modern Shia resource/discovery platform that reduces the gap between useful Islamic knowledge/resources and today's internet-native generation.

The core problem is not simply lack of content. Useful material is scattered, parents often do not know what to give a child, many children/youth consume whatever appears next on social platforms, and many ulema have useful guidance but lack a practical digital bridge to today's generation.

The platform should help parents find appropriate resources; children/youth discover useful material without perfect search terms; ulema/teachers identify and share suitable resources; users understand what a resource is useful for and what to do next; and useful existing material become discoverable without duplicating content.

## Product principle

**Need → relevant resources → practical next step → learning path**

Do not become a huge content dump. A smaller set of high-value, discoverable resources is better than thousands of poorly classified links.

## Audience and age model

Children may have access to phones/internet as early as 3–4 years old. Current age bands: 3–5, 6–8, 9–12, 13–17, 18+.

Core audiences: parents/families, children, youth/students, ulema/teachers/mentors, and general learners/researchers. Parents are a central point because they connect children, their own learning, and ulema/teachers.

## Religious/editorial direction

The owner is Shia Ithna Ashari and follows Ayatollah Sayyid Ali Khamenei. Content priority is therefore Shia-compatible material, without unnecessarily branding the platform around the owner's personal identity. Material that conflicts with the project's established religious/editorial direction should not be promoted.

AI/recommendation logic is not a religious authority. Religious correctness follows the project's editorial policy and appropriate scholarly sources.

## Implemented

### Foundation / discovery

- Learning-path architecture in `data/learning-paths.md`.
- `js/search.js` derives `purpose`, `needs`, `goals`, and `ageRange` from existing resource metadata.
- Multi-field relevance uses name, description, type, categories, languages, tags, audience, derived intelligence and intent aliases.
- Need-based discovery page: `needs.html`.
- Homepage has `What do you need?` navigation and `Start with what you need` entry point.
- Resources page links back to need discovery and supports age-aware discovery.
- Resource detail direction includes usefulness, audience, purpose, age suitability and related/next resources.

### Parent Support MVP

Created `parent-support.html`.

Current flow: **Child age → parent's immediate goal → language → preferred format → manageable time → show suitable resources**.

Supported goals: tarbiyat & good habits; Quran learning; namaz/duas/practices; stories & Islamic history; useful screen time; general youth learning.

Supported format preferences: any, video, audio, book/reading.

Supported language preferences: any, Urdu, English, Arabic.

Supported time preferences: flexible, 5–10 min, 10–20 min, 20+ min.

The flow intentionally starts with a small number of structured choices rather than making parents write complicated searches.

Homepage integration is complete: `Parent support` is in primary navigation and a dedicated parent-support entry is shown alongside need-based discovery.

Resources-page context is complete: parent age/need/language/format/time signals are preserved and shown as targeted-result context.

Resource ranking now uses age, language, format, and available time as contextual signals.

Resource-card fit explanations are implemented: matching cards can show concise reasons such as age suitability, purpose/goal/category match, selected format, time fit, free/verified/official signals.

Small-start recommendations are implemented through `js/parent-small-start.js`: parent-support result flows show the first 3 high-priority options instead of overwhelming families with a long list.

### Kids / video work (kept scoped)

- Kids/family video page and curated video data are implemented.
- Shia Kids Channels collection exists with age, language, focus, source-level and parent-note metadata.
- Urdu Kids — Start Here exists with age filtering and parent-preview guidance.
- Video work is considered a focused supporting area, not a reason to keep expanding the project indefinitely.

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
- [ ] Verify all current frontend routes/data sources end-to-end
- [ ] Add automated/visible tests for search and need flows

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
- [ ] Add optional deeper/next step

Target flow: **Child age → parent's goal/need → language/format/time → small high-confidence set → why suitable → what parent does → optional next step**.

### Phase C — Ulema/teacher support

Let an alim/teacher say: “For this child/youth/person, do this task and use these resources.” Planned: audience/age selection, topic/goal, small resource set, optional learning path/task, simple shareable link, reusable recommendation sets. Do not require a complicated CMS initially.

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

Continue Phase B with **optional deeper/next-step guidance** after the small-start results: give the parent a clear practical action and an optional deeper resource/path without turning the result page into a large content list. Then move to Phase A QA (frontend routes/data sources) before starting Phase C.

## Continuation rule

When continuing in a new conversation, read this file first, inspect the current repository state, verify checklist items, and continue from **Immediate next task** rather than asking the user to repeat the project history.
