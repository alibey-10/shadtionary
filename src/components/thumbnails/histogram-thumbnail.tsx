import { cn } from "@/lib/utils";

const gridLines = [28, 60, 92] as const;

const bins = [
	{ id: "bin-1", x: 12, height: 14, tail: false },
	{ id: "bin-2", x: 30, height: 34, tail: false },
	{ id: "bin-3", x: 48, height: 68, tail: false },
	{ id: "bin-4", x: 66, height: 98, tail: false },
	{ id: "bin-5", x: 84, height: 84, tail: false },
	{ id: "bin-6", x: 102, height: 62, tail: false },
	{ id: "bin-7", x: 120, height: 44, tail: false },
	{ id: "bin-8", x: 138, height: 30, tail: false },
	{ id: "bin-9", x: 156, height: 21, tail: false },
	{ id: "bin-10", x: 174, height: 14, tail: true },
	{ id: "bin-11", x: 192, height: 9, tail: true },
	{ id: "bin-12", x: 210, height: 6, tail: true },
] as const;

function HistogramThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-2">
				<svg aria-hidden="true" viewBox="0 0 240 144" className="h-full w-full">
					{gridLines.map((y) => (
						<line
							key={`grid-${y}`}
							x1={10}
							x2={230}
							y1={y}
							y2={y}
							stroke="var(--border)"
							strokeDasharray="3 3"
							strokeWidth={1}
						/>
					))}
					<line
						x1={10}
						x2={230}
						y1={124}
						y2={124}
						stroke="var(--border)"
						strokeWidth={1}
					/>
					{bins.map((bin) => (
						<rect
							key={bin.id}
							x={bin.x}
							y={124 - bin.height}
							width={17}
							height={bin.height}
							rx={1.5}
							fill={bin.tail ? "var(--chart-2)" : "var(--primary)"}
							fillOpacity={bin.tail ? 0.8 : 0.9}
						/>
					))}
					<line
						x1={173.5}
						x2={173.5}
						y1={16}
						y2={124}
						stroke="var(--foreground)"
						strokeOpacity={0.55}
						strokeDasharray="3 3"
						strokeWidth={1.25}
					/>
					<circle
						cx={173.5}
						cy={16}
						r={2.5}
						fill="var(--foreground)"
						fillOpacity={0.65}
					/>
				</svg>
			</div>
		</div>
	);
}

export { HistogramThumbnail };
