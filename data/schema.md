# Resource data schema

Every resource should use these fields where applicable:

- `id`: unique stable slug
- `name`: display name
- `type`: Website, App, Book, Tool, Course, Video, Download, Organization, Platform, Institution, etc.
- `categories`: controlled categories such as Books, Apps, Quran, Hadith, Duas, Learning, Research, Kids
- `languages`: languages actually supported by the resource
- `audience`: General, Students, Researchers, Kids, Parents, Teachers, Beginners, Communities
- `description`: short factual description
- `url`: canonical landing URL
- `featured`: boolean
- `tags`: search terms
- `addedAt`: ISO date when the resource was added to the Hub
- `updatedAt`: ISO date when the record was last reviewed/changed
- `verified`: only true after a maintainer has checked the resource
- `official`: only true when the URL is an official source for the named organization/service
- `free`: only true when the referenced resource is free to access/use

## Curation rules

1. Never mark a resource `verified`, `official`, or `free` without checking the specific URL.
2. Prefer canonical/official URLs over aggregators.
3. Keep descriptions factual and concise; do not make religious authority claims on behalf of a resource.
4. Use one stable ID per resource and avoid duplicates across data files.
5. When a resource changes substantially, update `updatedAt`.
6. A submission is not automatically trusted merely because it passes automated validation.
