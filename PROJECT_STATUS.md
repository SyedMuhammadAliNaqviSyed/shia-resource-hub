# Shia Resource Hub — Project Status & Continuation Guide

> This file is the handoff point for continuing the project in a future conversation. Read it before making major changes.

## Vision

Build a practical, modern Shia resource/discovery platform that reduces the gap between useful Islamic knowledge/resources and today's internet-native generation.

The core problem is **not simply lack of content**. Useful material is scattered, parents often do not know what to give a child, many children/youth consume whatever appears next on social platforms, and many ulema have useful guidance but lack a practical digital bridge to today's generation.

The platform should help:

- parents find appropriate resources for children and youth;
- children/youth discover useful, engaging material without needing perfect search terms;
- ulema/teachers identify and share suitable resources for a particular need;
- users know what a resource is useful for and what to do next;
- useful existing material become discoverable rather than duplicating content.

## Product principle

**Need → relevant resources → practical next step → learning path**

Do not turn the project into a huge content dump. A smaller set of high-value, discoverable resources is better than thousands of poorly classified links.

## Audience model

Age must be treated explicitly because children may have access to phones/internet as early as 3–4 years old.

Current age bands:

- 3–5
- 6–8
- 9–12
- 13–17
- 18+

The platform should support at least these groups:

- parents/families
- children
- youth/students
- ulema/teachers/mentors
- general learners/researchers

Parents are an important central point because they connect children, their own learning, and ulema/teachers.

## Religious/editorial direction

The project owner is a Shia Ithna Ashari user and follows Ayatollah Sayyid Ali Khamenei. The platform's content priority is therefore Shia-compatible material, while the owner does not want the platform branded unnecessarily around his personal identity or used to exclude a correct/helpful resource merely because of branding. Material that conflicts with the project's established religious/editorial direction should not be promoted.

AI/recommendation logic must **not be treated as a religious authority**. Religious correctness should follow the project's editorial policy and appropriate scholarly sources.

## What has been implemented

### 1. Learning-path architecture

Created `data/learning-paths.md`.

It defines a learning path as a short sequence of existing resource IDs, with:

- goal
- audience
- age range
- level
- estimated time
- required/optional steps
- engagement type
- language
- status

Design rule: reuse resources; do not duplicate content.

### 2. Intelligent resource metadata

`js/search.js` derives useful metadata from existing resource fields instead of requiring manual tagging of every resource.

Derived fields include:

- `purpose`
- `needs`
- `goals`
- `ageRange`

Signals include Quran, Hadith, dua/ziyarat, prayer, children, youth, parents, history, books/research, structured learning, video and audio.

### 3. Intelligent search/relevance

`js/search.js` uses multiple resource fields and intent aliases for relevance:

- name
- description
- type
- categories
- languages
- tags
- audience
- purpose
- needs
- goals
- age range

It supports multi-word intent matching and relevance scoring rather than relying only on exact phrase matches.

### 4. Need-based discovery page

Created `needs.html` with user-friendly entry points such as:

- Help a child learn
- Learn the Quran
- Learn a practice
- Learn as a young person
- Understand history
- Find a reference
- Find something to watch or listen to
- Find a book
- Find an app or tool

These routes feed into the existing resource discovery/search system.

### 5. Homepage integration

`index.html` now links users directly into need-based discovery through:

- navigation: `What do you need?`
- homepage section: `Start with what you need.`

### 6. Resources page integration

`resources.html` links back to need-based discovery and preserves search/filter state through URL parameters.

### 7. Age-aware discovery

Derived metadata supports the current age bands and does not collapse a 3–4 year old child into the same generic experience as a teenager.

### 8. Resource detail direction

Resource detail pages have been extended/directed toward showing practical usefulness, audience, inferred purpose, age suitability and related/next resources rather than only acting as a link directory.

## Current resource data

Existing resource data is distributed across multiple JSON sources. `js/search.js` currently loads:

- `data/resources.json`
- `data/additional-resources.json`
- `data/research-resources.json`
- `data/urdu-south-asia-resources.json`
- `data/expansion-batch-01.json`
- `data/quality.json` for quality overlays
- `data/intent-aliases.json` for search intent aliases

