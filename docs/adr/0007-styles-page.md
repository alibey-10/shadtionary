# ADR-0007: Styles page for visual animation styles

## Status

Accepted — 2026-11-18

## Context

Shadtionary names UI elements so people can steer AI agents precisely. The same vocabulary problem exists for the *look* of animated and video output: people know what they want to see (frosted glass, 8-bit, risograph) but not what it is called. A "Motion Vocabulary" reference already existed as a standalone artifact; its Styles section is the part that fits this site.

## Decision

Add a **Styles** page at **`/styles`**:

- **Content:** 38 **Style cards** in 6 categories (Flat & graphic, Depth & 3D, Light, color & texture, Lines & drawing, Retro & digital, Type, UI & data). Each card has a looping **Style preview**, name, "Also called" names, a short description and a copyable **Style prompt**.
- **Data:** `src/contstants/styles.json` holds `categories` (`id`, `name`, `note`) and `styles` (`slug`, `category`, `base` loop seconds, optional `cls`, `name`, `aka`, `desc`, `prompt`, `html`). The `styles` array is in display order.
- **Previews:** static authored markup (`html`) rendered by `StyleStage` (`src/components/style-preview/style-stage.tsx`), animated by `style-preview.css`. All selectors are scoped to `.sty` and all keyframes use an `ms-` prefix so nothing leaks into the site. `dither` and `led` draw to a canvas, and only while on screen.
- **Controls:** a sticky bar with playback speed (0.5×, 1×, 2×) and Pause/Play all. Previews start paused when the viewer prefers reduced motion.
- **Navigation:** a "Styles" link in the site header next to "Comparisons".
- **No detail pages:** styles are not Entries and have no markdown body.

## Consequences

- New glossary terms: **Style**, **Style card**, **Style preview**, **Style prompt**.
- Preview colors are fixed in light and dark themes on purpose: they depict rendered footage, not site chrome.
- The stylesheet (~40 kB, ~10 kB gzipped) loads only on `/styles`, through the route's `head.links`.
- Adding a style needs a `styles.json` row plus its `.sty.s-{slug}` rules in `style-preview.css`.
