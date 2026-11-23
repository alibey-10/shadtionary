A dot plot is a **position-based comparison plot** — discrete markers placed along a shared numeric axis per category, encoding value by position rather than filled bar area.

The pattern is **low-ink categorical precision**: use when you want to compare values across categories cleanly — especially when comparing two series side by side or when values sit far from zero. Unlike a [Bar Chart](/content/bar-chart), a dot plot does not require anchoring to zero because length is not encoded by filled rectangles. Unlike a [Scatter Plot](/content/scatter-plot), one axis is categorical rather than continuous.

## Also known as

- **Cleveland dot plot** — named after William Cleveland, who popularized dot position for perceptual accuracy
- **Dot comparison** — product UI name emphasizing series-to-series gaps per category
- **Dumbbell chart** — two-series variant joining before/after dots with a connecting bridge line
- **Strip plot** — distribution variant showing many individual sample dots along a category track

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — orientation, scale bounds, and series marker definitions |
| **Dot** | Positioned circular marker encoding a category's value along the numeric axis |
| **Track** | Faint full-row guide line aligning each category label to its markers |
| **Connector** | Highlighted segment spanning between two dots in a dumbbell comparison |
| **CategoryAxis** | Vertical (or horizontal) labels naming each compared item or group |
| **ValueAxis** | Shared numeric scale along which dot positions are read |
| **Tooltip** | Hover readout displaying category values and the gap between compared series |

## Common use cases

Use a dot plot when users need to **compare rankings or before-and-after gaps without heavy bar ink**:

- **Period-over-period shifts** — comparing this week against last week per region with dumbbell connectors
- **Narrow value ranges** — scores clustered between 82% and 96% where zero-based bars look identical
- **Dense category comparisons** — scanning 15–30 items cleanly without a wall of solid bars
- **Target vs actual** — plotting benchmark markers beside observed outcomes on the same track
- **Distribution batches** — showing individual delivery or latency points across days of the week

Avoid a dot plot when readers expect **cumulative stacked totals** (use stacked bars), when **magnitude from zero** is the primary intuitive anchor for non-technical audiences (use a bar chart), or when **dots collide identically** without jitter or aggregation. Do not omit subtle row tracks — without a guide line, matching far-right dots to left-hand labels becomes error-prone.

**Default** Cleveland dot plots sort categories by value so gaps form a readable slope. **Dumbbell** variants pair two colored **Dots** joined by a **Connector** to spotlight change magnitude; **strip** variants stack or jitter multiple observations along each **Track** to reveal density and outliers.
