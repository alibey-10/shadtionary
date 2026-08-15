import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

const bars = [
	{ id: "a", height: "h-[36%]" },
	{ id: "b", height: "h-[58%]" },
	{ id: "c", height: "h-[44%]" },
	{ id: "d", height: "h-[78%]" },
	{ id: "e", height: "h-[52%]" },
	{ id: "f", height: "h-[88%]" },
	{ id: "g", height: "h-[64%]" },
	{ id: "h", height: "h-[42%]" },
] as const;

function BarChartThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-2">
				<div className="relative flex min-h-0 w-full">
					<div className="pointer-events-none absolute inset-x-0 top-1/4 border-t border-dashed border-border/80" />
					<div className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-dashed border-border/80" />
					<div className="pointer-events-none absolute inset-x-0 top-3/4 border-t border-dashed border-border/80" />
					<div className="relative z-10 flex h-full w-full items-end gap-1 px-0.5 pb-0.5">
						{bars.map((bar) => (
							<ChromeBar
								key={bar.id}
								className={cn(
									"min-w-0 flex-1 rounded-t-sm rounded-b-none",
									bar.height,
								)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export { BarChartThumbnail };
