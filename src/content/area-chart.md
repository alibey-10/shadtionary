An area chart is a **filled time-series plot** — a line whose region down to a baseline (usually zero) is shaded, so magnitude over time reads as a mass, not only a stroke.

The pattern is **volume over a continuous axis**: use when users need to see how a quantity grows, shrinks, or accumulates along an ordered scale (time, sequence, or bins). Unlike a line chart, the fill encodes magnitude under the curve. Unlike a bar chart, the series is continuous rather than discrete categories.

## Also known as

- **Area graph** — the name used interchangeably in visualization literature

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — data, series colors, stack type, and animation |
| **Area** | One filled series — stroke, fill, curve, and optional point markers |
| **Grid** | Horizontal split lines behind the plot |
| **XAxis** | Category axis — tick labels along the baseline |
| **YAxis** | Value axis — tick labels along the magnitude scale |
| **Tooltip** | Hover readout for the nearest category |
| **Legend** | Series key overlay — optional, often clickable to isolate a series |
| **Range selector** | Optional slider under the plot for zooming a window of the series |
| **Dot** | Resting and hover point markers on a series |

## Common use cases

Use an area chart when users need to **read magnitude along a continuous axis**:

- **Product metrics** — visits, sign-ups, or revenue over weeks and months
- **Cumulative totals** — running users, backlog size, or storage consumed
- **Mix over time** — stacked new vs returning, or plan tiers as a share of the whole
- **Capacity and usage** — CPU, bandwidth, or seat utilization against a baseline
- **Comparisons with volume** — this period vs last, where the fill shows how far apart the series sit

Avoid an area chart when values are **unordered categories** (use bars), when users must **compare many thin series** (use lines — overlapping fills hide each other), or when the question is a **snapshot mix** at one moment (use a pie or stacked bar). Do not fill a series that is not anchored to a meaningful baseline — a fill from an arbitrary axis implies accumulation that the data may not have.

**Default** areas overlay independent series. **Stacked** areas add series on top of each other so the top edge is the total; **100% stacked** areas normalize each category to a share of the whole. Fills are usually a **solid** wash or a **gradient** that fades toward the baseline. Curves range from **linear** and **smooth** to **step** for event-like jumps. Pair a **Tooltip** and **Legend** on dashboards; add a **range selector** when the series is long enough that users need to zoom a window.
