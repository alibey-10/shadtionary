A funnel chart is a **sequential drop-off plot** — stacked or horizontal stages that narrow proportionally from entry to completion, showing how much volume survives each step of a linear flow.

The pattern is **stage-by-stage attrition**: use when users need to pinpoint where prospects, requests, or tasks drop out between start and finish. Unlike a standard bar chart, stages are strictly ordered by progression and highlight step-to-step conversion rates. Unlike a [Sankey Diagram](/content/sankey-diagram), a funnel follows one primary path rather than branching across multiple destinations.

## Also known as

- **Conversion funnel** — marketing and product analytics name for signup or checkout journeys
- **Pipeline chart** — sales CRM view from leads through qualified deals to closed won
- **Stage funnel** — emphasizes sequential step conversion and drop-off metrics

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — ordered stages, percentage mode, and orientation |
| **Stage** | Tapered trapezoid or proportional bar encoding surviving volume at one step |
| **StageLabel** | Step name and absolute count anchored to each segment |
| **ConversionBadge** | Step-to-step or overall conversion percentage between adjacent stages |
| **DropOffIndicator** | Callout highlighting how many items or what share exited at a stage |
| **Tooltip** | Detailed readout showing entry count, step conversion, and cumulative rate |

## Common use cases

Use a funnel chart when users need to **locate the steepest bottleneck in an ordered workflow**:

- **Signup and onboarding** — landing visit → pricing view → trial start → paid subscription
- **E-commerce checkout** — product view → add to cart → shipping → payment → order placed
- **Sales pipeline** — inbound lead → discovery call → proposal sent → contract signed
- **Recruiting pipeline** — applications → screen → technical interview → offer → accepted
- **Activation flows** — install → workspace created → first integration → team invite

Avoid a funnel chart when stages **can happen in any order or loop freely** (use a Sankey diagram or state flow), when counts **increase mid-way** (split into separate entry sources or use a waterfall), or when there are **too many micro-steps** (keep funnels to roughly 3–7 key stages). Do not exaggerate tiny drops by distorting stage widths out of proportion to actual counts.

**Default** funnels center tapered trapezoids vertically from widest to narrowest. **Horizontal** or **step-bar** funnels replace slanted trapezoids with flat proportional bars and clear inter-stage **ConversionBadge** arrows, which often makes drop-off percentages easier to read accurately.
