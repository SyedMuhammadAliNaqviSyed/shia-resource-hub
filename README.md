# Shia Resource Hub

A curated directory for discovering Shia educational, scholarly, digital, cultural, family, youth, and community resources.

## Vision

Good resources already exist across the internet, but they are often difficult to discover, compare, and navigate. This project aims to make that discovery process simpler and more organized.

## Current features

- Responsive homepage with accessible search and navigation
- Searchable resource directory with contextual relevance scoring
- Dynamic category, language, format, quality, age, time, and sorting controls
- Shareable URL-based searches, filters, parent-support context, and learning plans
- Resource detail pages with metadata, trust badges, and external Visit links
- Featured resources, recent resources, curated collections, and Learning Paths
- Need-based discovery for common goals such as Quran learning, children/family learning, books, video, and audio
- Parent Support flow for age, goal, language, format, and time-based discovery
- Ulema Support flow for building and sharing resource-based learning plans
- Youth Engagement MVP with age/topic missions and lightweight completion feedback
- Kids Videos directory with age, language, topic, channel, and playlist/series discovery
- Curated Urdu Kids — Start Here collection for Urdu-speaking families
- Natural-language discovery that extracts structured age, language, format, and time signals where supported
- Audio intent/relevance support without inventing an `Audio` format when the catalog taxonomy does not contain that type
- Lightweight recommendation feedback with conservative observation gating so feedback does not override contextual relevance
- Graceful handling of missing resource datasets
- Static hosting friendly architecture for GitHub Pages

## Resource data

The directory combines multiple curated JSON datasets under `data/`, including the core resource collection, research resources, Urdu/South Asia resources, and expansion batches. Resource metadata follows the field guide in `data/resource-fields.md` and the verification process in `data/resource-quality-checklist.md`.

Trust flags such as `verified`, `official`, and `free` are editorial metadata and should only be used after the applicable checks have been completed.

## Adding resources

New resources should follow the schema and curation rules documented in `data/schema.md`. Use stable IDs, canonical URLs, factual descriptions, useful categories/tags, and accurate language/audience metadata. Avoid duplicates and do not mark a resource as verified or official without checking the destination.

## Accessibility

The interface includes accessible labels for search and navigation controls, responsive mobile navigation, live regions for dynamically loaded content, and state information for interactive filters and menus. Accessibility should continue to be checked as new features are added.

## Development and QA

The project is plain HTML, CSS and JavaScript and requires no backend for the current version. Before publishing changes, check the affected page at desktop and mobile widths, verify that filters/search URLs behave correctly, and avoid assigning trust metadata without checking the specific destination.

Manual browser smoke tests have been used for the major discovery flows, including Need Discovery, Parent Support, Ulema Support, Youth, Learning Paths, Kids Videos, Urdu Kids, resource details/Visit, natural-language structured parsing, and recommendation-feedback safety.

## Tech

Plain HTML, CSS and JavaScript. No backend is required for the current version, making it suitable for GitHub Pages.

## Project status

Early public prototype. Core discovery flows are implemented and smoke-tested; resource quality, categorization, accessibility, multilingual support, and community contribution workflows will continue to improve.
