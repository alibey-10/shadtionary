A site header is a **persistent top band** — usually a `<header>` with an implicit banner landmark — that carries brand identity, primary destinations, and site-wide utilities so users can orient and move without hunting through the page body.

The pattern is **global chrome**: use when every view needs the same home base for wayfinding and account-level actions. Unlike a navigation bar, the header is the whole strip — brand and utilities included — not only the destination links. Unlike a page or section header, it is site-wide and not the title of the content below. Unlike a top app bar, it is not scoped to one screen’s title and local actions.

## Also known as

- **Global header** — design-system name for the same site-wide top chrome

## Component Anatomy

| Part | Role |
|------|------|
| **Header** (Root) | The `<header>` banner landmark — persistent site-wide top chrome |
| **Brand** | Logo and/or site name — usually links home |
| **Navbar** | Primary destinations — typically a nested Navigation Bar |
| **Actions** | Utility cluster — search, theme, account, cart, or primary CTA |
| **MobileTrigger** | Compact control that opens a sheet or drawer when nav collapses |

## Common use cases

Use a site header when the product needs a **stable home base** across pages:

- **Marketing sites** — Logo, Product / Pricing / Docs, and a Get started CTA
- **SaaS app shells** — Brand, workspace sections, search, and account menu
- **Docs hubs** — Logo, section links, search, and theme or version switcher
- **E-commerce storefronts** — Brand, categories, search, and cart
- **Content platforms** — Brand, primary sections, and signed-in utilities

Avoid a site header when chrome is **only the current view’s title and actions** (use a top app bar), when navigation is **local to one page** (use tabs or in-page anchors), or when the strip would **duplicate a dense sidebar** without adding brand or utilities. Do not nest another banner `<header>` for the same global band — one site-wide landmark is enough.

**Static** headers scroll with the page. **Sticky** or **fixed** headers stay available on long scrolls — keep height modest so content is not crowded. On small viewports, collapse the **Navbar** behind a **MobileTrigger** into a sheet or drawer; keep **Brand** and critical **Actions** visible. Prefer a real `<header>` (and nested `<nav>` for destinations) over a generic `div` so assistive tech can jump to the banner landmark.
