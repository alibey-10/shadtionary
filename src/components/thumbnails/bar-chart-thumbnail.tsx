import { EChartsBarChart } from "@/components/evilcharts/charts/echarts-bar-chart";
import type { ChartConfig } from "@/components/evilcharts/ui/echarts-chart";
import { cn } from "@/lib/utils";

const data = [
	{ x: "a", y: 36 },
	{ x: "b", y: 58 },
	{ x: "c", y: 44 },
	{ x: "d", y: 78 },
	{ x: "e", y: 52 },
	{ x: "f", y: 88 },
	{ x: "g", y: 64 },
	{ x: "h", y: 42 },
];

const config = {
	y: {
		colors: {
			light: ["var(--primary)"],
			dark: ["var(--primary)"],
		},
	},
} satisfies ChartConfig;

function BarChartThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-1.5">
				<EChartsBarChart
					className="h-full min-h-0 w-full"
					config={config}
					data={data}
					xDataKey="x"
				>
					<EChartsBarChart.Grid />
					<EChartsBarChart.Bar dataKey="y" />
				</EChartsBarChart>
			</div>
		</div>
	);
}

export { BarChartThumbnail };
