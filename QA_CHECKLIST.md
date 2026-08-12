# Shia Resource Hub — QA Checklist

Use this checklist for the current static HTML/CSS/JS build. It is intentionally small and focused on the Phase A search/need flows.

## Need-based discovery

- [x] `needs.html` loads without external application dependencies.
- [x] Need cards link to `resources.html?search=...`.
- [x] Need links cover child learning, Quran, practice, youth, history, references, video/audio, books, and apps/tools.
- [x] Resource search accepts both `search` and `q` URL parameters.

## Resource search

- [x] `js/search.js` loads the five configured resource datasets.
- [x] Duplicate resource IDs are removed at runtime.
- [x] Quality data is merged by resource ID.
- [x] Search covers name, description, type, categories, languages, tags, audience, purpose, needs, goals and age range.
- [x] Category, language, format, quality and age filters are supported.
- [x] Relevance/context scoring uses query plus age/language/format/time signals.
- [x] Resource cards expose Details and safe external Visit links when available.
- [x] Parent-support context is rendered when structured context is present.

## Manual browser smoke tests

1. Open `needs.html` and click **Learn the Quran** → resources page opens with a populated search state.
2. Open `needs.html` and click **Help a child learn** → resources page opens with child-related results.
3. On `resources.html`, enter `Quran` → result count/cards update.
4. Change the age filter → only resources whose normalized `ageRange` includes that age remain.
5. Change language/format/quality filters → results update without a full page reload.
6. Open a resource **Details** link → `resource.html?id=...` opens.
7. Open a resource **Visit** link → only `http:`/`https:` URLs are allowed.
8. Open Parent Support, select age + goal + language/format/time, then open starting resources → structured context is preserved in the URL and used for ranking/context.

## Phase A disposition

Core route/search/need implementation has been inspected at source level. The checklist above is the visible/manual smoke-test specification for browser verification. A formal automated test runner is not present in this plain static project, so automated test execution is not claimed.
