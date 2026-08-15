A bar chart is a **categorical comparison plot** — rectangular bars whose length encodes a value, so discrete groups can be compared from a shared baseline.

The pattern is **magnitude across categories**: use when users need to compare values across unordered or discrete groups. Unlike a line chart, the series is categorical rather than continuous. Unlike an area chart, each value stands alone as a bar, not a filled mass along an ordered axis.

## Also known as

- **Bar graph** — the everyday name for the same plot of rectangular bars

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — data, series colors, and animation |
| **Bar** | One rectangular series — fill, radius, and optional value labels |
| **Grid** | Horizontal split lines behind the plot |
| **XAxis** | Category axis — tick labels along the baseline |
| **YAxis** | Value axis — tick labels along the magnitude scale |
| **Tooltip** | Hover readout for the nearest category |
| **Legend** | Series key overlay — optional, often clickable to isolate a series |
| **Label** | Optional value text on or above each bar |

## Common use cases

Use a bar chart when users need to **compare values across discrete categories**:

- **Rankings** — products by revenue, pages by visits, or teams by closed tickets
- **Channel mix** — traffic, revenue, or conversions split by source
- **Survey results** — counts or scores for each option
- **Grouped comparisons** — desktop vs mobile per month, or this period vs last
- **Composition** — stacked new vs returning, or plan tiers as a share of the total

Avoid a bar chart when values are **ordered along a continuous axis and the question is trend** (use a line), when users need to **read magnitude as volume over time** (use an area), or when there are **too many categories to label** (use a table, or switch to horizontal bars). Do not start the value axis above zero — a truncated baseline exaggerates differences. Do not connect bars with a line; gaps between bars are what mark the categories as separate.

**Default** bars stand vertical from a shared baseline (sometimes called a column chart). **Horizontal** bars flip the axes when category labels are long. **Grouped** bars place series side by side in each category; **stacked** bars add series on top of each other so the top edge is the total; **100% stacked** bars normalize each category to a share of the whole. Pair a **Tooltip** and **Legend** on dashboards; add **Labels** when a precise number matters more than comparing lengths.
