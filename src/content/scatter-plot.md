A scatter plot is a **bivariate relationship plot** — markers positioned along two continuous axes (`x` and `y`), so correlation, clusters, and outliers read as spatial patterns rather than aggregated summaries.

The pattern is **relationship between two continuous measures**: use when readers need to see whether two metrics move together, separate into distinct groups, or harbor anomalies. Unlike a [Line Chart](/content/line-chart), points are not connected sequentially across time. Unlike a [Dot Plot](/content/dot-plot), both axes represent numeric scales rather than named categories.

## Also known as

- **Scatter chart** — standard library name for Cartesian point plots
- **Scatter graph** — common alternative name in spreadsheets and analytics tools
- **XY plot** — highlights coordinate mapping along horizontal and vertical numeric scales
- **Bubble chart** — three-variable extension encoding a third measure via marker area

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — coordinate bounds, zoom/pan state, and series colors |
| **Scatter** | Point series mapping `x`, `y`, and optional `z` (size) coordinates to markers |
| **Dot** (Point) | Plotted marker whose position (and optional radius) encodes one observation |
| **Grid** | Vertical and horizontal reference lines aiding coordinate estimation |
| **XAxis** | Horizontal continuous numeric scale |
| **YAxis** | Vertical continuous numeric scale |
| **ReferenceLine** | Optional trend line, regression fit, or quadrant divider |
| **Tooltip** | Hover readout identifying the hovered entity and its exact metric coordinates |
| **Legend** | Optional category key distinguishing grouped clusters by color |

## Common use cases

Use a scatter plot when users need to **explore correlation, segmentation, or outliers across paired metrics**:

- **Effort vs impact** — prioritizing projects or features inside four value quadrants
- **Price vs performance** — comparing products, models, or plans along cost and quality axes
- **Cohort or account health** — plotting engagement frequency against spend or seat count
- **Latency vs throughput** — diagnosing saturation curves in load-test results
- **Portfolio risk vs return** — sizing bubbles by allocation weight on top of risk/return axes

Avoid a scatter plot when **one axis is categorical** (use a dot plot or bar chart), when **points overlap into an unreadable blob** without transparency, jitter, or binning (switch to a density heatmap), or when users need to **track a single metric over time** (use a line chart). For bubble variants, always map the third metric to circle **area** rather than radius so larger bubbles are not visually exaggerated.

**Default** scatter plots use translucent markers with crisp strokes so overlapping points stay distinguishable. Add **Quadrant** or **Trend** reference lines when decisions hinge on thresholds, encode categorical groups via **Legend** colors, and scale **Dot** area smoothly when adding a third bubble dimension.
