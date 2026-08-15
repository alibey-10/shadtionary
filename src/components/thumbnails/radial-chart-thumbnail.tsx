import { EChartsRadialChart } from "@/components/evilcharts/charts/echarts-radial-chart";
import type { ChartConfig } from "@/components/evilcharts/ui/echarts-chart";
import { cn } from "@/lib/utils";

const data = [
	{ name: "a", value: 86 },
	{ name: "b", value: 64 },
	{ name: "c", value: 42 },
];

const config = {
	a: {
		colors: {
			light: ["var(--chart-1)"],
			dark: ["var(--chart-1)"],
		},
	},
	b: {
		colors: {
			light: ["var(--chart-2)"],
			dark: ["var(--chart-2)"],
		},
	},
	c: {
		colors: {
			light: ["var(--chart-3)"],
			dark: ["var(--chart-3)"],
		},
	},
} satisfies ChartConfig;

function RadialChartThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-1.5">
				<EChartsRadialChart
					className="h-full min-h-0 w-full"
					config={config}
					data={data}
					max={100}
					nameKey="name"
				>
					<EChartsRadialChart.RadialBar dataKey="value" />
				</EChartsRadialChart>
			</div>
		</div>
	);
}

export { RadialChartThumbnail };
