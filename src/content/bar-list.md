A bar list is a **ranked inline bar table** — a vertical stack of category rows where a proportional horizontal bar sits behind or beside each label and its formatted value.

The pattern is **compact ranked breakdown**: use when users want to scan the top items in a category along with exact numbers and readable labels. Unlike a full horizontal [Bar Chart](/content/bar-chart), a bar list drops axes, ticks, and gridlines in favor of typographic alignment. Unlike a plain text table, the background fill gives instant visual proportion across rows.

## Also known as

- **Ranked bars** — emphasizes sorting items from highest to lowest contribution
- **Inline bar list** — describes bars embedded inside list rows rather than a chart canvas
- **Horizontal bar list** — distinguishes the list pattern from vertical column charts

## Component Anatomy

| Part | Role |
|------|------|
| **BarList** (Root) | Vertical stack container — sorting order, max-scale calculation, and row spacing |
| **Row** | Single item container pairing label, proportional bar fill, and right-aligned value |
| **BarFill** | Tinted horizontal strip scaled relative to the largest item (or total) |
| **Label** | Category name, route path, or entity title, often paired with an icon or link |
| **Value** | Tabular right-aligned count, total, or percentage share |
| **Header** | Optional column labels (such as Page / Visitors / Share) when multiple figures appear |

## Common use cases

Use a bar list when users need to **rank top contributors inside a compact dashboard card**:

- **Top pages and routes** — most visited URLs alongside visitor counts and share
- **Referrers and channels** — search engines, social sources, and direct traffic ranked by sessions
- **Country or device mix** — geographic or browser leaders with flags or icons
- **Error or slow-query leaders** — endpoints generating the highest volume of failures
- **Team or workspace activity** — busiest projects or repositories in a summary widget

Avoid a bar list when categories follow an **ordered time sequence** (use a vertical bar or line chart), when **tiny differences must be measured against grid ticks**, or when **hundreds of rows** require multi-column sorting and filtering (use a [Data Table](/content/data-table)). Do not truncate long labels inside narrow fills without ellipsis or tooltip support, and do not sort arbitrarily unless items have a natural fixed order.

**Default** bar lists normalize the largest bar to 100% width so relative scale stays readable even when the top item is modest. **Share-scaled** lists scale bars against the overall total instead. Keep **Value** numbers in `tabular-nums` so digits align cleanly down the right column.
