# Shia Resource Hub

A curated directory for discovering Shia educational, scholarly, digital, cultural, and community resources.

## Vision

Good resources already exist across the internet, but they are often difficult to discover, compare, and navigate. This project aims to make that discovery process simpler and more organized.

## Current features

- Responsive homepage
- Searchable resource directory
- Dynamic category, language, format, and quality filters
- Name, newest, verified, free, and featured sorting
- Resource detail pages
- Resource metadata: type, languages, categories, audience, tags, dates, and trust metadata
- Featured resources
- Start Here paths for new visitors
- Community-first mission page
- Static hosting friendly architecture

## Resource data

The directory combines multiple curated JSON datasets under `data/`, including the core resource collection, research resources, Urdu/South Asia resources, and expansion batches. Resource metadata follows the field guide in `data/resource-fields.md` and the verification process in `data/resource-quality-checklist.md`.

Trust flags such as `verified`, `official`, and `free` are editorial metadata and should only be used after the applicable checks have been completed.

## Adding resources

New resources should follow the schema and curation rules documented in `data/schema.md`. Use stable IDs, canonical URLs, factual descriptions, useful categories/tags, and accurate language/audience metadata. Avoid duplicates and do not mark a resource as verified or official without checking the destination.

## Tech

Plain HTML, CSS and JavaScript. No backend is required for the current version, making it suitable for GitHub Pages.

## Project status

Early public prototype. Resource quality, categorization, accessibility, multilingual support, and community contribution workflows will continue to improve.
