import { cn } from "@/lib/utils";

const stages = [
	{
		id: "stage-1",
		points: "18,16 222,16 204,42 36,42",
		opacity: 0.92,
		pillY: 26,
		pillW: 44,
	},
	{
		id: "stage-2",
		points: "41,46 199,46 182,72 58,72",
		opacity: 0.72,
		pillY: 56,
		pillW: 36,
	},
	{
		id: "stage-3",
		points: "63,76 177,76 161,102 79,102",
		opacity: 0.52,
		pillY: 86,
		pillW: 28,
	},
	{
		id: "stage-4",
		points: "84,106 156,106 143,130 97,130",
		opacity: 0.34,
		pillY: 115,
		pillW: 20,
	},
] as const;

function FunnelChartThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-2">
				<svg aria-hidden="true" viewBox="0 0 240 144" className="h-full w-full">
					{stages.map((stage) => (
						<g key={stage.id}>
							<polygon
								points={stage.points}
								fill="var(--primary)"
								fillOpacity={stage.opacity}
							/>
							<rect
								x={120 - stage.pillW / 2}
								y={stage.pillY}
								width={stage.pillW}
								height={5}
								rx={2.5}
								fill="var(--background)"
								fillOpacity={0.7}
							/>
						</g>
					))}
				</svg>
			</div>
		</div>
	);
}

export { FunnelChartThumbnail };
