A sankey diagram is a **proportional flow plot** — vertical columns of nodes joined by curved ribbons whose thickness encodes how much quantity moves from each source to each destination.

The pattern is **splitting and merging flows**: use when readers need to trace where a whole originates, how it branches across intermediate steps, and where it lands. Unlike a [Funnel Chart](/content/funnel-chart) that tracks drops along one straight sequence, a sankey shows many-to-many branching and conservation across stages. Unlike a [Treemap](/content/treemap), connections between stages are the primary story.

## Also known as

- **Sankey chart** — standard component name in Recharts, ECharts, and BI tools
- **Flow diagram** — general UI name highlighting movement across categories
- **Alluvial diagram** — closely related variant tracking how fixed cohorts re-group across discrete dimensions

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Flow layout container — node alignment, column spacing, and conservation math |
| **Node** | Vertical bar representing a source, intermediate step, or final outcome |
| **Link** (Ribbon) | Smooth curved band connecting two nodes, sized in proportion to flow volume |
| **StageColumn** | Vertical rank aligning nodes that belong to the same step or layer |
| **NodeLabel** | Name and aggregated value placed beside each node |
| **Tooltip** | Hover readout displaying the source, target, flow magnitude, and percentage share |

## Common use cases

Use a sankey diagram when users need to **follow how totals redistribute across connected stages**:

- **Budget and P&L flows** — tracing revenue streams through cost categories into profit
- **User navigation paths** — showing how landing sources branch across key pages to conversion or exit
- **Time and resource allocation** — mapping tracked hours from client vs internal work to project types
- **Energy or material balance** — visualizing supply inputs splitting into end uses and losses
- **Job or sales attribution** — following channels through qualification stages to final outcomes

Avoid a sankey diagram when **links cross heavily** in spaghetti tangles, when there are **dozens of tiny nodes** (group minor items into "Other"), or when **cyclical loops** violate left-to-right flow clarity. Do not scale ribbon widths arbitrarily — incoming and outgoing band sums on each node must reconcile visibly.

**Default** sankeys flow left-to-right across 2–5 clean **StageColumns** with translucent **Links** that brighten on hover while dimming unrelated paths. **Hover isolation** makes dense networks readable by lighting up every upstream and downstream ribbon attached to the inspected **Node**.
