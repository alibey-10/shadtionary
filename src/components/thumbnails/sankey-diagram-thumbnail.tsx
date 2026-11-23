import { cn } from "@/lib/utils";

const nodes = [
	{ id: "l1", x: 14, y: 14, h: 66, fill: "var(--chart-1)" },
	{ id: "l2", x: 14, y: 88, h: 42, fill: "var(--chart-2)" },
	{ id: "m1", x: 115, y: 12, h: 38, fill: "var(--chart-1)" },
	{ id: "m2", x: 115, y: 58, h: 46, fill: "var(--chart-3)" },
	{ id: "m3", x: 115, y: 112, h: 24, fill: "var(--chart-2)" },
	{ id: "r1", x: 217, y: 12, h: 36, fill: "var(--chart-1)" },
	{ id: "r2", x: 217, y: 56, h: 40, fill: "var(--chart-3)" },
	{ id: "r3", x: 217, y: 104, h: 32, fill: "var(--chart-4)" },
] as const;

function ribbonPath(
	x1: number,
	y1Top: number,
	y1Bottom: number,
	x2: number,
	y2Top: number,
	y2Bottom: number,
): string {
	const mx = (x1 + x2) / 2;
	return [
		`M ${x1} ${y1Top}`,
		`C ${mx} ${y1Top}, ${mx} ${y2Top}, ${x2} ${y2Top}`,
		`L ${x2} ${y2Bottom}`,
		`C ${mx} ${y2Bottom}, ${mx} ${y1Bottom}, ${x1} ${y1Bottom}`,
		"Z",
	].join(" ");
}

const links = [
	{
		id: "l1-m1",
		d: ribbonPath(23, 14, 52, 115, 12, 50),
		fill: "var(--chart-1)",
	},
	{
		id: "l1-m2",
		d: ribbonPath(23, 52, 80, 115, 58, 86),
		fill: "var(--chart-1)",
	},
	{
		id: "l2-m2",
		d: ribbonPath(23, 88, 106, 115, 86, 104),
		fill: "var(--chart-2)",
	},
	{
		id: "l2-m3",
		d: ribbonPath(23, 106, 130, 115, 112, 136),
		fill: "var(--chart-2)",
	},
	{
		id: "m1-r1",
		d: ribbonPath(124, 12, 38, 217, 12, 38),
		fill: "var(--chart-1)",
	},
	{
		id: "m1-r2",
		d: ribbonPath(124, 38, 50, 217, 56, 68),
		fill: "var(--chart-1)",
	},
	{
		id: "m2-r1",
		d: ribbonPath(124, 58, 68, 217, 38, 48),
		fill: "var(--chart-3)",
	},
	{
		id: "m2-r2",
		d: ribbonPath(124, 68, 90, 217, 68, 90),
		fill: "var(--chart-3)",
	},
	{
		id: "m2-r3",
		d: ribbonPath(124, 90, 104, 217, 104, 118),
		fill: "var(--chart-3)",
	},
	{
		id: "m3-r2",
		d: ribbonPath(124, 112, 118, 217, 90, 96),
		fill: "var(--chart-2)",
	},
	{
		id: "m3-r3",
		d: ribbonPath(124, 118, 136, 217, 118, 136),
		fill: "var(--chart-2)",
	},
] as const;

function SankeyDiagramThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-1.5">
				<svg aria-hidden="true" viewBox="0 0 240 144" className="h-full w-full">
					{links.map((link) => (
						<path
							key={link.id}
							d={link.d}
							fill={link.fill}
							fillOpacity={0.32}
						/>
					))}
					{nodes.map((node) => (
						<rect
							key={node.id}
							x={node.x}
							y={node.y}
							width={9}
							height={node.h}
							rx={2}
							fill={node.fill}
						/>
					))}
				</svg>
			</div>
		</div>
	);
}

export { SankeyDiagramThumbnail };
