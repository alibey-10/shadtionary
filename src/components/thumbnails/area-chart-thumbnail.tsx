import { EChartsAreaChart } from "@/components/evilcharts/charts/echarts-area-chart";
import type { ChartConfig } from "@/components/evilcharts/ui/echarts-chart";
import { cn } from "@/lib/utils";

const data = [
	{ x: "a", y: 22 },
	{ x: "b", y: 28 },
	{ x: "c", y: 21 },
	{ x: "d", y: 36 },
	{ x: "e", y: 44 },
	{ x: "f", y: 38 },
	{ x: "g", y: 52 },
	{ x: "h", y: 61 },
];

const config = {
	y: {
		colors: {
			light: ["var(--primary)"],
			dark: ["var(--primary)"],
		},
	},
} satisfies ChartConfig;

function AreaChartThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-1.5">
				<EChartsAreaChart
					className="h-full min-h-0 w-full"
					config={config}
					curveType="monotone"
					data={data}
					xDataKey="x"
				>
					<EChartsAreaChart.Grid />
					<EChartsAreaChart.Area
						dataKey="y"
						strokeVariant="solid"
						strokeWidth={2}
						variant="solid"
					/>
				</EChartsAreaChart>
			</div>
		</div>
	);
}

export { AreaChartThumbnail };
