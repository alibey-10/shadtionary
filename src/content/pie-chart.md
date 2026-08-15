A pie chart is a **part-to-whole plot** — a circle divided into slices whose angles encode share of a total, so mix at one moment reads as portions of one whole rather than lengths from a baseline.

The pattern is **share of one whole**: use when users need to see how a few categories split a single total. Unlike a bar chart, comparison is angular rather than aligned to a shared baseline. Unlike a line or area chart, the series is a snapshot mix, not change along an ordered axis.

## Also known as

- **Circle chart** — the same circular plot of proportional slices

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — data, series colors, and animation |
| **Pie** | Polar series — slices sized by share of the total |
| **Sector** | One slice — fill, radius, and optional active outer ring |
| **Label** | Optional text on a slice or in the donut hole |
| **Tooltip** | Hover readout for the nearest slice |
| **Legend** | Category key overlay — optional, often clickable to isolate a slice |

## Common use cases

Use a pie chart when users need to **read a snapshot mix as shares of one total**:

- **Traffic mix** — browsers, devices, or channels as a share of visits
- **Revenue split** — plan tiers, regions, or products as a share of the quarter
- **Survey composition** — how respondents split across a small set of options
- **Capacity** — used vs remaining seats, storage, or budget
- **KPI donut** — a total in the hole with the mix as a ring around it

Avoid a pie chart when there are **more than a handful of slices** (use a bar or a table), when users must **compare close values** (aligned bars beat angles), or when the question is **trend or ranking** (use a line or a bar). Do not use a pie when the parts do not add to a meaningful whole. Do not explode every slice; a pulled-out sector only helps if one category is the point.

**Default** pies fill to the center. A **donut** sets an inner radius so the hole can hold a **Label** for the total. **Stacked** pies nest a second ring for a second series or a hierarchy. Pair a **Tooltip** and **Legend** on dashboards; add **Labels** on slices when there are few enough to read; use an active **Sector** when one category is selected.
