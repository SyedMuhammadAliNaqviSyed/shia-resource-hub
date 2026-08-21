# Shia Resource Hub

A curated directory for discovering Shia educational, scholarly, digital, cultural, family, youth, and community resources.

**Live site:** https://syedmuhammadalinaqvisyed.github.io/shia-resource-hub/

## Vision

Good resources already exist across the internet, but they are often difficult to discover, compare, and navigate. This project aims to make that discovery process simpler and more organized.

## Product principle

**Need → relevant resources → practical next step → learning path**

Prefer a smaller set of high-value, well-described resources over a large uncurated link dump.

## Current features

- Responsive homepage with search and navigation
- Searchable resource directory with relevance scoring and filters
- Shareable URL-based searches and filters
- Resource detail pages with metadata and Visit links
- Featured / recent resources and curated collections
- Need-based discovery, Parent Support, Ulema Support, Youth, Learning Paths
- Kids Videos directory with age and language filters
- Urdu & South Asia focused resources and starter path
- Natural-language style search signals where supported
- Quality badges (`verified`, `official`, `free`) as editorial metadata
- Static hosting on GitHub Pages (plain HTML/CSS/JS)

## Resource data

Runtime datasets load in this order:

1. `data/resources.json`
2. `data/additional-resources.json`
3. `data/research-resources.json`
4. `data/urdu-south-asia-resources.json`
5. `data/expansion-batch-01.json`
6. `data/expansion-batch-02.json`
7. `data/expansion-batch-03.json`
8. `data/quality.json` (overlay)

Schema and curation rules: `data/schema.md`, `data/resource-quality-checklist.md`.

## Adding resources

Use stable IDs, canonical URLs, factual descriptions, and accurate language/audience metadata. Do not mark `verified` or `official` without checking the destination. Prefer small documented batches.

Suggest via GitHub issue template, or edit JSON carefully and open a PR.

## Status

**v1 public directory** — core discovery flows and curated resource sets are in place. Further growth should stay quality-first and feedback-driven.

See `PROJECT_STATUS.md` and the latest `data/resource-audit-*.md` for continuation notes.
