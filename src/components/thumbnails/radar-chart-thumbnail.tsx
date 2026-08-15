import { EChartsRadarChart } from "@/components/evilcharts/charts/echarts-radar-chart";
import type { ChartConfig } from "@/components/evilcharts/ui/echarts-chart";
import { cn } from "@/lib/utils";

const data = [
	{ x: "a", y: 72, z: 48 },
	{ x: "b", y: 54, z: 66 },
	{ x: "c", y: 82, z: 40 },
	{ x: "d", y: 46, z: 74 },
	{ x: "e", y: 68, z: 52 },
	{ x: "f", y: 58, z: 78 },
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

function RadarChartThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-1.5">
				<EChartsRadarChart
					animation={false}
					className="h-full min-h-0 w-full"
					config={config}
					data={data}
				>
					<EChartsRadarChart.PolarGrid />
					<EChartsRadarChart.Radar dataKey="y" />
					<EChartsRadarChart.Radar dataKey="z" />
				</EChartsRadarChart>
			</div>
		</div>
	);
}

export { RadarChartThumbnail };
