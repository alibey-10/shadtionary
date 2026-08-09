import type { ReactNode } from "react";

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function BentoCellShell({
	className,
	children,
}: {
	className?: string;
	children?: ReactNode;
}) {
	return (
		<div
			className={cn(
				"relative flex flex-col justify-end gap-1.5 overflow-hidden rounded-md border bg-card p-2.5",
				className,
			)}
		>
			{children}
		</div>
	);
}

function BentoGridAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of bento grid parts: BentoGrid container with spanning BentoCell tiles containing CellMedia, CellHeader, CellContent, and CellFooter.">
			<AnatomySection className="relative p-3 pt-10">
				<AnatomyLabel name="BentoGrid" className="absolute top-3 left-3" />

				<div className="grid grid-cols-3 grid-rows-3 gap-2 pt-2">
					<BentoCellShell className="relative col-span-2 row-span-2 justify-between gap-3 p-3 pt-8">
						<AnatomyLabel
							name="BentoCell"
							className="absolute top-2.5 left-2.5 whitespace-nowrap"
						/>
						<div className="relative pt-6">
							<AnatomyLabel
								name="CellMedia"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<ChromeBar className="aspect-5/3 w-full rounded-sm" />
						</div>
						<div className="relative space-y-2 pt-6">
							<AnatomyLabel
								name="CellHeader"
								className="absolute top-0 left-0 whitespace-nowrap"
							/>
							<ChromeBar className="h-2 w-2/5" />
							<div className="relative pt-5">
								<AnatomyLabel
									name="CellContent"
									className="absolute top-0 left-0 whitespace-nowrap"
								/>
								<ChromeBar tone="subtle" className="h-1.5 w-3/5" />
							</div>
						</div>
					</BentoCellShell>

					<BentoCellShell className="pt-7">
						<AnatomyLabel
							name="BentoCell"
							className="absolute top-1.5 left-1.5 whitespace-nowrap"
						/>
						<ChromeBar className="h-2 w-3/5" />
						<ChromeBar tone="subtle" className="h-1.5 w-4/5" />
					</BentoCellShell>

					<BentoCellShell className="pt-7">
						<AnatomyLabel
							name="BentoCell"
							className="absolute top-1.5 left-1.5 whitespace-nowrap"
						/>
						<ChromeBar className="mb-auto size-5 rounded-md" />
						<ChromeBar className="h-2 w-2/3" />
					</BentoCellShell>

					<BentoCellShell className="col-span-3 flex-row items-center gap-3 pt-8">
						<AnatomyLabel
							name="BentoCell"
							className="absolute top-2 left-2.5 whitespace-nowrap"
						/>
						<ChromeBar className="size-5 shrink-0 rounded-md" />
						<div className="min-w-0 flex-1 space-y-1.5">
							<ChromeBar className="h-2 w-1/4" />
							<ChromeBar tone="subtle" className="h-1.5 w-2/5" />
						</div>
						<div className="relative shrink-0 pt-5">
							<AnatomyLabel
								name="CellFooter"
								className="absolute top-0 right-0 whitespace-nowrap"
							/>
							<ChromeBar className="h-4 w-10 rounded-sm" />
						</div>
					</BentoCellShell>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { BentoGridAnatomy };
