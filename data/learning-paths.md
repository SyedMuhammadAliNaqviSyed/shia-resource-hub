# Learning Paths

This file defines the first-class learning-path model for Shia Resource Hub.

A learning path is a small, purposeful sequence of existing resources. It is not a new content library and does not require duplicating resources.

## Path fields

- `id` — stable identifier
- `title` — human-readable path name
- `goal` — what the learner should understand or be able to do
- `audience` — parent, child, youth, teacher, general, etc.
- `age_range` — one of the project age bands where applicable: 3–5, 6–8, 9–12, 13–17, 18+
- `level` — beginner, elementary, intermediate, advanced
- `estimated_time` — approximate total time
- `steps` — ordered references to existing resource IDs
- `optional_steps` — useful alternatives that should not be required
- `engagement` — watch, listen, read, practice, discuss, reflect, quiz, activity
- `language` — primary language(s)
- `status` — draft, active, archived

## Design rules

1. Prefer a short path over a large collection.
2. Reuse existing resources rather than copying content.
3. Mix formats when that improves learning.
4. Every required step should have a clear purpose.
5. Optional deeper material should remain optional.
6. Age and difficulty should be explicit where known.
7. Paths must remain useful even if one optional resource becomes unavailable.
8. Religious framing must follow the project's established editorial policy; this data model does not treat AI as a religious authority.

## Example shape

```json
{
  "id": "example-topic-beginner-13-17",
  "title": "Example Topic — Beginner",
  "goal": "Build a basic understanding of the topic",
  "audience": ["youth"],
  "age_range": "13–17",
  "level": "beginner",
  "estimated_time": "30–45 minutes",
  "steps": ["resource-id-1", "resource-id-2"],
  "optional_steps": ["resource-id-3"],
  "engagement": ["watch", "reflect", "read"],
  "language": ["Urdu"],
  "status": "draft"
}
```
