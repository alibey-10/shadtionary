import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function SiteHeaderThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary">
				{/* Site header — full top band highlighted */}
				<div className="absolute inset-x-0 top-0 border-b bg-card/95 px-2 py-2 shadow-sm">
					<div className="rounded-md border border-dashed border-primary/50 px-1.5 py-1.5">
						<div className="flex items-center gap-1.5">
							<div className="flex items-center gap-1.5">
								<ChromeBar className="size-3.5 shrink-0 rounded-sm" />
								<ChromeBar className="h-2 w-8" />
							</div>

							<div className="ml-1 flex items-center gap-1.5">
								<ChromeBar className="h-1.5 w-7" />
								<ChromeBar tone="subtle" className="h-1.5 w-8" />
								<ChromeBar tone="subtle" className="h-1.5 w-6" />
								<ChromeBar tone="subtle" className="h-1.5 w-7" />
							</div>

							<div className="ml-auto flex items-center gap-1.5">
								<ChromeBar tone="subtle" className="h-4 w-7 rounded-md" />
								<ChromeBar className="h-4 w-9 rounded-md" />
							</div>
						</div>
					</div>
				</div>

				<div className="absolute inset-x-3 top-14 space-y-2 opacity-45">
					<ChromeBar tone="subtle" className="h-2 w-2/5" />
					<ChromeBar tone="subtle" className="h-1.5 w-full" />
					<ChromeBar tone="subtle" className="h-1.5 w-4/5" />
					<div className="mt-3 grid grid-cols-3 gap-1.5">
						<ChromeBar tone="subtle" className="h-10 rounded-md" />
						<ChromeBar tone="subtle" className="h-10 rounded-md" />
						<ChromeBar tone="subtle" className="h-10 rounded-md" />
					</div>
				</div>
			</div>
		</div>
	);
}

export { SiteHeaderThumbnail };
