A histogram is a **continuous distribution plot** — adjacent rectangular bins grouped along a numeric scale whose heights encode how many observations fall inside each interval.

The pattern is **frequency across a range**: use when readers need to judge the spread, central tendency, skew, or tail behavior of a measured variable. Unlike a [Bar Chart](/content/bar-chart), the horizontal axis is a continuous ordered scale rather than discrete categories, so bins touch with minimal or zero gap. Unlike a line chart, the plot reports counts per bucket rather than a value per timestamp.

## Also known as

- **Frequency distribution chart** — statistical name emphasizing observation counts per interval
- **Distribution histogram** — contrasts binned density against summary averages
- **Latency histogram** — common engineering variant showing request duration buckets with percentile markers

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Plot container — binning strategy, scale type, and series styling |
| **Bin** | Contiguous vertical bar encoding the count or share of observations in one interval |
| **ReferenceLine** | Vertical marker highlighting a threshold such as p50, p95, mean, or SLO limit |
| **Grid** | Horizontal frequency lines behind the bins |
| **XAxis** | Continuous numeric scale partitioned into equal or logarithmic bin boundaries |
| **YAxis** | Frequency or probability density axis starting at zero |
| **Brush** | Optional range selector for dragging across bins to measure a subset |
| **Tooltip** | Hover readout displaying bin bounds, exact count, and cumulative share |

## Common use cases

Use a histogram when users need to **inspect the shape of a numeric distribution rather than a single average**:

- **API latency** — request counts across millisecond buckets with p50, p95, and p99 lines plus an SLO tail
- **Order values** — how customer basket sizes cluster across price ranges
- **Session duration** — spotting bimodal splits between bounces and engaged visits
- **Score distributions** — exam grades, NPS ratings, or model confidence spread
- **Queue wait times** — identifying long-tail outliers hidden behind a healthy median

Avoid a histogram when data is **categorical** (use a bar chart with clear gaps between groups), when sample size is **too small to form stable bins** (use a dot plot or strip plot), or when **comparing exact values over time** (use a line chart). Do not hide extreme outliers silently off-axis; group them into an explicit overflow bin such as `500ms+`.

**Default** histograms use uniform linear bins starting from zero frequency. **Log-scale** histograms compress long right tails common in timing and financial data. Pair **ReferenceLine** markers for key percentiles and shade tail **Bins** beyond an error budget; add a **Brush** when users need to sum the share of requests inside any chosen range.
