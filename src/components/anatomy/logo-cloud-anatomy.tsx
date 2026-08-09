import type { ReactNode } from "react";

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";
import { AnatomyContainer, AnatomySection } from "./anatomy-container";
import { AnatomyLabel } from "./anatomy-label";

function LogoItemShell({
	className,
	children,
}: {
	className?: string;
	children?: ReactNode;
}) {
	return (
		<div
			className={cn(
				"relative flex aspect-3/2 items-center justify-center rounded-md border bg-card px-3",
				className,
			)}
		>
			{children}
		</div>
	);
}

function LogoCloudAnatomy() {
	return (
		<AnatomyContainer caption="Labeled diagram of logo cloud parts: LogoCloud section with Heading above a LogoGrid of LogoItem cells, each holding a LogoMark.">
			<AnatomySection className="relative p-3 pt-10">
				<AnatomyLabel name="LogoCloud" className="absolute top-3 left-3" />

				<div className="space-y-3 pt-2">
					<div className="relative mx-auto w-fit space-y-1.5 pt-6 text-center">
						<AnatomyLabel
							name="Heading"
							className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap"
						/>
						<ChromeBar className="mx-auto h-2 w-20" />
						<ChromeBar tone="subtle" className="mx-auto h-1.5 w-28" />
					</div>

					<div className="relative rounded-md border border-dashed border-primary/20 p-2.5 pt-7">
						<AnatomyLabel
							name="LogoGrid"
							className="absolute top-2 left-2.5 whitespace-nowrap"
						/>

						<div className="grid grid-cols-3 gap-2">
							<LogoItemShell className="pt-7">
								<AnatomyLabel
									name="LogoItem"
									className="absolute top-1.5 left-1.5 whitespace-nowrap"
								/>
								<div className="relative">
									<AnatomyLabel
										name="LogoMark"
										className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap"
									/>
									<div className="flex items-center gap-1.5">
										<ChromeBar className="size-4 shrink-0 rounded-sm" />
										<ChromeBar className="h-2 w-10" />
									</div>
								</div>
							</LogoItemShell>

							<LogoItemShell>
								<ChromeBar className="h-2.5 w-14 rounded-sm" />
							</LogoItemShell>

							<LogoItemShell>
								<div className="flex items-center gap-1.5">
									<ChromeBar className="size-4 shrink-0 rounded-full" />
									<ChromeBar className="h-2 w-9" />
								</div>
							</LogoItemShell>

							<LogoItemShell>
								<ChromeBar className="h-2.5 w-12 rounded-sm" />
							</LogoItemShell>

							<LogoItemShell>
								<div className="flex items-center gap-1.5">
									<ChromeBar className="size-4 shrink-0 rounded-sm" />
									<ChromeBar className="h-2 w-11" />
								</div>
							</LogoItemShell>

							<LogoItemShell>
								<ChromeBar className="h-2.5 w-10 rounded-sm" />
							</LogoItemShell>
						</div>
					</div>
				</div>
			</AnatomySection>
		</AnatomyContainer>
	);
}

export { LogoCloudAnatomy };