Do not create a second duplicate resource database without a strong reason. Prefer a normalized runtime model over duplicating content.

## Remaining roadmap

### Phase A — Foundation / Discovery

- [x] Existing resource data discovery
- [x] Learning-path data model
- [x] Derived resource intelligence
- [x] Multi-field relevance search
- [x] Need-based discovery page
- [x] Homepage need entry point
- [x] Age-aware metadata
- [ ] Verify all current frontend routes and data sources end-to-end
- [ ] Add automated/visible tests for search and need flows

### Phase B — Parent support

Goal: make the parent the practical bridge between child, platform and ulema.

Planned flow:

`Child age → parent's goal/need → suitable resources → manageable activity/learning suggestion → optional deeper material`

Important: avoid overwhelming parents. Give a small number of high-confidence choices first.

Potential parent needs:

- child tarbiyat
- Quran learning
- prayer/duas
- stories/history
- age-appropriate videos/books
- productive screen time
- questions the parent cannot answer
- finding material recommended by an alim/teacher

### Phase C — Ulema/teacher support

Goal: let an alim/teacher effectively say:

> “For this child/youth/person, do this task and use these resources.”

Planned capabilities:

- select audience/age
- select goal/topic
- choose a small resource set
- optionally form a learning path/task
- share a simple link or recommendation
- eventually allow reusable recommendation sets

Do not require ulema to manage a complicated CMS initially.

### Phase D — Youth engagement

Goal: make useful learning compatible with modern digital behavior rather than making it feel like a boring old directory.

Planned concepts:

- short tasks
- watch/listen/read/practice combinations
- progress through a path
- small achievable goals
- reflection/discussion prompts
- useful digital skills/resources alongside religious learning where appropriate
- modern presentation without compromising religious/editorial direction

The goal is not to compete with every entertainment platform. The goal is to make the **next useful thing easy to find and easy to start**.

### Phase E — Learning paths

Turn existing resources into curated short journeys.

Examples of structure (not final content):

`topic → short video → short reading → practice/reflection → optional deeper book`

Learning paths should be:

- age-aware
- language-aware
- level-aware
- time-aware
- short by default
- composed from existing resources

### Phase F — Recommendation intelligence

Eventually support natural-language needs such as:

> “Mera 7 saal ka beta Quran ki basic understanding start kare; Urdu mein engaging cheez chahiye.”

The system should translate this into structured signals and rank existing resources.

Important: recommendations should be explainable:

- why this resource was selected
- age fit
- format
- language
- purpose
- quality/verification signals

### Phase G — Ulema + parents + community network

Longer-term platform layer:

- recommendation sets from ulema
- parent feedback/usefulness signals
- curated collections
- community resource submissions
- quality/verification workflow
- analytics on what users actually find/useful

## What NOT to do

- Do not keep adding documentation instead of implementing user-facing behavior.
- Do not manually review/tag hundreds of resources as the default strategy.
- Do not duplicate resource databases unnecessarily.
- Do not make the platform a generic “everything Islamic” dump.
- Do not assume children start using devices only at age 10+.
- Do not force parents to supervise every second of a child's screen use; provide practical support for imperfect real-life situations.
- Do not make recommendations solely because an item is popular; relevance, quality, suitability and religious/editorial fit matter.
- Do not make AI the religious authority.

## Immediate next task

The next implementation priority is **Phase B: Parent Support MVP**.

Build a small parent flow that asks for:

1. child's age band;
2. parent's immediate goal/need;
3. preferred format/language where useful;

then returns a small set of relevant resources with:

- why it is suitable;
- estimated effort/time where available;
- what the parent can do with it;
- an optional next step.

Keep it lightweight and reuse the existing search/relevance engine.

## Continuation rule

When continuing this project in a new conversation, read this file first, inspect the current repository state, verify which checklist items are actually implemented, and continue from **Immediate next task** rather than asking the user to repeat the whole project history.

Update this file whenever a major phase, architecture decision, or user-facing capability is completed.
