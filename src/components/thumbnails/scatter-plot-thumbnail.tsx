import { cn } from "@/lib/utils";

const hGrid = [34, 64, 94] as const;
const vGrid = [62, 114, 166, 214] as const;

const points = [
	{ id: "s1", cx: 34, cy: 112, r: 4, series: "a" },
	{ id: "s2", cx: 48, cy: 102, r: 5.5, series: "b" },
	{ id: "s3", cx: 60, cy: 108, r: 3.5, series: "a" },
	{ id: "s4", cx: 74, cy: 90, r: 6, series: "b" },
	{ id: "s5", cx: 84, cy: 98, r: 4.5, series: "a" },
	{ id: "s6", cx: 96, cy: 82, r: 5, series: "a" },
	{ id: "s7", cx: 108, cy: 76, r: 6.5, series: "b" },
	{ id: "s8", cx: 118, cy: 88, r: 4, series: "b" },
	{ id: "s9", cx: 128, cy: 66, r: 5, series: "a" },
	{ id: "s10", cx: 140, cy: 72, r: 4, series: "b" },
	{ id: "s11", cx: 150, cy: 54, r: 6, series: "a" },
	{ id: "s12", cx: 162, cy: 62, r: 4.5, series: "b" },
	{ id: "s13", cx: 174, cy: 44, r: 5.5, series: "a" },
	{ id: "s14", cx: 184, cy: 52, r: 3.5, series: "b" },
	{ id: "s15", cx: 194, cy: 36, r: 6, series: "a" },
	{ id: "s16", cx: 204, cy: 42, r: 4.5, series: "b" },
	{ id: "s17", cx: 214, cy: 26, r: 5, series: "a" },
	{ id: "s18", cx: 90, cy: 56, r: 3.5, series: "b" },
] as const;

function ScatterPlotThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-2">
				<svg aria-hidden="true" viewBox="0 0 240 144" className="h-full w-full">
					{hGrid.map((y) => (
						<line
							key={`hg-${y}`}
							x1={20}
							x2={228}
							y1={y}
							y2={y}
							stroke="var(--border)"
							strokeDasharray="3 3"
							strokeWidth={1}
						/>
					))}
					{vGrid.map((x) => (
						<line
							key={`vg-${x}`}
							x1={x}
							x2={x}
							y1={14}
							y2={124}
							stroke="var(--border)"
							strokeDasharray="3 3"
							strokeWidth={1}
						/>
					))}
					<line
						x1={20}
						x2={20}
						y1={14}
						y2={124}
						stroke="var(--border)"
						strokeWidth={1.25}
					/>
					<line
						x1={20}
						x2={228}
						y1={124}
						y2={124}
						stroke="var(--border)"
						strokeWidth={1.25}
					/>
					<line
						x1={28}
						x2={220}
						y1={116}
						y2={24}
						stroke="var(--muted-foreground)"
						strokeOpacity={0.35}
						strokeDasharray="4 3"
						strokeWidth={1.25}
					/>
					{points.map((pt) => (
						<circle
							key={pt.id}
							cx={pt.cx}
							cy={pt.cy}
							r={pt.r}
							fill={pt.series === "a" ? "var(--primary)" : "var(--chart-2)"}
							fillOpacity={0.78}
							stroke="var(--background)"
							strokeWidth={1}
						/>
					))}
				</svg>
			</div>
		</div>
	);
}

export { ScatterPlotThumbnail };
