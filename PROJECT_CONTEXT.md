# Shia Resource Hub — Project Context & Continuation Document

> Source of truth for continuing the project in a new chat. Read this before major decisions.

## 1. Purpose
Shia Resource Hub is a contextual discovery and learning-support layer for scattered Islamic/Shia educational resources. It helps children, youth, parents, ulema/teachers and researchers find useful material without needing to know exactly where it lives or what to search for.

Core value: **discovery + organization + contextual recommendation + practical action**, not simply hosting more content.

## 2. Problem
Children can access phones/tablets from very young ages, including around 3–4. They frequently consume video-first content and may keep watching whatever autoplay/recommendation systems provide. Parents often cannot continuously supervise or know what is useful. Ulema may know what should be taught but may not have an easy digital bridge to modern audiences. Good resources are scattered across YouTube, websites, apps, books, audio, films, libraries and organizations.

The platform should reduce this discovery/generation gap while keeping Islamic learning modern, practical and engaging.

## 3. Users
- Parents/guardians
- Children: 3–5, 6–8, 9–12
- Youth: 13–17
- Adults/young adults: 18+
- Ulema/teachers/madrasa educators
- Researchers/students

Parents are a central bridge: they connect children, their own responsibilities, and ulema/teachers.

## 4. Product principles
1. Useful over huge: prefer a small high-value shortlist to overwhelming lists.
2. Context matters: age, need, language, format, time and goal influence recommendations.
3. Video-first where natural for children/youth, while preserving books/audio/etc.
4. Modern flow, Islamic purpose: do not make learning unnecessarily boring or alien.
5. Parents need support, not another heavy management burden.
6. Ulema give direction; the platform supports discovery and execution but does not replace scholarly judgment.
7. Learners should gradually develop agency: recognize useful resources and confidently share them.
8. Content should align with the project's intended Quran/Ahl al-Bayt/Shia educational scope.
9. Do not overemphasize the founder's personal affiliation in public UX.
10. Automation/AI should perform discovery, metadata, ranking and maintenance work where possible.

## 5. Core flows
### General discovery
`Need → discovery/search → ranked shortlist → open useful resource`

### Parent
`Child age → need → language → format → time → shortlist → simple activity/task → feedback`

### Ulema
`Learner age → need → format → optional task → shortlist → select 1–5 resources → mini learning plan → review → share`

### Learner
`Receive plan → one clear step → open resource → do small task → mark complete → build habit → eventually discover/recommend independently`

## 6. Resource types
Websites, apps, books/ebooks, libraries, Quran, Hadith, duas/ziyarat/amaal, audio, video/lectures, films/documentaries, courses, research tools, children's stories/animations, youth/general learning, community/educational platforms.

Structured metadata should include type/format, language, age suitability, topics/needs, duration/time, access/free status and source/quality signals where available.

## 7. Video / kids priority
Video is currently a major priority because children/youth naturally consume it heavily.

Implemented/active kids-video direction:
- `videos.html` is the existing family/kids video discovery page.
- `kids-videos.html` is a dedicated age/topic kids-video discovery prototype.
- Homepage now surfaces Kids Videos prominently with age 3–5, 6–8, 9–12 and Urdu entry points.
- Video architecture is intended to preserve `channel → playlist/series → individual video` levels.
- Channel-level quality must not imply every upload is suitable.
- Video cards should show age/language/source context and parent notes where available.

Kids content should prioritize short, clear, engaging and age-appropriate material while avoiding an endless-feed/autoplay model.

## 8. Current repository
Repository: `SyedMuhammadAliNaqviSyed/shia-resource-hub`

Key pages/files include:
- `index.html`
- `resources.html`
- `videos.html`
- `kids-videos.html`
- `needs.html`
- `parent-support.html`
- `parent-plan.html`
- `ulema-support.html`
- `ulema-plan-preview.html`
- `learner.html`
- `collections.html`
- `about.html`
- `js/app.js`
- `js/search.js`
- `js/video-section.js`
- `js/ulema-support.js`
- `js/learner.js`
- `js/plan-feedback.js`
- `js/recommendation-feedback.js`
- `css/style.css`
- `data/*.json`

## 9. Implemented
### Homepage
Search, quick tags, stats, categories, needs entry, parent support, ulema support, featured/recent resources, collections and suggestion link.

Homepage now also prominently surfaces Kids Videos by age and Urdu, with direct links to the video library.

### Parent support
Contextual fields around age, need, language, format and available time. Intended ranking emphasizes contextual fit.

### Ulema support
Age, need, format and optional task; shortlist; selected resources; plan fields including order/frequency/minutes/instruction; shareable learning-plan link; plan preview/review stage; parent and learner handoff direction.

### Learner
Dedicated learner page with clear steps, resource opening, small task, mark-complete interaction, progress and lightweight local storage. It can consume selected plan/resource IDs through the shareable flow.

### Feedback
Parent/plan feedback captures whether a step worked, needed help, was too much/long, or lost interest. Feedback now stores `resourceId` alongside the plan feedback.

