# Resource field guide

## Required for new resources
- `id` — unique stable slug
- `name` — human-readable title
- `type` — one clear resource type
- `description` — factual 1–2 sentence summary
- `url` — canonical HTTPS URL

## Recommended
- `categories`
- `languages`
- `audience`
- `tags`
- `addedAt`
- `updatedAt`

## Trust metadata
Keep trust metadata in `data/quality.json` so editorial status is separate from descriptive content.

- `verified: true` means a maintainer has checked the specific resource.
- `official: true` means the URL is an official source for the named organization/service.
- `free: true` means the referenced resource is free to access/use.

Never infer these flags from a name, search result, or community submission alone.
