An activity heatmap is a **calendar intensity grid** — small daily cells arranged by week columns and weekday rows, shaded across discrete levels to reveal streaks, habits, and quiet stretches across months.

The pattern is **daily rhythm over a year**: use when users need to spot consistency, weekday-versus-weekend patterns, and seasonal bursts without reading dense axis ticks. Unlike a [Line Chart](/content/line-chart), a calendar grid separates day-of-week behavior vertically while advancing weeks horizontally. Unlike a generic [Heatmap](/content/heatmap), both axes are fixed to calendar dates.

## Also known as

- **Contribution graph** — popular developer name from GitHub commit histories
- **Calendar heatmap** — visualization term for date-mapped shaded cells
- **Activity calendar** — product UI term for logs, deliveries, or habit streaks

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Calendar layout container — date range, color buckets, and week start day |
| **Cell** | Single square representing one calendar day, shaded by intensity bucket |
| **WeekdayAxis** | Vertical labels along the left edge (`Mon`, `Wed`, `Fri`) |
| **MonthAxis** | Horizontal labels marking month boundaries along the top edge |
| **ScaleLegend** | Compact "Less → More" swatch ramp showing bucket thresholds |
| **Tooltip** | Hover readout displaying the exact date and daily event count |

## Common use cases

Use an activity heatmap when users need to **scan a long stretch of daily behavior in one compact strip**:

- **Developer contributions** — commits, pull requests, and reviews over the past 52 weeks
- **Delivery and deployment cadence** — spotting busy release weekdays and holiday freezes
- **Habit and fitness tracking** — visualizing streaks, missed days, and consistency goals
- **Support or incident logs** — identifying recurring weekly spikes over multiple quarters
- **Writing or study logs** — daily word counts or sessions completed across a year

Avoid an activity heatmap when **exact numeric comparisons between days** matter (color buckets encode approximate bands, not precise heights — use a bar or line chart), when the **date range spans only a few days**, or when the two dimensions are **non-calendar categories** (use a general heatmap matrix). Do not use rainbow palettes; sequential single-hue steps keep empty and peak days unmistakable.

**Default** activity heatmaps display 52 weeks in 4–5 discrete intensity buckets with a clean neutral tint for zero-activity days. Keep spacing tight and square aspect ratios consistent so **WeekdayAxis** rows align cleanly across month boundaries, and show **Summary** stats (total count and active days) beside the **ScaleLegend**.