### Recommendation feedback scoring
`js/recommendation-feedback.js` provides a base scoring utility. Current conceptual adjustments are:
- worked: +3
- needed help: +1
- too much: -2
- lost interest: -3

This is only a prototype signal, not a final statistical ranking model. It should eventually be combined with age/need/language/format/source-quality and enough sample size before materially changing rankings.

### Source quality
`data/source-quality-guide.json` defines transparent levels:
- Official source
- Recognized educational source
- Scholar-linked
- Community source
- Source not yet assessed

`data/quality.json` has source-level metadata for many existing resources. UI styling for source-quality badges is present in `css/style.css`.

Important distinction: `official` means first-party/provenance, not automatically scholarly verified. Do not label anything “scholarly verified” without evidence.

### Kids videos
A dedicated `kids-videos.html` prototype exists with age/topic filters, source-level badges, channel/series context, parent note and direct watch links. The existing `videos.html` remains the main family/kids video page and is linked prominently from the homepage.

## 10. Differentiation
Google/YouTube/social platforms already recommend content. The project's advantage must be domain/context specificity:
- age-aware suitability
- need-aware ranking
- Urdu/region relevance
- format/duration/time fit
- useful source-quality signals
- curated collections
- scholar/parent context
- actionable tasks
- shareable learning plans
- connection of scattered resources to people who need them

Product promise:
> **Recommend the right useful thing for the right person, and tell them what to do with it.**

## 11. Automation/intelligence roles
Conceptual roles that can later be automated/combined:
- Discovery agent
- Metadata agent
- Relevance/ranking agent
- Quality/source analysis
- Content-understanding agent
- Recommendation agent
- Learning-plan agent
- Ulema-support agent
- Parent-support agent
- Maintenance agent for dead/duplicate/stale resources

Do not claim “scholarly verified” without actual evidence.

## 12. Language/region
Urdu is a major target for Pakistan/India. Arabic/Persian-trained scholars may know resources unavailable in Urdu; Persian and English can be useful where appropriate, but learner language drives UX.

## 13. Child/youth UX
Avoid heavy dashboards, giant lists, boring lecture-library experiences and requiring constant parent supervision. Prefer visual/video-friendly discovery, tiny tasks, clear next actions, age-appropriate language, manageable choices and healthy habit formation.

## 14. Roadmap
### Phase 1 — Foundation
Directory, structured metadata, categories, search, collections, homepage.

### Phase 2 — Contextual discovery
Need-based discovery, age-aware ranking, language/format/time signals, better shortlists.

### Phase 3 — Parent support
Age/context flow, practical recommendations, small tasks, shareable recommendations and feedback.

### Phase 4 — Ulema/teacher support
Recommendation builder, resource selection, mini plans, review, shareable plans, parent/learner receiving flow.

### Phase 5 — Learner experience
Age-adaptive learner UI, small daily/weekly tasks, progress, habit formation, independent discovery skills.

### Phase 6 — Intelligence layer
Automated discovery, metadata extraction, semantic ranking, source-quality signals, duplicate/dead-link detection, personalization.

### Phase 7 — Network/ecosystem
Ulema network, madrasa/center collections, community sharing, regional/language expansion, connections between organizations and audiences.

### Phase 8 — Measurement
Ethical usage analytics, usefulness/completion signals, search gaps, demand by age/format/language, ranking improvement.

## 15. Explicit non-goals
Not another YouTube clone, not a generic social network, not a dump of every Islamic link, not a replacement for parents or ulema, not dependent on a huge manual review workforce, and not an attempt to solve all education at once.

## 16. Current next priorities
1. Finish connecting feedback into real contextual ranking rather than standalone score utilities.
2. Strengthen kids video/channel/playlist discovery and metadata.
3. Make Ulema final recommendation selection and share links robust.
4. Ensure parent receiving flow works cleanly.
5. Ensure learner flow consumes real plans reliably.
6. Improve structured resource metadata and transparent quality labels.
7. Build automated discovery/analysis pipeline later.
8. Verify/deploy a real live website URL; never guess deployment URLs.
9. Keep this document updated after major changes.

## 17. Continuation rules
1. Read this document first in a new chat.
2. Inspect current files before assuming implementation status.
3. Do not redo completed work unless fixing or explicitly redesigning it.
4. When user says “ok next”, continue the next logical roadmap implementation rather than restarting explanation.
5. Keep UX lightweight and practical.
6. Prefer automation/AI for discovery/organization while keeping scholarly judgment transparent.
7. Do not expose the founder's personal religious identity in public UX unless requested.
8. Challenge complexity that adds burden without clear benefit.
9. Never invent a live URL; verify deployment first.
10. Update this document after significant implementation.

## 18. Status
**Active prototype / iterative MVP.**

**Core direction:** Agreed.

**Core architectural idea:** contextual resource discovery + learning support connecting `resource → learner → parent → ulema/teacher`.

**Current focus:** Complete the recommendation/learning-plan loop and strengthen the high-demand kids/video resource layer before the full intelligence/network phase.
