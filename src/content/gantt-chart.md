A gantt chart is a **horizontal schedule plot** — a task list paired with a calendar grid where horizontal bars encode each task's start date, duration, completion progress, and dependencies.

The pattern is **work over calendar time**: use when teams need to coordinate overlapping workstreams, spot critical-path bottlenecks, and compare planned timelines against today. Unlike a [Timeline](/content/timeline) listing discrete events sequentially, a gantt shows parallel durations and parent-child groupings against a continuous time grid. Unlike a standard bar chart, bars float between start and end timestamps rather than starting at zero.

## Also known as

- **Project schedule chart** — planning name emphasizing milestones and deadlines
- **Timeline chart** — general product term for horizontal duration bars over dates
- **Roadmap chart** — high-level variant showing quarter-by-quarter initiatives

## Component Anatomy

| Part | Role |
|------|------|
| **Chart** (Root) | Synchronized container — date window, zoom granularity, and vertical scroll lock |
| **TaskList** | Left-hand table column holding grouped phases, task names, and owners |
| **TimeAxis** | Zoomable top calendar header spanning months, weeks, or days |
| **TaskBar** | Horizontal capsule spanning from start date to end date on the time grid |
| **ProgressFill** | Darker inner bar showing percentage completed inside a task span |
| **Milestone** | Diamond marker pinning a zero-duration deadline or release gate |
| **DependencyLink** | Orthogonal connector arrow linking predecessor and successor tasks |
| **TodayLine** | Vertical reference marker indicating the current date across every row |

## Common use cases

Use a gantt chart when users need to **plan, coordinate, or audit parallel timelines**:

- **Product launch plans** — coordinating design, backend, QA, and marketing streams toward release
- **Engineering roadmaps** — communicating multi-quarter initiatives and milestone gates
- **Construction and operations** — scheduling sequential phases bounded by handoff dependencies
- **Editorial or campaign calendars** — tracking overlapping production and publication dates
- **Resource scheduling** — checking workload overlap across owners or equipment

Avoid a gantt chart when tasks **have no meaningful start/end dates or dependencies** (a Kanban board or [Bar List](/content/bar-list) is lighter), when there are **hundreds of ungrouped micro-tasks** (group into collapsible phases), or when users only need to scan **past activity history** (use a timeline). Do not pack dense dependency arrows without clean routing or hover emphasis.

**Default** gantts pair a sticky **TaskList** with horizontally scrollable day/week/month zoom levels and a crisp **TodayLine**. **Roadmap** views hide granular dependencies and emphasize quarter bars plus **Milestone** diamonds; **Baseline** views add a subtle ghost bar beneath each **TaskBar** to reveal schedule slip.
