# Shia Resource Hub — QA Checklist

Use this checklist for the current static HTML/CSS/JS build. It is intentionally small and focused on the Phase A search/need flows.

## Source-level verification

- [x] `needs.html` loads without external application dependencies.
- [x] Need cards link to `resources.html?search=...`.
- [x] Need links cover child learning, Quran, practice, youth, history, references, video/audio, books, and apps/tools.
- [x] Resource search accepts both `search` and `q` URL parameters.
- [x] `js/search.js` loads the five configured resource datasets.
- [x] Duplicate resource IDs are removed at runtime.
- [x] Quality data is merged by resource ID.
- [x] Search covers name, description, type, categories, languages, tags, audience, purpose, needs, goals and age range.
- [x] Category, language, format, quality and age filters are supported.
- [x] Relevance/context scoring uses query plus age/language/format/time signals.
- [x] Resource cards expose Details and safe external Visit links when available.
- [x] Parent-support context is rendered when structured context is present.

## Manual browser smoke tests

Final browser smoke tests were executed on the deployed GitHub Pages site on 12 Aug 2026.

- [x] Need Discovery: Quran, child learning, Ahlulbayt/history and format-related need links open populated resource searches.
- [x] Search: Quran, Urdu and Kids searches update results; clear search works.
- [x] Filters: age, language, format, quality and reset controls work.
- [x] Parent Support: age + goal + language + format + time context is preserved and starting recommendations appear.
- [x] Homepage: core search, category, Needs, Parent, Ulema, Kids and Collections routes work.
- [x] Kids Videos: age, language, Shia channels, playlists/series and Urdu Kids section work.
- [x] Normal resource search does not show the Parent Support results banner.
- [x] Ulema shared learning plan preserves selected resource(s), age, goal and task when opened.
- [x] Resource Details opens the correct `resource.html?id=...` page.
- [x] Resource Visit opens the valid external HTTPS destination.

### Remaining QA limitations

- Automated tests are not available in this plain static project and were not claimed as executed.
- The final smoke-test report marked all three remaining direct checks as PASS. Core Phase A browser QA can therefore be considered complete.

## Phase A disposition

**Phase A browser QA complete.** No critical broken routes were found in the final smoke test. Continue with the roadmap rather than adding more QA-only work unless a regression appears.
