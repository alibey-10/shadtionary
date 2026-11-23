A cohort grid is a **triangular retention matrix** — rows of user cohorts grouped by start period tracked across elapsed intervals, with color-shaded cells showing how each group holds on over time.

The pattern is **retention decay across cohorts**: use when readers need to compare how newer cohorts perform against older ones at the same lifecycle age. Unlike a line chart of retention curves, a matrix avoids overlapping lines as cohorts accumulate. Unlike a general [Heatmap](/content/heatmap), elapsed periods form a stepped triangle because recent cohorts have fewer completed intervals.

## Also known as

- **Cohort chart** — general analytics name for longitudinal cohort tracking
- **Retention table** — tabular view pairing exact percentages with background heat fills
- **Retention matrix** — emphasizes the two-dimensional cohort-by-interval grid
- **Retention triangle** — describes the characteristic stepped diagonal edge of incomplete periods

## Component Anatomy

| Part | Role |
|------|------|
| **CohortGrid** (Root) | Matrix container — cohort grouping, interval length, and color scale domain |
| **PeriodHeader** | Top column labels marking elapsed time since signup (`M0`, `W1`, `D7`) |
| **CohortRow** | Horizontal row representing one signup period plus its starting cohort size |
| **RetentionCell** | Shaded square encoding retention percentage with crisp numeric text |
| **SummaryRow** | Optional weighted average row aggregating retention across every cohort |
| **Tooltip** | Crosshair readout showing cohort name, elapsed interval, retained count, and rate |

## Common use cases

Use a cohort grid when users need to **separate true retention improvements from calendar growth**:

- **SaaS subscriber retention** — tracking whether onboarding changes improved month-3 survival
- **Consumer app engagement** — comparing week-1 through week-12 return rates after product launches
- **Revenue expansion (NDR)** — shading cells above 100% when account upgrades exceed churn
- **Feature stickiness** — measuring repeat usage across weekly adoption cohorts
- **Gaming and education** — spotting sharp early drop-offs at day 1, day 7, or day 30

Avoid a cohort grid when users only care about **one aggregate trend line** (use a line chart), when **cohort sizes are tiny** (percentages swing wildly — always display cohort count alongside the row), or when **categories have no elapsed time progression** (use a standard heatmap). Do not compare a partial current interval as if it were complete; omit or distinctly mark incomplete cells.

**Default** cohort grids anchor column zero at `100%` and fade down a sequential monochrome ramp so flat retention curves read as sustained bands. Highlight the active row and column on hover so readers can trace both one cohort horizontally and a lifecycle milestone vertically.
