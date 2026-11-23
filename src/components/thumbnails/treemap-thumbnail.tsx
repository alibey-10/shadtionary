import { cn } from "@/lib/utils";

const tiles = [
	{
		id: "t1",
		x: 8,
		y: 8,
		w: 98,
		h: 78,
		fill: "var(--chart-1)",
		opacity: 0.9,
		barW: 36,
	},
	{
		id: "t2",
		x: 8,
		y: 89,
		w: 56,
		h: 47,
		fill: "var(--chart-1)",
		opacity: 0.65,
		barW: 24,
	},
	{
		id: "t3",
		x: 67,
		y: 89,
		w: 39,
		h: 47,
		fill: "var(--chart-1)",
		opacity: 0.45,
		barW: 18,
	},
	{
		id: "t4",
		x: 109,
		y: 8,
		w: 72,
		h: 64,
		fill: "var(--chart-2)",
		opacity: 0.85,
		barW: 28,
	},
	{
		id: "t5",
		x: 184,
		y: 8,
		w: 48,
		h: 64,
		fill: "var(--chart-2)",
		opacity: 0.6,
		barW: 20,
	},
	{
		id: "t6",
		x: 109,
		y: 75,
		w: 58,
		h: 61,
		fill: "var(--chart-3)",
		opacity: 0.85,
		barW: 24,
	},
	{
		id: "t7",
		x: 170,
		y: 75,
		w: 62,
		h: 32,
		fill: "var(--chart-4)",
		opacity: 0.85,
		barW: 22,
	},
	{
		id: "t8",
		x: 170,
		y: 110,
		w: 34,
		h: 26,
		fill: "var(--chart-5)",
		opacity: 0.8,
		barW: 0,
	},
	{
		id: "t9",
		x: 207,
		y: 110,
		w: 25,
		h: 26,
		fill: "var(--chart-3)",
		opacity: 0.55,
		barW: 0,
	},
] as const;

function TreemapThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-1.5">
				<svg aria-hidden="true" viewBox="0 0 240 144" className="h-full w-full">
					{tiles.map((tile) => (
						<g key={tile.id}>
							<rect
								x={tile.x}
								y={tile.y}
								width={tile.w}
								height={tile.h}
								rx={4}
								fill={tile.fill}
								fillOpacity={tile.opacity}
							/>
							{tile.barW > 0 ? (
								<rect
									x={tile.x + 7}
									y={tile.y + 7}
									width={tile.barW}
									height={4}
									rx={2}
									fill="var(--background)"
									fillOpacity={0.7}
								/>
							) : null}
						</g>
					))}
				</svg>
			</div>
		</div>
	);
}

export { TreemapThumbnail };
