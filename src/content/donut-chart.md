A donut chart is a **ring-shaped part-to-whole plot** — a circular chart with a cutout center whose arc segments encode each category's share while keeping the hole open for a headline figure.

The pattern is **share of total with a center summary**: use when readers need both the overall magnitude and how a few categories divide it. Unlike a solid [Pie Chart](/content/pie-chart), the hollow ring reduces wedge distortion at the center and creates a natural anchor for a total or KPI label. Unlike a [Radial Chart](/content/radial-chart), segments live end-to-end on one ring and sum to 100%.

## Also known as

- **Doughnut chart** — alternate spelling used by Chart.js and data visualization texts
- **Ring chart** — emphasizes the hollow circular band
- **Share chart** — UX-oriented name when pairing the ring with category percentages

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — dataset, ring radii, color config, and animation |
| **Pie** | Polar ring series configured with an `innerRadius` greater than zero |
| **Sector** | Individual arc slice sized by share of the whole |
| **CenterLabel** | Headline total, unit, or active slice readout placed inside the cutout |
| **Tooltip** | Hover readout displaying the slice label, value, and percentage |
| **Legend** | External key listing categories and values cleanly alongside or below the ring |

## Common use cases

Use a donut chart when users need to **pair a headline total with a few category shares**:

- **Revenue mix** — total quarterly revenue in the center surrounded by plan tiers or channels
- **Cloud or cost allocation** — monthly bill in the hole split by compute, storage, and network
- **Portfolio allocation** — total balance framed by equities, bonds, and cash
- **Device or browser share** — total sessions in the ring center with desktop, mobile, and tablet arcs
- **Ticket status** — open count centered inside slices for triage, in progress, and blocked

Avoid a donut chart when there are **more than five or six categories** (thin arcs and label collisions hurt readability), when values **do not form one total**, or when **ranking close percentages accurately** matters more than showing a whole (use a [Bar List](/content/bar-list) or bar chart). Do not squeeze long labels inside narrow ring arcs.

**Default** donuts keep a balanced ring thickness (`50%–70%` inner radius) with subtle padding angles between slices. **Half-donut** variants span 180° for compact header cards. Keep **CenterLabel** typography concise (one primary figure plus a short subtitle) and offload detailed category values to the **Legend** and **Tooltip**.
