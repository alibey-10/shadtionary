import { cn } from "@/lib/utils";

const gridCols = [48, 96, 144, 192] as const;

const rows = [
	{ id: "r1", y: 24, x1: 92, x2: 198 },
	{ id: "r2", y: 48, x1: 68, x2: 164 },
	{ id: "r3", y: 72, x1: 112, x2: 214 },
	{ id: "r4", y: 96, x1: 42, x2: 132 },
	{ id: "r5", y: 120, x1: 84, x2: 152 },
] as const;

function DotPlotThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-2">
				<svg aria-hidden="true" viewBox="0 0 240 144" className="h-full w-full">
					{gridCols.map((x) => (
						<line
							key={`grid-${x}`}
							x1={x}
							x2={x}
							y1={10}
							y2={134}
							stroke="var(--border)"
							strokeDasharray="3 3"
							strokeWidth={1}
						/>
					))}
					{rows.map((row) => (
						<g key={row.id}>
							<line
								x1={16}
								x2={226}
								y1={row.y}
								y2={row.y}
								stroke="var(--border)"
								strokeWidth={1}
							/>
							<line
								x1={row.x1}
								x2={row.x2}
								y1={row.y}
								y2={row.y}
								stroke="var(--muted-foreground)"
								strokeOpacity={0.5}
								strokeWidth={2}
							/>
							<circle cx={row.x1} cy={row.y} r={4.5} fill="var(--chart-2)" />
							<circle cx={row.x2} cy={row.y} r={4.5} fill="var(--primary)" />
						</g>
					))}
				</svg>
			</div>
		</div>
	);
}

export { DotPlotThumbnail };
