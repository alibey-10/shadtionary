A navigation bar is a **primary link strip** — usually a `<nav>` landmark — that lists top-level destinations so users can move between sections of a site or app. It often sits inside the **site header** beside brand and utility actions, but it is the navigational group itself, not the whole header band.

The pattern is **global wayfinding**: use when users need a stable set of peer routes without hunting through the page body. Unlike a site header, the navbar is only the destinations — not brand, search, or account chrome. Unlike a navigation menu, it is the top-level list itself; flyout panels are optional children of a NavItem, not the bar. Unlike breadcrumbs, it points across the product, not along the trail to the current page.

## Also known as

- **Navbar** — the common short name for the top-level nav link strip

## Component Anatomy

| Part | Role |
|------|------|
| **Navbar** (Root) | The `<nav>` landmark — primary destinations in shared chrome |
| **NavList** | Row or group that lays out the top-level items |
| **NavItem** | One destination — plain link or menu trigger |
| **MobileTrigger** | Compact control that opens a sheet or drawer when the list collapses |

## Common use cases

Use a navigation bar when the product needs **always-available top-level routes**:

- **Marketing sites** — Product, Pricing, Docs as a horizontal link row in the header
- **SaaS app shells** — Main workspace sections next to brand and account controls
- **Docs and content hubs** — Section links (Guides, API, Examples) in the top chrome
- **E-commerce storefronts** — Category destinations beside the logo and cart
- **Dashboards** — Global app sections above the page canvas

Avoid a navigation bar when navigation is **local to one view** (use tabs or a sidebar), when the trail is a **path to the current page** (use breadcrumbs), or when destinations are **only hierarchical flyouts** with no clear top-level links — that calls for a navigation menu, not a denser link strip. Do not overload the list with every site page; keep primary items few and scannable.

**Link-only** bars are a simple row of destinations. **Trigger + panel** items open a navigation menu or mega panel from a NavItem. On small viewports, collapse the **NavList** behind a **MobileTrigger** into a sheet or drawer rather than wrapping a dense row. Brand and actions usually live in the surrounding site header — keep them outside the `<nav>` so the landmark stays about destinations.
