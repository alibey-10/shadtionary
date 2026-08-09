A masonry layout is a **dense column pack** of items with unequal heights. New items drop into the shortest column so gaps close — the silhouette looks like a brick or stone wall rather than a strict grid of aligned rows.

The pattern is **gap-filling packing**: use when a collection has naturally varied heights (images, cards, notes) and you want maximum density without empty row cells. Unlike a bento grid, spans are not designed for hierarchy; height drives placement. Unlike a uniform card grid, rows do not stay level.

## Also known as

- **Waterfall layout** — content flows down columns like a waterfall, packing into the next open space
- **Pinterest grid** — colloquial name from the image-feed pattern popularized by Pinterest
- **Brick layout** — items pack like bricks in a wall, filling gaps instead of aligning to rows

## Component Anatomy

| Part | Role |
|------|------|
| **Masonry** (Root) | Packing container — column count, gap, and overall bounds |
| **Column** | Vertical lane items stack into; often chosen by shortest running height |
| **Item** | Individual brick/tile — height varies with media and content |
| **ItemMedia** | Optional image or media that usually sets the item's height |
| **ItemContent** | Body below or over media — title chrome, meta, or actions |
| **Gap** | Spacing between columns and stacked items |

## Common use cases

Use a masonry layout when the user needs to **browse a large set of mixed-height items** without wasting vertical space:

- **Image and media galleries** — photos, mood boards, and inspiration feeds (the classic Pinterest pattern)
- **Mixed content cards** — articles, products, or pins with thumbnails of different aspect ratios
- **Note or clip collections** — sticky-note boards and scrapbook-style archives
- **Portfolio mosaics** — work samples where equal card heights would crop or pad awkwardly
- **Infinite or paginated feeds** — long streams that keep packing as more items load

Avoid a masonry layout when items are **equal peers that must align for comparison** (use a uniform grid), when reading order must be **strict left-to-right then top-to-bottom in rows** (packing can confuse scan order), or when you need **intentional size hierarchy** (use a bento). Do not use it for tabular data or forms — density is not the goal there.

**CSS Grid Lanes / masonry** (native) packs in the browser when supported; **JS libraries** (Masonry.js, Masonic, and similar) remain common fallbacks. **Column-count** CSS can fake a waterfall but changes reading order (top-to-bottom per column). Prefer a consistent gap, shared card chrome, and stable keys when items load or reorder so the pack does not jump under the user's eyes.
