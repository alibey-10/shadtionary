import type { ReactNode } from "react";

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function MasonryItemShell({
	className,
	children,
}: {
	className?: string;
	children?: ReactNode;
}) {
	return (
		<div
			className={cn(
				"relative flex flex-col gap-1.5 overflow-hidden rounded-md border bg-card p-2",
				className,
			)}
		>
			{children}
		</div>
	);
}

function MasonryLayoutAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of masonry layout parts: Masonry container with Column lanes packing Item tiles that hold ItemMedia and ItemContent, separated by Gap.">
			<AnatomySection className="relative p-3 pt-10">
				<AnatomyLabel name="Masonry" className="absolute top-3 left-3" />

				<div className="relative grid grid-cols-3 items-start gap-2 pt-2">
					<AnatomyLabel
						name="Gap"
						className="absolute top-1/2 left-1/3 z-10 -translate-x-1/2 -translate-y-1/2"
					/>

					<div className="relative flex flex-col gap-2 pt-7">
						<AnatomyLabel
							name="Column"
							className="absolute top-0 left-0 whitespace-nowrap"
						/>
						<MasonryItemShell className="pt-7">
							<AnatomyLabel
								name="Item"
								className="absolute top-1.5 left-1.5 whitespace-nowrap"
							/>
							<div className="relative pt-6">
								<AnatomyLabel
									name="ItemMedia"
									className="absolute top-0 left-0 whitespace-nowrap"
								/>
								<ChromeBar className="aspect-3/4 w-full rounded-sm" />
							</div>
							<div className="relative space-y-1.5 pt-5">
								<AnatomyLabel
									name="ItemContent"
									className="absolute top-0 left-0 whitespace-nowrap"
								/>
								<ChromeBar className="h-1.5 w-3/5" />
								<ChromeBar tone="subtle" className="h-1 w-4/5" />
							</div>
						</MasonryItemShell>
						<MasonryItemShell>
							<ChromeBar className="aspect-video w-full rounded-sm" />
							<ChromeBar className="h-1.5 w-1/2" />
						</MasonryItemShell>
					</div>

					<div className="flex flex-col gap-2">
						<MasonryItemShell>
							<ChromeBar className="aspect-square w-full rounded-sm" />
							<ChromeBar className="h-1.5 w-2/5" />
						</MasonryItemShell>
						<MasonryItemShell>
							<ChromeBar className="aspect-4/5 w-full rounded-sm" />
							<ChromeBar tone="subtle" className="h-1.5 w-3/5" />
						</MasonryItemShell>
					</div>

					<div className="flex flex-col gap-2">
						<MasonryItemShell>
							<ChromeBar className="aspect-video w-full rounded-sm" />
							<ChromeBar className="h-1.5 w-1/2" />
						</MasonryItemShell>
						<MasonryItemShell>
							<ChromeBar className="aspect-3/4 w-full rounded-sm" />
							<ChromeBar className="h-1.5 w-2/3" />
						</MasonryItemShell>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { MasonryLayoutAnatomy };
