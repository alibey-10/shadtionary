A line chart is a **connected time-series plot** — points joined by a stroke along an ordered axis, so change over time reads as a path rather than a filled mass.

The pattern is **trend over a continuous axis**: use when users need to see how one or more series move along an ordered scale (time, sequence, or bins). Unlike an area chart, the stroke encodes direction without implying volume under the curve. Unlike a bar chart, the series is continuous rather than discrete categories.

## Also known as

- **Line graph** — the everyday name for the same plot of connected points

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — data, series colors, and animation |
| **Line** | One stroke series — curve, width, dash, and optional point markers |
| **Grid** | Horizontal split lines behind the plot |
| **XAxis** | Category axis — tick labels along the baseline |
| **YAxis** | Value axis — tick labels along the magnitude scale |
| **Tooltip** | Hover readout for the nearest category |
| **Legend** | Series key overlay — optional, often clickable to isolate a series |
| **Range selector** | Optional slider under the plot for zooming a window of the series |
| **Dot** | Resting and hover point markers on a series |

## Common use cases

Use a line chart when users need to **read trend along a continuous axis**:

- **Markets** — price or index movement across sessions
- **Product metrics** — visits, conversion rate, or latency compared across channels
- **Operations** — error rate, queue depth, or response time against a threshold
- **Sensors** — temperature, load, or battery over a window
- **Comparisons** — this period vs last, or several series on one scale where overlapping fills would hide each other

Avoid a line chart when values are **unordered categories** (use bars), when users need to **read magnitude as volume** (use an area), or when the question is a **snapshot mix** at one moment (use a pie or stacked bar). Do not connect points that are not ordered — a line between unordered categories implies a sequence the data does not have.

**Default** lines overlay independent series on a shared scale. Curves range from **linear** and **smooth** to **step** for event-like jumps. Strokes are **solid** or **dashed** (often a forecast tail). Pair a **Tooltip** and **Legend** on dashboards; hide axes entirely for a **sparkline** in a KPI card; add a **range selector** when the series is long enough that users need to zoom a window.
