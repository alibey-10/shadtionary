A distribution bar is a **single-strip proportional breakdown** — one horizontal bar normalized to 100% and partitioned into colored segments whose widths encode each category's share of the total.

The pattern is **compact part-to-whole composition**: use when a single row needs to show how a budget, capacity, or breakdown divides without spending card height on a pie or donut. Unlike a [Pie Chart](/content/pie-chart), segments align along one linear track so widths are easy to scan side by side. Unlike a [Bar List](/content/bar-list), every piece fits inline as slices of one shared whole.

## Also known as

- **Segmented bar** — highlights discrete colored slices inside a single horizontal bar
- **Stacked progress bar** — common when showing used, reserved, and free capacity
- **Proportional bar** — emphasizes width-to-share encoding
- **Breakdown bar** — dashboard name for inline category splits

## Component Anatomy

| Part | Role |
|------|------|
| **DistributionBar** (Root) | Track container holding the headline total and normalizing segment widths |
| **Track** | Full-width horizontal strip housing all proportional segments |
| **Segment** | Colored slice sized by its percentage share, with optional hover highlight |
| **Divider** | Crisp gap or border separating adjacent segments cleanly |
| **Tooltip** | Optional hover readout showing exact count and share for one segment |
| **Legend** | Inline swatch key listing category names, percentages, and raw totals |

## Common use cases

Use a distribution bar when users need to **read part-to-whole allocation in minimal vertical space**:

- **Storage and quota meters** — photos, backups, documents, and remaining free space
- **Team time allocation** — hours split across design, engineering, research, and operations
- **Poll or sentiment split** — positive, neutral, and negative responses in one strip
- **Test pass breakdown** — passed, skipped, and failed cases on a CI summary card
- **Budget consumption** — committed, spent, and unallocated funds on a compact header

Avoid a distribution bar when there are **more than five or six categories** (narrow slivers become invisible or crowded — collapse minor shares into "Other" or switch to a bar list), when categories **do not sum to a meaningful whole**, or when users must **compare subtle differences across categories** (aligned bars from a shared baseline are more accurate).

**Default** distribution bars place a thin gap between rounded segments for visual separation. **Continuous** strips pack segments flush to mimic a classic stacked bar. Pair a compact **Legend** below the track whenever more than two segments appear so readers never have to hover just to learn what each color represents.
