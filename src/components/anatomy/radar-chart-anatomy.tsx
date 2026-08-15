import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

const CX = 50;
const CY = 50;
const AXES = 6;
const OUTER = 42;
const SERIES = [34, 24, 38, 20, 32, 28] as const;
const RINGS = [14, 28, OUTER] as const;

function polar(index: number, radius: number) {
	const angle = ((index * 360) / AXES - 90) * (Math.PI / 180);
	return {
		x: CX + radius * Math.cos(angle),
		y: CY + radius * Math.sin(angle),
	};
}

function polygonPoints(radii: readonly number[]) {
	return radii
		.map((radius, index) => {
			const point = polar(index, radius);
			return `${point.x},${point.y}`;
		})
		.join(" ");
}

function ringPoints(radius: number) {
	return Array.from({ length: AXES }, (_, index) => {
		const point = polar(index, radius);
		return `${point.x},${point.y}`;
	}).join(" ");
}

const series = SERIES.map((radius, index) => polar(index, radius));

function RadarChartAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of radar chart parts: Chart root with PolarGrid rings and spokes, a Radar series with Dot markers, PolarAngleAxis labels around the perimeter, plus optional PolarRadiusAxis, Tooltip, and Legend.">
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

				<div className="relative mx-auto mt-2 size-52">
					<svg className="size-full overflow-visible" viewBox="0 0 100 100">
						<title>Radar series</title>
						{Array.from({ length: AXES }, (_, i) => {
							const end = polar(i, OUTER);
							return (
								<line
									key={`spoke-${i.toString()}`}
									className="stroke-primary/20"
									strokeDasharray="3 4"
									x1={CX}
									x2={end.x}
									y1={CY}
									y2={end.y}
								/>
							);
						})}
						{RINGS.map((radius) => (
							<polygon
								key={`ring-${radius.toString()}`}
								className="fill-none stroke-primary/20"
								points={ringPoints(radius)}
								strokeDasharray="3 4"
							/>
						))}
						<polygon
							className="fill-primary/20 stroke-primary/70"
							points={polygonPoints(SERIES)}
							strokeWidth="1.25"
						/>
						{series.map((point, i) => (
							<circle
								key={`dot-${i.toString()}`}
								className="fill-background stroke-primary/70"
								cx={point.x}
								cy={point.y}
								r="1.75"
								strokeWidth="1.1"
							/>
						))}
					</svg>

					<AnatomyLabel
						name="PolarGrid"
						className="absolute top-[18%] left-[8%]"
					/>
					<AnatomyLabel
						name="Radar"
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					/>
					<AnatomyLabel name="Dot" className="absolute top-[14%] right-[22%]" />
					<AnatomyLabel
						name="PolarAngleAxis"
						className="absolute bottom-[6%] left-1/2 -translate-x-1/2 whitespace-nowrap"
					/>

					<div className="absolute top-6 right-0 w-16 rounded-md border bg-card p-1.5 shadow-sm">
						<AnatomyLabel name="Tooltip" className="mb-1" />
						<ChromeBar className="h-1 w-10" />
						<ChromeBar tone="subtle" className="mt-1 h-1 w-7" />
					</div>
				</div>
			</AnatomySection>

			<AnatomySection variant="optional">
				<div className="relative flex flex-col items-center pt-6">
					<AnatomyLabel
						name="PolarRadiusAxis"
						className="absolute top-0 left-0 whitespace-nowrap"
					/>
					<div className="relative size-28">
						<svg className="size-full" viewBox="0 0 100 100">
							<title>Circular polar grid</title>
							<circle
								className="fill-none stroke-primary/20"
								cx={CX}
								cy={CY}
								r="16"
								strokeDasharray="3 4"
							/>
							<circle
								className="fill-none stroke-primary/20"
								cx={CX}
								cy={CY}
								r="28"
								strokeDasharray="3 4"
							/>
							<circle
								className="fill-none stroke-primary/20"
								cx={CX}
								cy={CY}
								r="40"
								strokeDasharray="3 4"
							/>
							<line
								className="stroke-primary/25"
								x1={CX}
								x2={CX}
								y1={CY}
								y2={CY - 40}
							/>
						</svg>
						<div className="pointer-events-none absolute inset-x-0 top-[8%] flex flex-col items-center gap-3">
							<ChromeBar tone="subtle" className="h-1 w-3" />
							<ChromeBar tone="subtle" className="h-1 w-4" />
							<ChromeBar tone="subtle" className="h-1 w-3" />
						</div>
					</div>
					<p className="mt-2 text-[10px] text-muted-foreground">
						Radial value ticks from the center, often with circular PolarGrid
						rings
					</p>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { RadarChartAnatomy };
