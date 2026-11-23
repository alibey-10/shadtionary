import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

const rows = [
	{
		id: "spark-1",
		labelWidth: "w-14",
		valueWidth: "w-9",
		color: "var(--chart-2)",
		linePath: "M 2 18 L 14 14 L 26 15 L 38 9 L 50 11 L 62 5 L 72 3",
		areaPath:
			"M 2 18 L 14 14 L 26 15 L 38 9 L 50 11 L 62 5 L 72 3 L 72 21 L 2 21 Z",
		endX: 72,
		endY: 3,
	},
	{
		id: "spark-2",
		labelWidth: "w-12",
		valueWidth: "w-11",
		color: "var(--primary)",
		linePath: "M 2 17 L 14 16 L 26 12 L 38 13 L 50 7 L 62 8 L 72 4",
		areaPath:
			"M 2 17 L 14 16 L 26 12 L 38 13 L 50 7 L 62 8 L 72 4 L 72 21 L 2 21 Z",
		endX: 72,
		endY: 4,
	},
	{
		id: "spark-3",
		labelWidth: "w-16",
		valueWidth: "w-8",
		color: "var(--chart-3)",
		linePath: "M 2 7 L 14 11 L 26 16 L 38 15 L 50 10 L 62 12 L 72 6",
		areaPath:
			"M 2 7 L 14 11 L 26 16 L 38 15 L 50 10 L 62 12 L 72 6 L 72 21 L 2 21 Z",
		endX: 72,
		endY: 6,
	},
] as const;

function SparklineThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full flex-col justify-center gap-1.5 overflow-hidden rounded-lg bg-secondary p-2.5">
				{rows.map((row) => (
					<div
						key={row.id}
						className="flex items-center justify-between gap-3 rounded-md border border-border/50 bg-card/80 px-2.5 py-1.5"
					>
						<div className="space-y-1">
							<ChromeBar className={cn("h-1.5", row.labelWidth)} />
							<ChromeBar
								tone="subtle"
								className={cn("h-1.5", row.valueWidth)}
							/>
						</div>
						<svg
							aria-hidden="true"
							viewBox="0 0 76 22"
							className="h-5 w-16 shrink-0"
						>
							<path d={row.areaPath} fill={row.color} fillOpacity={0.14} />
							<path
								d={row.linePath}
								fill="none"
								stroke={row.color}
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.75}
							/>
							<circle cx={row.endX} cy={row.endY} r={2} fill={row.color} />
						</svg>
					</div>
				))}
			</div>
		</div>
	);
}

export { SparklineThumbnail };
