import { cn } from "@/lib/utils";

const gridLines = [28, 60, 92] as const;

const steps = [
	{ id: "open", x: 18, y: 70, height: 54, fill: "var(--chart-3)" },
	{ id: "up-1", x: 54, y: 46, height: 24, fill: "var(--chart-2)" },
	{ id: "up-2", x: 90, y: 24, height: 22, fill: "var(--chart-2)" },
	{ id: "down-1", x: 126, y: 24, height: 30, fill: "var(--primary)" },
	{ id: "down-2", x: 162, y: 54, height: 14, fill: "var(--primary)" },
	{ id: "close", x: 198, y: 68, height: 56, fill: "var(--chart-3)" },
] as const;

const connectors = [
	{ id: "c1", x1: 42, x2: 54, y: 70 },
	{ id: "c2", x1: 78, x2: 90, y: 46 },
	{ id: "c3", x1: 114, x2: 126, y: 24 },
	{ id: "c4", x1: 150, x2: 162, y: 54 },
	{ id: "c5", x1: 186, x2: 198, y: 68 },
] as const;

function WaterfallChartThumbnail({ className }: { className?: string }) {
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
							x1={12}
							x2={228}
							y1={y}
							y2={y}
							stroke="var(--border)"
							strokeDasharray="3 3"
							strokeWidth={1}
						/>
					))}
					<line
						x1={12}
						x2={228}
						y1={124}
						y2={124}
						stroke="var(--border)"
						strokeWidth={1}
					/>
					{connectors.map((c) => (
						<line
							key={c.id}
							x1={c.x1}
							x2={c.x2}
							y1={c.y}
							y2={c.y}
							stroke="var(--muted-foreground)"
							strokeOpacity={0.45}
							strokeDasharray="2 2"
							strokeWidth={1}
						/>
					))}
					{steps.map((step) => (
						<rect
							key={step.id}
							x={step.x}
							y={step.y}
							width={24}
							height={step.height}
							rx={3}
							fill={step.fill}
						/>
					))}
				</svg>
			</div>
		</div>
	);
}

export { WaterfallChartThumbnail };
