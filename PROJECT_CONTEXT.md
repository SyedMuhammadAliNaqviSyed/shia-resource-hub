# Shia Resource Hub — Project Context & Continuation Document

> Source of truth for continuing the project in a new chat. Read this before major decisions.

## Current implementation snapshot
The project is an active iterative MVP for contextual Shia/Islamic resource discovery and learning support, connecting `resource → learner → parent → ulema/teacher`.

### Core product direction
- Discovery + organization + contextual recommendation + practical action.
- Context signals: age, need, language, format, duration/time, access and source-quality.
- Video-first discovery is especially important for children, but the product is not a YouTube clone and should avoid endless-feed/autoplay UX.
- Parents are a key bridge; ulema/teachers provide direction; the platform supports discovery and execution without replacing scholarly judgment.

### Main pages / modules
- `index.html` — homepage, search, categories, featured/recent resources, collections, parent/ulema entry points and prominent Kids Videos entry points.
- `resources.html` — general resource discovery.
- `videos.html` — main family/kids video discovery with age/language plus channel-vs-series filtering.
- `kids-videos.html` — dedicated age/topic kids-video prototype.
- `parent-support.html`, `parent-plan.html` — contextual parent support and plans.
- `ulema-support.html`, `ulema-plan-preview.html` — shortlist/plan/review/share workflow.
- `learner.html` — learner receiving/doing/marking plan steps.
- `collections.html`, `needs.html`, `about.html`.

### Kids video implementation
`js/video-section.js` now supports:
- All video resources
- Shia channels (`kind: channel`)
- Playlists/series (`kind: series`)
- Age filters: 3–5, 6–8, 9–12
- Language filters including Urdu/English
- Source-quality labels and parent notes

`data/kids-video-resources.json` is the broader seeded kids-video dataset.

`data/urdu-kids-video-curated.json` is the new verified Urdu-focused collection. It currently includes:
1. Faraj Kids — Story Time (Urdu)
2. Ahlulbayt Kids — Shia Namaz & Tayammum collection
3. Faraj Kids — Jawad & Maahira (Urdu Dubbed)

These were checked against current public pages during research. Faraj Kids' Urdu Story Time page lists multiple Urdu children's videos covering Prophet Ibrahim, Imam Husayn, Imam Mahdi, kids-ahkam and Quran-related learning. Ahlulbayt Kids' public channel lists Shia Salah and tayammum videos with Urdu titles. Keep individual-video suitability separate from channel-level suitability.

### Source-quality model
Levels: Official source, Recognized educational source, Scholar-linked, Community source, Source not yet assessed.
Important: `official` means first-party provenance, not automatically scholarly verification. Never claim scholarly verification without evidence.

### Feedback / ranking prototype
`js/recommendation-feedback.js` contains a conceptual usefulness signal:
- worked +3
- needed help +1
- too much -2
- lost interest -3
This must eventually combine with contextual signals and sufficient sample size before materially affecting ranking.

### Learning-plan architecture
Parent and ulema flows support context → shortlist → selected resources → small tasks → review/share → learner handoff. Learner flow supports receiving a plan, opening a resource, doing a small task, marking completion and lightweight local progress.

## Next priorities
1. Integrate `data/urdu-kids-video-curated.json` into the visible video UI as a dedicated **Urdu Kids** collection/filter.
2. Add more verified Urdu channels/series only when a concrete public source can be checked.
3. Add individual video-level metadata (duration/topic/sensitivity) where useful instead of trusting channels wholesale.
4. Finish contextual recommendation scoring and connect feedback to it.
5. Harden ulema → parent → learner share/receiving flow.
6. Improve structured resource metadata and transparent quality labels.
7. Later build automated discovery/metadata/dead-link/duplicate analysis.
8. Verify deployment before giving any live website URL; never invent one.

## Continuation rule
When the user says **“ok next”**, inspect current repository state and continue the next logical implementation step. Do not redo completed work. Keep the UX lightweight, practical and transparent about source quality.

**Status:** Active prototype / iterative MVP.
