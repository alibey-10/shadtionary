A radial chart is a **concentric polar bar plot** — categories as rings around a shared center, each value as the sweep of that ring, so magnitudes read as arc length rather than bar height.

The pattern is **magnitude as arc**: use when users need to compare a few independent values in a compact circular footprint. Unlike a pie, the rings are not shares of one whole. Unlike a radar, there are no spokes and no profile polygon. Unlike a bar, comparison wraps around a center instead of lining up on a straight baseline.

## Also known as

- **Radial bar chart** — the same plot of concentric arcs, and the name Recharts and most chart libraries use

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — data, series colors, and animation |
| **RadialBar** | Polar series — concentric rings whose arc length encodes value |
| **PolarGrid** | Concentric rings behind the plot |
| **PolarRadiusAxis** | Radial scale from the center, often used to place a center Label |
| **Label** | Optional text in the hole or along a ring |
| **Tooltip** | Hover readout for the nearest ring |
| **Legend** | Category key overlay — optional, often clickable to isolate a ring |

## Common use cases

Use a radial chart when users need to **read a few independent magnitudes in a compact circle**:

- **KPI gauges** — a score or completion rate against a fixed max, with the number in the hole
- **Activity rings** — move, exercise, stand, or similar goals on nested tracks
- **Progress mix** — storage used, seats filled, or budget spent as arcs on a card
- **Category comparison** — a handful of metrics where a circular footprint fits the layout better than bars
- **Stacked totals** — two series on one ring so the outer edge is the combined value

Avoid a radial chart when there are **more than a handful of rings** (they get too thin to read), when users must **compare close values** (aligned bars beat arcs), or when the question is **share of one whole** (use a pie). Do not treat arc length as a slice of a total. Do not drop the background track on a gauge. Without it, a short arc has no scale to read against.

**Default** radials fill a full circle, one ring per category, often with a background track. A **semi** or **gauge** cuts the arc (usually a dome over the top) and puts a **Label** in the hole via **PolarRadiusAxis**. **Stacked** rings add series on the same radius. Pair a **Tooltip** and **Legend** on dashboards; add **PolarGrid** when users need ring references; show **Labels** on rings only when there are few enough to read.
