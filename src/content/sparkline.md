A sparkline is an **axis-free micro chart** — a compact line, area, or bar trace rendered inline beside a metric or inside a table cell, so recent trajectory reads in context without full plot chrome.

The pattern is **word-sized trend context**: use when a headline number alone hides whether performance is climbing, flat, or spiking. Unlike a full [Line Chart](/content/line-chart) or [Area Chart](/content/area-chart), a sparkline strips axes, gridlines, and legends so multiple metrics scan side by side. Unlike a badge or delta percentage, it reveals volatility and turning points over the window.

## Also known as

- **Inline trend** — highlights placement directly beside KPI numerals or table rows
- **Mini chart** — common UI kit term for small embedded trend plots
- **Micro chart** — Tufte-inspired term for data graphics scaled to typography height

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Compact SVG or canvas wrapper sized to surrounding text or card height |
| **Series** | Single stroke, shaded area, or tight column strip encoding the sequence |
| **Baseline** | Optional faint reference line indicating zero, average, or target |
| **EndDot** | Marker emphasizing the latest or peak observation along the trace |
| **Tooltip** | Optional lightweight hover readout revealing individual step values |
| **Label** | Screen-reader summary or adjacent value pairing so meaning never relies on shape alone |

## Common use cases

Use a sparkline when users need to **pair a current figure with immediate directional context**:

- **KPI summary cards** — showing 30-day momentum next to MRR, sign-ups, or error rate
- **Data table columns** — embedding 7-day traffic or CPU history inside each row
- **Watchlists and tickers** — compact intraday price curves in finance and crypto UIs
- **Fleet monitoring** — scanning dozens of servers or queues for sudden spikes at once
- **Executive digests** — summarizing movement across many metrics in tight vertical space

Avoid a sparkline when users must **read exact values across timestamps** (use a full line or area chart with axes), when **multiple competing series** need comparison on the same scale, or when the **y-range is auto-scaled across cards** that users compare directly without noticing differing scales. Do not clutter a sparkline with tick labels — the moment it needs axes, promote it to a full chart.

**Default** sparklines draw a smooth or crisp stroke with an optional translucent fill toward the baseline. **Win-loss** or **bar** sparklines suit discrete daily outcomes. Highlight the final point with an **EndDot** for current state, and always supply an accessible text summary alongside the graphic.
