A marquee is an **endlessly looping strip** of repeated content — logos, testimonials, chips, or media — that scrolls through a clipped viewport. Items leave one edge and reappear at the other so the set feels continuous without a start or end.

The pattern is **ambient continuity**: use when a long peer set should stay visible in a short band without pagination, dots, or swipe controls. Unlike a carousel, users do not step through slides; the track moves on its own (often with pause-on-hover). Unlike a static logo row, overflow is intentional and the loop never settles.

## Also known as

- **Ticker** — continuously scrolling strip, as in news or stock tickers

## Component Anatomy

| Part | Role |
|------|------|
| **Marquee** (Root) | Overflow-hidden viewport — direction, speed, gap, and pause behavior |
| **Track** | Animated strip that holds items; usually duplicated so the loop is seamless |
| **Item** | One unit in the strip — logo, card, quote, or chip |
| **Gap** | Spacing between items along the scroll axis |
| **Fade** | Optional edge mask — softens the clip so content eases in and out |

## Common use cases

Use a marquee when the user should **absorb a peer set at a glance** without stopping to navigate:

- **Logo and partner rows** — trusted brands, integrations, and sponsor strips on marketing pages
- **Testimonial shelves** — short quotes that keep moving so the section stays compact
- **Announcement or news tickers** — lightweight headlines or status chips across a header band
- **Tech or tag clouds** — skills, stack badges, or category chips in a continuous ribbon
- **Social proof media** — avatar rows, press mentions, or product screenshots on a loop

Avoid a marquee when items carry **critical information** users must read in full (motion and clipping fight comprehension), when the set is **very small** (a static row is clearer), or when users need to **compare or choose** specific items (use a grid, list, or carousel with controls). Prefer **pause on hover/focus**, respect `prefers-reduced-motion`, and keep speed slow enough to scan.

**Horizontal** marquees suit logo bars and quote shelves; **vertical** ones suit tall side panels or stacked cards. **Reverse** and multi-row layouts (opposite directions) add visual energy without changing the pattern. Edge **fades** are cosmetic — they do not replace accessible alternatives for essential content.
