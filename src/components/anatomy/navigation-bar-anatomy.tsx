import { ChromeBar } from "@/components/chrome-bar";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function NavigationBarAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of navigation bar parts: Navbar root wrapping a NavList of NavItem links, with optional MobileTrigger for small viewports. Brand and actions sit in the surrounding site header for context.">
			<AnatomySection className="relative p-3 pt-10">
				<p className="absolute top-3 left-3 text-[10px] text-muted-foreground">
					Site header (context)
				</p>

				<div className="relative mt-1 flex flex-wrap items-center gap-2 rounded-md border bg-card px-3 py-3 shadow-sm">
					<div className="flex items-center gap-1.5 opacity-50">
						<ChromeBar className="size-4 shrink-0 rounded-sm" />
						<ChromeBar className="h-2 w-12" />
					</div>

					<div className="relative min-w-0 flex-1 rounded-md border border-dashed border-primary/40 px-2.5 py-2 pt-7">
						<AnatomyLabel
							name="Navbar"
							className="absolute top-1.5 left-2.5 whitespace-nowrap"
						/>

						<div className="relative mt-0.5 rounded-md border border-dashed border-primary/20 px-2 py-2 pt-6">
							<AnatomyLabel
								name="NavList"
								className="absolute top-1 left-2 whitespace-nowrap"
							/>
							<div className="flex flex-wrap items-center gap-2">
								<div className="relative pt-5">
									<AnatomyLabel
										name="NavItem"
										className="absolute top-0 left-0 whitespace-nowrap"
									/>
									<ChromeBar className="h-2 w-10" />
								</div>
								<ChromeBar tone="subtle" className="h-2 w-9" />
								<ChromeBar tone="subtle" className="h-2 w-8" />
							</div>
						</div>
					</div>

					<div className="flex items-center gap-1.5 opacity-50">
						<ChromeBar tone="subtle" className="h-5 w-10 rounded-md" />
						<ChromeBar className="h-5 w-12 rounded-md" />
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
						Opens a sheet or drawer when the NavList collapses
					</p>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { NavigationBarAnatomy };
