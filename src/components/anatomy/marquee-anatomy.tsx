import type { ReactNode } from "react";

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function MarqueeItemShell({
	className,
	children,
}: {
	className?: string;
	children?: ReactNode;
}) {
	return (
		<div
			className={cn(
				"relative flex shrink-0 items-center gap-2 rounded-md border bg-card px-2.5 py-2",
				className,
			)}
		>
			{children}
		</div>
	);
}

function MarqueeAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of marquee parts: Marquee viewport containing a Track of Item units separated by Gap, with optional Fade masks at the edges.">
			<AnatomySection className="relative overflow-hidden p-3 pt-10">
				<AnatomyLabel name="Marquee" className="absolute top-3 left-3" />

				<div className="relative pt-2">
					<div className="relative flex items-center gap-2 overflow-hidden rounded-md border border-dashed border-primary/20 px-2 py-3">
						<AnatomyLabel
							name="Track"
							className="absolute -top-2.5 left-2 bg-background px-1"
						/>

						<MarqueeItemShell className="pt-6">
							<AnatomyLabel
								name="Item"
								className="absolute top-1 left-1.5 whitespace-nowrap"
							/>
							<ChromeBar className="size-4 shrink-0 rounded-sm" />
							<div className="space-y-1">
								<ChromeBar className="h-1.5 w-12" />
								<ChromeBar tone="subtle" className="h-1 w-8" />
							</div>
						</MarqueeItemShell>

						<div className="relative flex w-3 shrink-0 justify-center self-stretch">
							<AnatomyLabel
								name="Gap"
								className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
							/>
						</div>

						<MarqueeItemShell>
							<ChromeBar className="size-4 shrink-0 rounded-full" />
							<div className="space-y-1">
								<ChromeBar className="h-1.5 w-10" />
								<ChromeBar tone="subtle" className="h-1 w-7" />
							</div>
						</MarqueeItemShell>

						<MarqueeItemShell>
							<ChromeBar className="size-4 shrink-0 rounded-sm" />
							<div className="space-y-1">
								<ChromeBar className="h-1.5 w-14" />
								<ChromeBar tone="subtle" className="h-1 w-9" />
							</div>
						</MarqueeItemShell>

						<MarqueeItemShell className="opacity-50">
							<ChromeBar className="size-4 shrink-0 rounded-full" />
							<div className="space-y-1">
								<ChromeBar className="h-1.5 w-11" />
								<ChromeBar tone="subtle" className="h-1 w-6" />
							</div>
						</MarqueeItemShell>
					</div>

					<div className="pointer-events-none absolute inset-y-2 left-0 w-12 bg-linear-to-r from-background to-transparent" />
					<div className="pointer-events-none absolute inset-y-2 right-0 w-12 bg-linear-to-l from-background to-transparent" />
					<AnatomyLabel
						name="Fade"
						className="absolute top-1/2 right-1 z-10 -translate-y-1/2"
					/>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { MarqueeAnatomy };
