import { EChartsAreaChart } from "@/components/evilcharts/charts/echarts-area-chart";
import type { ChartConfig } from "@/components/evilcharts/ui/echarts-chart";
import { cn } from "@/lib/utils";

const data = [
	{ x: "a", y: 28, z: 16 },
	{ x: "b", y: 22, z: 24 },
	{ x: "c", y: 36, z: 20 },
	{ x: "d", y: 30, z: 34 },
	{ x: "e", y: 48, z: 28 },
	{ x: "f", y: 42, z: 40 },
	{ x: "g", y: 58, z: 36 },
	{ x: "h", y: 52, z: 50 },
];

const config = {
	y: {
		colors: {
			light: ["var(--primary)"],
			dark: ["var(--primary)"],
		},
	},
	z: {
		colors: {
			light: ["var(--chart-2)"],
			dark: ["var(--chart-2)"],
		},
	},
} satisfies ChartConfig;

function LineChartThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-1.5">
				<EChartsAreaChart
					animation={false}
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
						variant="none"
					/>
					<EChartsAreaChart.Area
						dataKey="z"
						strokeVariant="solid"
						strokeWidth={2}
						variant="none"
					/>
				</EChartsAreaChart>
			</div>
		</div>
	);
}

export { LineChartThumbnail };
