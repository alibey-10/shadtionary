import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function LineChartAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of line chart parts: Chart root with Grid split lines, a Line series with Dot markers, XAxis and YAxis ticks, plus optional Tooltip, Legend, and range selector.">
			<AnatomySection className="relative p-3 pt-10">
				<AnatomyLabel name="Chart" className="absolute top-3 left-3" />

				<div className="space-y-3 pt-2">
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

					<div className="flex gap-2">
						<div className="relative flex w-8 shrink-0 flex-col items-end justify-between py-2 pt-6">
							<AnatomyLabel
								name="YAxis"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<ChromeBar tone="subtle" className="h-1 w-4" />
							<ChromeBar tone="subtle" className="h-1 w-5" />
							<ChromeBar tone="subtle" className="h-1 w-3" />
						</div>

						<div className="relative min-w-0 flex-1 rounded-md border border-dashed border-primary/20 p-2 pt-8">
							<AnatomyLabel
								name="Grid"
								className="absolute top-2 left-2 whitespace-nowrap"
							/>

							<div className="relative">
								<div className="pointer-events-none absolute inset-x-0 top-1/4 border-t border-dashed border-primary/20" />
								<div className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-dashed border-primary/20" />
								<div className="pointer-events-none absolute inset-x-0 top-3/4 border-t border-dashed border-primary/20" />

								<svg
									aria-hidden
									className="h-28 w-full overflow-visible"
									preserveAspectRatio="none"
									viewBox="0 0 200 80"
								>
									<title>Line series</title>
									<path
										className="stroke-primary/70"
										d="M0 58 C18 50 28 46 40 52 C55 60 70 28 90 34 C110 40 120 18 140 22 C160 26 175 14 200 18"
										fill="none"
										strokeWidth="1.75"
									/>
									<circle
										className="fill-background stroke-primary/70"
										cx="90"
										cy="34"
										r="2.5"
										strokeWidth="1.25"
									/>
									<circle
										className="fill-background stroke-primary/70"
										cx="140"
										cy="22"
										r="2.5"
										strokeWidth="1.25"
									/>
								</svg>

								<AnatomyLabel
									name="Line"
									className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
								/>
								<AnatomyLabel
									name="Dot"
									className="absolute top-[18%] left-[68%]"
								/>

								<div className="absolute top-6 right-8 w-16 rounded-md border bg-card p-1.5 shadow-sm">
									<AnatomyLabel name="Tooltip" className="mb-1" />
									<ChromeBar className="h-1 w-10" />
									<ChromeBar tone="subtle" className="mt-1 h-1 w-7" />
								</div>
							</div>
						</div>
					</div>

					<div className="relative ml-10 flex justify-between pt-6">
						<AnatomyLabel
							name="XAxis"
							className="absolute top-0 left-0 whitespace-nowrap"
						/>
						<ChromeBar tone="subtle" className="h-1 w-4" />
						<ChromeBar tone="subtle" className="h-1 w-5" />
						<ChromeBar tone="subtle" className="h-1 w-4" />
						<ChromeBar tone="subtle" className="h-1 w-6" />
					</div>
				</div>
			</AnatomySection>

			<AnatomySection variant="optional">
				<div className="relative pt-6">
					<AnatomyLabel
						name="Range selector"
						className="absolute top-0 left-0 whitespace-nowrap"
					/>
					<div className="h-8 overflow-hidden rounded-md border bg-muted/40">
						<svg
							aria-hidden
							className="h-full w-full"
							preserveAspectRatio="none"
							viewBox="0 0 200 32"
						>
							<title>Range selector mini chart</title>
							<path
								className="stroke-primary/50"
								d="M0 22 C20 18 40 24 60 16 C80 10 110 20 140 12 C160 8 180 14 200 10"
								fill="none"
								strokeWidth="1.5"
							/>
						</svg>
					</div>
					<p className="mt-2 text-[10px] text-muted-foreground">
						Range slider under the plot for zooming a window of the series
					</p>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { LineChartAnatomy };
