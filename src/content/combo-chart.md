A combo chart is a **layered multi-series plot** — two or more chart types (most often bars and a line) sharing one category axis, so related metrics with different rhythms or scales read on a single canvas.

The pattern is **correlated layers on one axis**: use when a volume series and a rate or target series belong in the same story. Unlike a plain bar chart, a second geometry separates the primary count from a trend, average, or goal. Unlike two separate charts, alignment along a shared x-axis lets readers spot divergence at a glance.

## Also known as

- **Composed chart** — Recharts' name for mixing `Bar`, `Line`, and `Area` inside one container
- **Combination chart** — spreadsheet and BI term for multi-geometry plots
- **Dual-axis chart** — when a secondary `YAxis` carries a second unit such as a percentage

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — shared dataset, series config, and layout margins |
| **Bar** | Rectangular base series — usually counts, volume, or actuals |
| **Line** | Overlaid stroke series — usually rate, target, forecast, or running average |
| **Grid** | Horizontal split lines aligned to the primary scale |
| **XAxis** | Shared category or time axis anchoring every layer |
| **YAxis** | Primary value axis — plus an optional right-hand secondary axis for differing units |
| **Tooltip** | Synchronized hover readout showing values from every layered series |
| **Legend** | Series key identifying each geometry and color |

## Common use cases

Use a combo chart when users need to **read two distinct kinds of metrics against the same timeline or categories**:

- **Actuals vs target** — monthly revenue bars overlaid with a quota or budget line
- **Volume and rate** — order count bars paired with a conversion or margin percentage line
- **Histogram with curve** — binned counts beneath a smoothed density or cumulative line
- **Forecast and history** — realized bars alongside a projected trend stroke
- **Pareto breakdown** — descending category bars crossed by a cumulative share curve

Avoid a combo chart when **both series share the same unit and scale** (a grouped bar or multi-line chart is simpler), when **more than two y-axes** are needed (split into stacked panels instead), or when **dual axes are scaled arbitrarily** to exaggerate correlation. Do not layer two filled areas over opaque bars where one hides the other.

**Default** combos pair vertical bars with a crisp line on one left y-axis. **Dual-axis** combos add a right-hand **YAxis** when units differ (such as dollars and percent); color-code each axis label to match its series so readers know which scale applies. Keep the bar series slightly muted so the overlaid **Line** and **Tooltip** crosshair remain easy to trace.
