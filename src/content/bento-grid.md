A bento grid is an **asymmetric tile layout** of unequal cells — larger tiles for primary content, smaller ones for supporting pieces. The name comes from the **Japanese bento box**: a lunch tray with compartments of different sizes that form one balanced meal.

The pattern is **compositional hierarchy**: use when a section should feel like one designed composition, not a uniform card deck. Spans are intentional (unlike masonry), and cell size encodes importance (unlike a flat product grid).

## Also known as

- **Bento box** — modular compartments of unequal size arranged as one balanced composition

## Component Anatomy

| Part | Role |
|------|------|
| **BentoGrid** (Root) | CSS Grid container — column/row tracks, gap, and overall composition bounds |
| **BentoCell** | Individual tile — may span multiple columns and/or rows to signal priority |
| **CellMedia** | Optional image, illustration, chart, or decorative fill inside a cell |
| **CellHeader** | Title or label block at the top of a cell |
| **CellContent** | Body — metrics, short copy, icons, or supporting UI within a cell |
| **CellFooter** | Optional bottom row — CTA, metadata, or secondary action |

## Common use cases

Use a bento grid when the user needs to **scan mixed content with clear visual priority** in one section:

- **Product and feature showcases** — hero feature in a large cell, supporting specs in smaller tiles (Apple-style marketing)
- **Dashboard overviews** — KPI tiles, charts, and status cards at different weights
- **Portfolio or case-study highlights** — project media and blurbs in an editorial mosaic
- **Landing page sections** — mix of illustration, quote, metric, and CTA without a flat equal grid
- **App home hubs** — shortcuts and widgets sized by frequency or importance

Avoid a bento grid when items are **equal peers that must compare fairly** (use a uniform card grid), when content is **tabular or sequential** (use a table or list), or when the set is **long and unbounded** (use pagination or a feed — bentos work best under roughly nine cells). Do not randomize spans; if every cell looks equally loud, the hierarchy is broken.

**Marketing** bentos favor a large hero cell plus two or three support tiles and a wide closer. **Dashboard** bentos tighten gaps and lean on metrics and charts. **Responsive** layouts usually collapse multi-span cells into a single column on small viewports — preserve reading order in the DOM so stack order still makes sense. Keep shared radius, gap, and surface treatment so the grid reads as one composition, not a pile of unrelated cards.
