import type { ReactNode } from "react";

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function BentoCell({
	className,
	children,
}: {
	className?: string;
	children?: ReactNode;
}) {
	return (
		<div
			className={cn(
				"flex flex-col justify-end gap-1.5 overflow-hidden rounded-md border bg-card p-2",
				className,
			)}
		>
			{children}
		</div>
	);
}

function BentoGridThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="grid aspect-5/3 w-full grid-cols-3 grid-rows-3 gap-1.5 rounded-lg bg-secondary p-2">
				<BentoCell className="col-span-2 row-span-2 justify-between p-2.5">
					<ChromeBar className="aspect-4/3 w-full rounded-sm" />
					<div className="space-y-1">
						<ChromeBar className="h-1.5 w-2/5" />
						<ChromeBar tone="subtle" className="h-1 w-3/5" />
					</div>
				</BentoCell>

				<BentoCell>
					<ChromeBar className="h-1.5 w-3/5" />
					<ChromeBar tone="subtle" className="h-1 w-4/5" />
				</BentoCell>

				<BentoCell>
					<ChromeBar className="mb-auto size-4 rounded-md" />
					<ChromeBar className="h-1.5 w-2/3" />
				</BentoCell>

				<BentoCell className="col-span-3 flex-row items-center gap-2">
					<ChromeBar className="size-4 shrink-0 rounded-md" />
					<div className="min-w-0 flex-1 space-y-1">
						<ChromeBar className="h-1.5 w-1/4" />
						<ChromeBar tone="subtle" className="h-1 w-2/5" />
					</div>
					<ChromeBar className="h-3 w-8 shrink-0 rounded-sm" />
				</BentoCell>
			</div>
		</div>
	);
}

export { BentoGridThumbnail };
