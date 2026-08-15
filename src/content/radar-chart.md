A radar chart is a **multivariate polar plot** — values plotted on spokes around a shared center, so a profile across several axes reads as a polygon rather than a set of bars.

The pattern is **profile across axes**: use when users need to compare several metrics on a shared scale at once. Unlike a bar chart, all axes radiate from one origin so the shape itself is the comparison. Unlike a pie, the values are independent magnitudes, not shares of a whole.

## Also known as

- **Spider chart** — the everyday name for the same plot of values on radiating axes

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — data, series colors, and animation |
| **Radar** | Polar series — a polygon whose vertices encode values on each spoke |
| **PolarGrid** | Concentric rings and radial spokes behind the plot |
| **PolarAngleAxis** | Category labels around the perimeter |
| **PolarRadiusAxis** | Radial value scale from the center outward |
| **Tooltip** | Hover readout for the nearest series |
| **Legend** | Series key overlay — optional, often clickable to isolate a series |
| **Dot** | Resting and hover vertex markers on a series |

## Common use cases

Use a radar chart when users need to **read a profile across several axes at once**:

- **Skills** — competency scores for a person, team, or role
- **Product scores** — features, plans, or SKUs rated on the same attributes
- **Player stats** — speed, defense, finishing, and the rest on one sheet
- **Survey dimensions** — Likert scores for satisfaction, trust, effort, and similar axes
- **Competitors** — two or more series overlaid on the same spokes

Avoid a radar chart when there are **more than a handful of axes** (the web turns into clutter), when the axes are **not on a comparable scale** (a 0–100 next to a 0–10,000 warps the shape), or when the question is **one ranking or a trend** (use a bar or a line). Do not fill every series when several polygons overlap; the fills hide each other. Do not treat the area of the polygon as a total — radar axes are independent, not parts of a whole.

**Default** radars fill the polygon. **Lines-only** drops the fill and keeps the outline, which is the usual choice for several series. **Polygon** PolarGrid follows the spokes; **circle** PolarGrid draws round rings instead. Pair a **Tooltip** and **Legend** on dashboards; add **Dots** at vertices when the exact scores matter; show **PolarRadiusAxis** when users need the numeric scale, not only the shape.
