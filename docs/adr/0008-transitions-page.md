# ADR-0008: Transitions page for web transitions

## Status

Accepted — 2026-11-18

## Context

The Styles page (ADR-0007) names the *look* of animated output. Readers also need names for how a page or view hands off to the next one. The Motion Vocabulary artifact had a Transitions section, but it was written for video editing: whip pans, dips to black and glitches rarely appear in web UI, and the web's most common patterns (shared element, slide over, fade through, staggered entrances) were missing.

## Decision

Add a **Transitions** page at **`/transitions`**, limited to transitions used on the web:

- **Content:** 26 **Transition cards** in 5 categories: Fades (crossfade, fade through, blur fade, fade up), Slides (push, slide over, uncover, shared axis, sheet), Scale & 3D (zoom, pop, origin-aware scale, flip, cube), Reveals (circle reveal, wipe, soft wipe, curtain, column wipe, split, tile reveal, shape reveal) and Choreography (shared element, stagger, expand, reorder). Each card adds a "Built with" line naming the CSS or API behind it (e.g. View Transitions API, `clip-path`, Motion `layoutId`).
- **Data:** `src/contstants/transitions.json` holds `categories` and `transitions` (`slug`, `category`, `name`, `aka`, `desc`, `how`, `prompt`), in display order.
- **Previews:** `TransitionStage` renders two abstract views (A: a list, B: a detail page) in **Abstract chrome**. CSS in `transition-preview.css` animates them per `t-{slug}`; a few slugs render extra layers (column panels, a tile grid, a split copy of A); animations alternate, so each loop shows forward then back navigation. Previews use theme tokens, so unlike Style previews they follow light and dark mode.
- **Shared layout:** `MotionGallery` (`src/components/motion-gallery.tsx`) now renders both the Styles and Transitions pages: intro, sticky speed and pause bar, bordered category rows and cards. The pause rule lives in `styles.css` under `.motion-gallery`.
- **Navigation:** a "Transitions" link in the site header after "Styles". The GitHub and X header icons are hidden below `sm` to make room; both remain in the footer.

## Consequences

- New glossary terms: **Transition**, **Transition preview**.
- Adding a transition needs a `transitions.json` row plus `.t-{slug}` rules in `transition-preview.css`.
- The video-only transitions from the artifact (hard cut, dip to black, flash, whip pan, spin, glitch, match cut, clock wipe, venetian blinds) are intentionally left out.
