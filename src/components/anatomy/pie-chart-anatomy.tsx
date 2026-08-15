import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

const slices = [
	{ id: "a", start: 0, end: 0.42, className: "fill-chart-1" },
	{ id: "b", start: 0.42, end: 0.74, className: "fill-chart-2" },
	{ id: "c", start: 0.74, end: 1, className: "fill-chart-3" },
] as const;

function slicePath(
	start: number,
	end: number,
	{
		innerRadius = 0,
		radius = 48,
	}: { innerRadius?: number; radius?: number } = {},
) {
	const cx = 50;
	const cy = 50;
	const startAngle = start * Math.PI * 2 - Math.PI / 2;
	const endAngle = end * Math.PI * 2 - Math.PI / 2;
	const x1 = cx + radius * Math.cos(startAngle);
	const y1 = cy + radius * Math.sin(startAngle);
	const x2 = cx + radius * Math.cos(endAngle);
	const y2 = cy + radius * Math.sin(endAngle);
	const largeArc = end - start > 0.5 ? 1 : 0;

	if (innerRadius <= 0) {
		return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
	}

	const ix1 = cx + innerRadius * Math.cos(startAngle);
	const iy1 = cy + innerRadius * Math.sin(startAngle);
	const ix2 = cx + innerRadius * Math.cos(endAngle);
	const iy2 = cy + innerRadius * Math.sin(endAngle);

	return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix1} ${iy1} Z`;
}

function PieChrome({
	innerRadius = 0,
	className,
}: {
	innerRadius?: number;
	className?: string;
}) {
	return (
		<div className={cn("relative overflow-hidden rounded-full", className)}>
			<svg className="size-full" viewBox="0 0 100 100">
				<title>Pie series</title>
				{slices.map((slice) => (
					<path
						key={slice.id}
						className={cn("stroke-background", slice.className)}
						d={slicePath(slice.start, slice.end, { innerRadius })}
						strokeWidth="2"
					/>
				))}
			</svg>
			{innerRadius > 0 ? (
				<div
					className="absolute rounded-full bg-background"
					style={{ inset: `${50 - innerRadius}%` }}
				/>
			) : null}
		</div>
	);
}

function PieChartAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of pie chart parts: Chart root with a Pie series of Sector slices, optional Label text, plus optional Tooltip and Legend.">
			<AnatomySection className="relative p-3 pt-10">
				<AnatomyLabel name="Chart" className="absolute top-3 left-3" />

				<div className="flex justify-end">
					<div className="relative flex items-center gap-1.5 pt-6">
						<AnatomyLabel
							name="Legend"
							className="absolute top-0 right-0 whitespace-nowrap"
						/>
						<ChromeBar className="size-2 rounded-sm" />
						<ChromeBar tone="subtle" className="h-1.5 w-10" />
					</div>
				</div>

				<div className="relative mx-auto mt-2 size-44">
					<PieChrome className="size-full" />

					<AnatomyLabel
						name="Pie"
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					/>
					<AnatomyLabel
						name="Sector"
						className="absolute top-[18%] right-[8%]"
					/>
					<AnatomyLabel
						name="Label"
						className="absolute bottom-[22%] left-[6%]"
					/>

					<div className="absolute top-8 right-2 w-16 rounded-md border bg-card p-1.5 shadow-sm">
						<AnatomyLabel name="Tooltip" className="mb-1" />
						<ChromeBar className="h-1 w-10" />
						<ChromeBar tone="subtle" className="mt-1 h-1 w-7" />
					</div>
				</div>
			</AnatomySection>

			<AnatomySection variant="optional">
				<div className="relative flex flex-col items-center pt-6">
					<AnatomyLabel
						name="Label"
						className="absolute top-0 left-0 whitespace-nowrap"
					/>
					<div className="relative size-28">
						<PieChrome className="size-full" innerRadius={28} />
						<div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
							<ChromeBar className="h-2 w-8" />
							<ChromeBar tone="subtle" className="h-1 w-6" />
						</div>
					</div>
					<p className="mt-2 text-[10px] text-muted-foreground">
						Donut hole for a total or category label
					</p>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { PieChartAnatomy };
