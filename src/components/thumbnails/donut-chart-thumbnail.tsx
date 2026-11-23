import { ChromeBar } from "@/components/chrome-bar";
import { EChartsPieChart } from "@/components/evilcharts/charts/echarts-pie-chart";
import type { ChartConfig } from "@/components/evilcharts/ui/echarts-chart";
import { cn } from "@/lib/utils";

const data = [
	{ name: "a", value: 38 },
	{ name: "b", value: 28 },
	{ name: "c", value: 20 },
	{ name: "d", value: 14 },
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
	d: {
		colors: {
			light: ["var(--chart-4)"],
			dark: ["var(--chart-4)"],
		},
	},
} satisfies ChartConfig;

function DonutChartThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-1.5">
				<EChartsPieChart
					className="h-full min-h-0 w-full"
					config={config}
					data={data}
					dataKey="value"
					nameKey="name"
				>
					<EChartsPieChart.Pie
						innerRadius="56%"
						outerRadius="84%"
						paddingAngle={2}
						cornerRadius={2}
					/>
				</EChartsPieChart>
				<div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1">
					<ChromeBar className="h-2 w-7" />
					<ChromeBar tone="subtle" className="h-1.5 w-4" />
				</div>
			</div>
		</div>
	);
}

export { DonutChartThumbnail };
