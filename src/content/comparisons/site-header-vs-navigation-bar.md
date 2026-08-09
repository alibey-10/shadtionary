**Site header** and **navigation bar** often get named as if they were the same strip. They nest: the header is the **whole top band** (brand, destinations, utilities), while the navbar is only the **destination links** inside it. Picking language wrong usually shows up as a `<header>` that is nothing but links, or a `<nav>` stuffed with logo, search, and account chrome.

## Key differences

| | **Site Header** | **Navigation Bar** |
|---|-----------|----------|
| **What it is** | Full persistent top chrome | Primary destination link strip |
| **Landmark** | `<header>` banner | `<nav>` |
| **Usually includes** | Brand, navbar, utility actions | Top-level routes only |
| **Typical home** | Site-wide page chrome | Nested inside the site header |
| **Also called** | Global header, masthead, top bar | Navbar, top nav, header nav |

## Common use cases for Site Header

A **stable home base** across pages when brand and utilities belong with wayfinding:

- **Marketing sites** — Logo, Product / Pricing / Docs, and a Get started CTA
- **SaaS app shells** — Brand, workspace sections, search, and account menu
- **Docs hubs** — Logo, section links, search, and theme or version switcher
- **E-commerce storefronts** — Brand, categories, search, and cart

## Common use cases for Navigation Bar

A **destination list** when you need peer routes without owning the surrounding chrome:

- **Header nav rows** — Product, Pricing, Docs beside the logo and CTA
- **App section links** — Main workspace destinations next to brand and account controls
- **Docs section strips** — Guides, API, Examples in the top chrome
- **Store category links** — Catalog destinations beside logo and cart
