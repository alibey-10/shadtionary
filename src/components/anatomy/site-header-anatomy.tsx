import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function SiteHeaderAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of site header parts: Header root holding Brand, Navbar destinations, and Actions, with optional MobileTrigger for small viewports.">
			<AnatomySection className="relative p-3 pt-10">
				<AnatomyLabel name="Header" className="absolute top-3 left-3" />

				<div className="relative mt-1 rounded-md border border-dashed border-primary/40 bg-card px-3 py-3 pt-8 shadow-sm">
					<div className="flex flex-wrap items-center gap-2">
						<div className="relative flex items-center gap-1.5 pt-5">
							<AnatomyLabel
								name="Brand"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<ChromeBar className="size-4 shrink-0 rounded-sm" />
							<ChromeBar className="h-2 w-12" />
						</div>

						<div className="relative min-w-0 flex-1 rounded-md border border-dashed border-primary/20 px-2.5 py-2 pt-6">
							<AnatomyLabel
								name="Navbar"
								className="absolute top-1 left-2 whitespace-nowrap"
							/>
							<div className="flex flex-wrap items-center gap-2">
								<ChromeBar className="h-2 w-10" />
								<ChromeBar tone="subtle" className="h-2 w-9" />
								<ChromeBar tone="subtle" className="h-2 w-8" />
							</div>
						</div>

						<div className="relative flex items-center gap-1.5 pt-5">
							<AnatomyLabel
								name="Actions"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<ChromeBar tone="subtle" className="h-5 w-10 rounded-md" />
							<ChromeBar className="h-5 w-12 rounded-md" />
						</div>
					</div>
				</div>
			</AnatomySection>

			<AnatomySection variant="optional">
				<div className="relative pt-6">
					<AnatomyLabel
						name="MobileTrigger"
						className="absolute top-0 left-0 whitespace-nowrap"
					/>
					<div className="flex w-fit flex-col justify-center gap-1 rounded-md border bg-card p-2">
						<ChromeBar className="h-0.5 w-4" />
						<ChromeBar className="h-0.5 w-4" />
						<ChromeBar className="h-0.5 w-4" />
					</div>
					<p className="mt-2 text-[10px] text-muted-foreground">
						Opens a sheet or drawer when the Navbar collapses
					</p>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { SiteHeaderAnatomy };
