import type { ReactNode } from "react";

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function MarqueeItem({
	className,
	children,
}: {
	className?: string;
	children?: ReactNode;
}) {
	return (
		<div
			className={cn(
				"flex shrink-0 items-center gap-1.5 rounded-md border bg-card px-2 py-1.5",
				className,
			)}
		>
			{children}
		</div>
	);
}

function MarqueeThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative flex aspect-5/3 w-full flex-col justify-center gap-2 overflow-hidden rounded-lg bg-secondary p-2">
				<div className="flex items-center gap-1.5">
					<MarqueeItem>
						<ChromeBar className="size-3.5 shrink-0 rounded-sm" />
						<ChromeBar className="h-1.5 w-10" />
					</MarqueeItem>
					<MarqueeItem>
						<ChromeBar className="size-3.5 shrink-0 rounded-full" />
						<ChromeBar className="h-1.5 w-8" />
					</MarqueeItem>
					<MarqueeItem>
						<ChromeBar className="size-3.5 shrink-0 rounded-sm" />
						<ChromeBar className="h-1.5 w-12" />
					</MarqueeItem>
					<MarqueeItem>
						<ChromeBar className="size-3.5 shrink-0 rounded-full" />
						<ChromeBar className="h-1.5 w-7" />
					</MarqueeItem>
					<MarqueeItem>
						<ChromeBar className="size-3.5 shrink-0 rounded-sm" />
						<ChromeBar className="h-1.5 w-9" />
					</MarqueeItem>
				</div>

				<div className="flex items-center gap-1.5 opacity-80">
					<MarqueeItem>
						<ChromeBar className="size-3.5 shrink-0 rounded-full" />
						<ChromeBar tone="subtle" className="h-1.5 w-9" />
					</MarqueeItem>
					<MarqueeItem>
						<ChromeBar className="size-3.5 shrink-0 rounded-sm" />
						<ChromeBar tone="subtle" className="h-1.5 w-11" />
					</MarqueeItem>
					<MarqueeItem>
						<ChromeBar className="size-3.5 shrink-0 rounded-full" />
						<ChromeBar tone="subtle" className="h-1.5 w-8" />
					</MarqueeItem>
					<MarqueeItem>
						<ChromeBar className="size-3.5 shrink-0 rounded-sm" />
						<ChromeBar tone="subtle" className="h-1.5 w-10" />
					</MarqueeItem>
					<MarqueeItem>
						<ChromeBar className="size-3.5 shrink-0 rounded-full" />
						<ChromeBar tone="subtle" className="h-1.5 w-7" />
					</MarqueeItem>
				</div>

				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-linear-to-r from-secondary to-transparent" />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-linear-to-l from-secondary to-transparent" />
			</div>
		</div>
	);
}

export { MarqueeThumbnail };
