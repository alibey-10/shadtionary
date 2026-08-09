An avatar group is a **cluster of overlapping user images** that shows several people in a compact row — team members, chat participants, or collaborators — without listing every name inline.

The pattern is **stacked identity**: use when space is tight but the user needs to see who is involved at a glance. Each avatar is a circle (or rounded square) with negative overlap so more faces fit in one line. Unlike a single avatar, a group signals multiplicity — a team, audience, or shared resource. Unlike a user list, it stays visual and scannable until the user expands or navigates for full detail.

## Also known as

- **Avatar stack** — overlapping avatars in a horizontal or vertical pile

## Component Anatomy

| Part | Role |
|------|------|
| **AvatarGroup** (Root) | Container that lays out avatars with overlapping spacing and shared size context |
| **Avatar** | Individual avatar wrapper — repeated for each person in the group |
| **AvatarImage** | Profile photo when available |
| **AvatarFallback** | Initials or icon when the image is missing or fails to load |
| **AvatarGroupCount** | Overflow indicator — typically `+N` for avatars hidden beyond a `max` limit |

## Common use cases

Use an avatar group when the user needs a **quick visual headcount** without opening a full roster:

- **Team and project cards** — show core members on a workspace or repo summary
- **Group chat headers** — indicate active participants beside the conversation title
- **Collaboration surfaces** — editors, commenters, or viewers on a shared document
- **Social proof** — faces beside “liked by” or “joined by” summaries
- **Assignee clusters** — multiple owners on a task or ticket row

Avoid an avatar group when **every person must be named** in the layout — use a vertical user list or table. Do not show **dozens of avatars** without a count cap; truncate with `AvatarGroupCount` and link to the full list. For a **single user**, one avatar is enough. If avatars are **clickable actions** (add member, open profile menu), ensure each target has adequate hit area and does not rely on hover alone on touch devices.

**Default** groups show three to five avatars with a `+N` overflow badge. **Small** groups use tighter overlap and `sm` avatars for dense tables. **Interactive** groups lift or tooltip each avatar on hover to reveal names. **Vertical** stacks rotate the overlap for sidebar or timeline layouts. Keep overlap consistent so rings or borders do not clip awkwardly — a shared background ring (`ring-background`) is common for separation.
