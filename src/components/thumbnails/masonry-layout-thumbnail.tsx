import type { ReactNode } from "react";

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function MasonryItem({
	className,
	children,
}: {
	className?: string;
	children?: ReactNode;
}) {
	return (
		<div
			className={cn(
				"flex flex-col gap-1 overflow-hidden rounded-md border bg-card p-1.5",
				className,
			)}
		>
			{children}
		</div>
	);
}

function MasonryLayoutThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="grid aspect-5/3 w-full grid-cols-3 items-start gap-1.5 overflow-hidden rounded-lg bg-secondary p-2">
				<div className="flex flex-col gap-1.5">
					<MasonryItem>
						<ChromeBar className="h-24 w-full rounded-sm" />
						<ChromeBar className="h-1 w-3/5" />
					</MasonryItem>
					<MasonryItem>
						<ChromeBar className="h-8 w-full rounded-sm" />
						<ChromeBar tone="subtle" className="h-1 w-2/3" />
					</MasonryItem>
				</div>

				<div className="flex flex-col gap-1.5">
					<MasonryItem>
						<ChromeBar className="h-16 w-full rounded-sm" />
						<ChromeBar tone="subtle" className="h-1 w-3/4" />
					</MasonryItem>
					<MasonryItem>
						<ChromeBar className="h-12 w-full rounded-sm" />
						<ChromeBar className="h-1 w-2/5" />
					</MasonryItem>
				</div>

				<div className="flex flex-col gap-1.5">
					<MasonryItem>
						<ChromeBar className="h-7 w-full rounded-sm" />
						<ChromeBar className="h-1 w-3/5" />
					</MasonryItem>
					<MasonryItem>
						<ChromeBar className="h-25 w-full rounded-sm" />
						<ChromeBar tone="subtle" className="h-1 w-1/2" />
					</MasonryItem>
				</div>
			</div>
		</div>
	);
}

export { MasonryLayoutThumbnail };
