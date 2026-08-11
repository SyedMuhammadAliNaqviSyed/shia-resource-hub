# Shia Resource Hub

A curated directory for discovering Shia educational, scholarly, digital, cultural, and community resources.

## Vision

Good resources already exist across the internet, but they are often difficult to discover, compare, and navigate. This project aims to make that discovery process simpler and more organized.

## Current features

- Responsive homepage with accessible search and navigation
- Searchable resource directory
- Dynamic category, language, format, and quality filters
- Search relevance scoring plus name, newest, verified, and free sorting
- Shareable URL-based filters and searches
- Resource detail pages
- Resource metadata: type, languages, categories, audience, tags, dates, and trust metadata
- Featured and recently added resources
- Curated collections and Start Here paths
- Graceful handling of missing resource datasets
- Community-first mission page
- Static hosting friendly architecture

## Resource data

The directory combines multiple curated JSON datasets under `data/`, including the core resource collection, research resources, Urdu/South Asia resources, and expansion batches. Resource metadata follows the field guide in `data/resource-fields.md` and the verification process in `data/resource-quality-checklist.md`.

Trust flags such as `verified`, `official`, and `free` are editorial metadata and should only be used after the applicable checks have been completed.

## Adding resources

New resources should follow the schema and curation rules documented in `data/schema.md`. Use stable IDs, canonical URLs, factual descriptions, useful categories/tags, and accurate language/audience metadata. Avoid duplicates and do not mark a resource as verified or official without checking the destination.

## Accessibility

The interface includes accessible labels for search and navigation controls, responsive mobile navigation, live regions for dynamically loaded content, and state information for interactive filters and menus. Accessibility should continue to be checked as new features are added.

## Development and QA

The project is plain HTML, CSS and JavaScript and requires no backend for the current version. Before publishing changes, check the affected page at desktop and mobile widths, verify that filters/search URLs behave correctly, and avoid assigning trust metadata without checking the specific destination.

## Tech

Plain HTML, CSS and JavaScript. No backend is required for the current version, making it suitable for GitHub Pages.

## Project status

Early public prototype. Resource quality, categorization, accessibility, multilingual support, and community contribution workflows will continue to improve.
