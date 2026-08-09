import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function AvatarChrome({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"relative size-8 shrink-0 overflow-hidden rounded-full border bg-card ring-2 ring-background",
				className,
			)}
		>
			<ChromeBar className="absolute inset-0 rounded-full" />
			<div className="absolute inset-0 flex items-center justify-center">
				<ChromeBar tone="subtle" className="h-2 w-3 rounded-[2px]" />
			</div>
		</div>
	);
}

function AvatarGroupAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of avatar group parts: AvatarGroup container with overlapping Avatar items (AvatarImage and AvatarFallback) and AvatarGroupCount overflow badge.">
			<AnatomySection>
				<div className="relative rounded-md border border-dashed border-primary/20 bg-secondary p-4 pt-8">
					<AnatomyLabel
						name="AvatarGroup"
						className="absolute top-2.5 left-2.5 whitespace-nowrap"
					/>

					<div className="relative mt-4 flex items-center pl-1">
						<div className="relative">
							<AnatomyLabel
								name="Avatar"
								className="absolute -top-6 left-0 whitespace-nowrap"
							/>
							<div className="relative">
								<AnatomyLabel
									name="AvatarImage"
									className="absolute -top-5 left-8 whitespace-nowrap"
								/>
								<AnatomyLabel
									name="AvatarFallback"
									className="absolute -bottom-5 left-6 whitespace-nowrap"
								/>
								<AvatarChrome />
							</div>
						</div>
						<AvatarChrome className="-ml-2.5" />
						<AvatarChrome className="-ml-2.5" />
						<div className="relative -ml-2.5">
							<AnatomyLabel
								name="AvatarGroupCount"
								className="absolute -top-6 left-0 whitespace-nowrap"
							/>
							<div className="flex size-8 items-center justify-center rounded-full border bg-muted ring-2 ring-background">
								<ChromeBar className="h-2 w-3" />
							</div>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { AvatarGroupAnatomy };
