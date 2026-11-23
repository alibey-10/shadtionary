import { cn } from "@/lib/utils";

const gridLines = [28, 60, 92] as const;

const bars = [
	{ id: "b1", x: 18, y: 84, height: 40 },
	{ id: "b2", x: 48, y: 66, height: 58 },
	{ id: "b3", x: 78, y: 74, height: 50 },
	{ id: "b4", x: 108, y: 46, height: 78 },
	{ id: "b5", x: 138, y: 58, height: 66 },
	{ id: "b6", x: 168, y: 36, height: 88 },
	{ id: "b7", x: 198, y: 48, height: 76 },
] as const;

const points = [
	{ id: "p1", cx: 28, cy: 96 },
	{ id: "p2", cx: 58, cy: 78 },
	{ id: "p3", cx: 88, cy: 62 },
	{ id: "p4", cx: 118, cy: 66 },
	{ id: "p5", cx: 148, cy: 42 },
	{ id: "p6", cx: 178, cy: 28 },
	{ id: "p7", cx: 208, cy: 22 },
] as const;

function ComboChartThumbnail({ className }: { className?: string }) {
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
					{bars.map((bar) => (
						<rect
							key={bar.id}
							x={bar.x}
							y={bar.y}
							width={20}
							height={bar.height}
							rx={3}
							fill="var(--chart-2)"
							fillOpacity={0.45}
						/>
					))}
					<path
						d="M 28 96 C 43 87, 43 82, 58 78 C 73 74, 73 63, 88 62 C 103 61, 103 68, 118 66 C 133 64, 133 48, 148 42 C 163 36, 163 30, 178 28 C 193 26, 193 24, 208 22"
						fill="none"
						stroke="var(--primary)"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2.5}
					/>
					{points.map((pt) => (
						<circle
							key={pt.id}
							cx={pt.cx}
							cy={pt.cy}
							r={3}
							fill="var(--background)"
							stroke="var(--primary)"
							strokeWidth={2}
						/>
					))}
				</svg>
			</div>
		</div>
	);
}

export { ComboChartThumbnail };
