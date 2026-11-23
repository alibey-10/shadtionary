A waterfall chart is a **sequential bridge plot** — floating bars that step upward for additions and downward for subtractions from an opening total to a closing total.

The pattern is **running balance across steps**: use when readers need to see how individual positive and negative factors explain the gap between two totals. Unlike a standard bar chart, intermediate bars float from the prior cumulative value rather than starting at zero. Unlike a stacked bar, each contributor stands in its own column so direction and sequence stay legible.

## Also known as

- **Bridge chart** — finance term for walking from a starting figure to an ending figure
- **Cascade chart** — emphasizes the step-by-step rise and fall across categories
- **Flying bricks chart** — informal name from the appearance of floating delta segments

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — step sequence, cumulative math, and semantic color mapping |
| **Bar** | Rectangular column — anchored to zero for totals or floating between running subtotals for deltas |
| **Connector** | Thin horizontal guide linking the end height of one step to the start of the next |
| **Baseline** | Zero reference line anchoring opening, intermediate subtotal, and closing bars |
| **XAxis** | Ordered step labels from opening state through drivers to closing state |
| **YAxis** | Shared numeric scale spanning the full cumulative range |
| **Tooltip** | Step readout showing both the delta and the resulting running total |
| **Legend** | Semantic key distinguishing increases, decreases, and totals |

## Common use cases

Use a waterfall chart when users need to **explain how a starting total became an ending total**:

- **MRR and revenue bridges** — opening MRR plus new business and expansion minus churn to closing MRR
- **Profit and loss breakdowns** — gross revenue stepped down through COGS, payroll, and operating expenses to net income
- **Variance analysis** — budgeted cost adjusted by favorable and unfavorable drivers to actual spend
- **Headcount movement** — starting team size plus hires and transfers minus departures
- **Inventory or cash flow** — inflows and outflows over a fiscal period

Avoid a waterfall chart when **steps have no meaningful cumulative order** (use a bar chart), when there are **dozens of tiny contributors** (group smaller items into an "Other" bucket), or when **intermediate values cross zero repeatedly** in ways that obscure the scale. Do not omit connectors — without them, floating bars lose the visual chain of cause and effect.

**Default** waterfalls anchor the first and last bars to the **Baseline** in a neutral total color while encoding gains and losses in distinct hues. **Subtotal** waterfalls pin intermediate checkpoints back to zero mid-way through long bridges. Show delta labels directly above or inside each **Bar**, and surface the running total in the **Tooltip** so readers never have to add steps mentally.
