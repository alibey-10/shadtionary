import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

const bars = [
	{ id: "a", height: "h-8" },
	{ id: "b", height: "h-14" },
	{ id: "c", height: "h-10" },
	{ id: "d", height: "h-20" },
	{ id: "e", height: "h-12" },
	{ id: "f", height: "h-24" },
] as const;

function BarChartAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of bar chart parts: Chart root with Grid split lines, a Bar series with optional Label text, XAxis and YAxis ticks, plus optional Tooltip and Legend.">
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

								<div className="relative flex h-28 items-end gap-1.5 px-1">
									{bars.map((bar) => (
										<div
											key={bar.id}
											className="relative flex min-w-0 flex-1 flex-col items-center justify-end"
										>
											{bar.id === "f" ? (
												<AnatomyLabel name="Label" className="mb-1" />
											) : null}
											<ChromeBar
												className={cn(
													"w-full rounded-t-sm rounded-b-none",
													bar.height,
												)}
											/>
										</div>
									))}
								</div>

								<AnatomyLabel
									name="Bar"
									className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
		</AnatomyContainer>
	);
}

export { BarChartAnatomy };
