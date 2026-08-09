import type { ReactNode } from "react";

import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function LogoCell({
	className,
	children,
}: {
	className?: string;
	children?: ReactNode;
}) {
	return (
		<div
			className={cn(
				"flex aspect-3/2 items-center justify-center rounded-md border bg-card px-2",
				className,
			)}
		>
			{children}
		</div>
	);
}

function LogoCloudThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full flex-col justify-center gap-2.5 rounded-lg bg-secondary p-2.5">
				<div className="mx-auto space-y-1 text-center">
					<ChromeBar className="mx-auto h-1.5 w-16" />
					<ChromeBar tone="subtle" className="mx-auto h-1 w-24" />
				</div>

				<div className="grid grid-cols-4 gap-1.5">
					<LogoCell>
						<ChromeBar className="h-2.5 w-10 rounded-sm" />
					</LogoCell>
					<LogoCell>
						<div className="flex items-center gap-1">
							<ChromeBar className="size-3 shrink-0 rounded-sm" />
							<ChromeBar className="h-2 w-7" />
						</div>
					</LogoCell>
					<LogoCell>
						<ChromeBar className="h-2.5 w-9 rounded-sm" />
					</LogoCell>
					<LogoCell>
						<div className="flex items-center gap-1">
							<ChromeBar className="size-3 shrink-0 rounded-full" />
							<ChromeBar className="h-2 w-6" />
						</div>
					</LogoCell>
					<LogoCell>
						<div className="flex items-center gap-1">
							<ChromeBar className="size-3 shrink-0 rounded-sm" />
							<ChromeBar className="h-2 w-8" />
						</div>
					</LogoCell>
					<LogoCell>
						<ChromeBar className="h-2.5 w-11 rounded-sm" />
					</LogoCell>
					<LogoCell>
						<div className="flex items-center gap-1">
							<ChromeBar className="size-3 shrink-0 rounded-full" />
							<ChromeBar className="h-2 w-7" />
						</div>
					</LogoCell>
					<LogoCell>
						<ChromeBar className="h-2.5 w-8 rounded-sm" />
					</LogoCell>
				</div>
			</div>
		</div>
	);
}

export { LogoCloudThumbnail };
