A heatmap is a **two-dimensional color matrix** — a grid of cells indexed by two categorical or binned variables whose fill intensity encodes magnitude across every pairing.

The pattern is **hotspots across two dimensions**: use when users need to scan intersections for peaks, cold spots, or diagonal correlations across a dense table. Unlike an [Activity Heatmap](/content/activity-heatmap) locked to calendar dates, a general heatmap maps arbitrary row and column pairs such as hour-by-weekday or service-by-region. Unlike a grouped bar chart, hundreds of combinations stay readable without cramped bars.

## Also known as

- **Heatmap chart** — general library name for Cartesian matrix color plots
- **Heatmap matrix** — emphasizes the row-by-column grid structure
- **Density grid** — used when cell color encodes concentration of observations
- **Color matrix** — tabular data visualization where fill encodes numeric scale

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Matrix container — row/column domains, color scale interpolation, and cell padding |
| **Cell** | Rectangular tile at one `(x, y)` intersection shaded by its mapped value |
| **XAxis** | Horizontal category or bucket labels along the top or bottom edge |
| **YAxis** | Vertical category or bucket labels along the left edge |
| **ColorScale** | Continuous or stepped ramp legend mapping color shades to minimum and maximum values |
| **Tooltip** | Hover readout reporting the exact row, column, and cell value |

## Common use cases

Use a heatmap when users need to **uncover patterns across the intersection of two dimensions**:

- **Traffic by hour and weekday** — identifying peak load windows and quiet maintenance slots
- **Correlation matrices** — visualizing positive and negative relationships across variables
- **Regional or feature coverage** — spotting adoption gaps across customer segments and modules
- **Error rates by service and endpoint** — highlighting failing hotspots across a microservice grid
- **Click or schedule density** — comparing utilization across rooms, zones, or shifts

Avoid a heatmap when users need **high numeric precision** (people judge length far more accurately than color shade — use a bar chart or dot plot for few categories), when one axis is **long continuous time** without clear periodicity, or when **diverging values lack a neutral midpoint**. Do not pick color ramps without checking contrast if numbers are printed inside cells.

**Default** heatmaps use a sequential single-hue or perceptually uniform palette starting from a muted zero/low tone. **Diverging** heatmaps split from a neutral midpoint when data spans negative to positive (such as variance or correlation). Include a **ColorScale** legend with min/max anchors and cross-highlight active row/column labels on hover.
