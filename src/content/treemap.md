A treemap is a **space-filling hierarchical plot** — nested rectangles sized proportionally to value, packing branches and leaves tightly inside one fixed frame so part-to-whole structure and relative weight read together.

The pattern is **nested composition by area**: use when you have dozens of items organized in a hierarchy and want the biggest drivers to dominate visually. Unlike a [Pie Chart](/content/pie-chart), a treemap scales cleanly to many leaves and multi-level groups without tiny unreadable wedges. Unlike a [Bar List](/content/bar-list), every rectangle fits inside one rectangular footprint without scrolling.

## Also known as

- **Treemap chart** — standard component name in charting libraries
- **Squarified treemap** — layout algorithm that keeps tiles close to squares rather than thin slivers
- **Hierarchical tile chart** — emphasizes grouped parent containers and leaf tiles

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Layout container — hierarchy tree, tiling algorithm (usually squarified), and color rules |
| **Group** | Parent container tile framing a category branch and its child items |
| **Node** (Leaf) | Rectangular tile whose area encodes the item's numeric share |
| **TileLabel** | Category name and formatted figure fitted inside tiles large enough to hold text |
| **Breadcrumb** | Optional navigation bar for drilling into a parent group and stepping back out |
| **Tooltip** | Hover readout revealing full hierarchy path, exact value, and share of total |

## Common use cases

Use a treemap when users need to **spot the biggest shares inside a multi-level total**:

- **Cloud infrastructure spend** — breaking an AWS or GCP bill into compute, storage, and database services
- **Disk and bundle analysis** — showing which dependencies or folders consume the most bytes
- **Portfolio or market cap** — grouping stocks by sector and market size in one snapshot
- **Expense and budget breakdowns** — departments containing teams and cost centers
- **Catalog revenue share** — product lines subdivided into top SKUs

Avoid a treemap when **exact ranking between similar values** is critical (humans judge area less accurately than bar length — use a bar chart), when **negative or zero values** exist (rectangles cannot encode negative area), or when **deep hierarchies** create unreadable pixel-wide leaves. Do not force labels onto tiny rectangles; truncate cleanly or rely on the tooltip.

**Default** treemaps use a squarified layout with crisp gaps between groups so parent boundaries stay clear. **Zoomable** treemaps pair clicking a **Group** with a **Breadcrumb** trail so users can inspect dense lower levels without cluttering the top view. Assign distinct hues per top-level branch and shade child leaves inside each family.
