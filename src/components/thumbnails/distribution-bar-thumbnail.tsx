import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

const segments = [
	{
		id: "seg-1",
		basis: "basis-[46%]",
		color: "var(--chart-1)",
		labelWidth: "w-8",
	},
	{
		id: "seg-2",
		basis: "basis-[28%]",
		color: "var(--chart-2)",
		labelWidth: "w-7",
	},
	{
		id: "seg-3",
		basis: "basis-[17%]",
		color: "var(--chart-3)",
		labelWidth: "w-6",
	},
	{
		id: "seg-4",
		basis: "basis-[9%]",
		color: "var(--chart-4)",
		labelWidth: "w-5",
	},
] as const;

function DistributionBarThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full flex-col justify-center gap-3 overflow-hidden rounded-lg bg-secondary p-3">
				<div className="space-y-1">
					<ChromeBar className="h-2 w-16" />
					<ChromeBar tone="subtle" className="h-1.5 w-10" />
				</div>

				<div className="flex h-5 w-full gap-1">
					{segments.map((segment) => (
						<div
							key={segment.id}
							className={cn("h-full rounded-sm", segment.basis)}
							style={{ backgroundColor: segment.color }}
						/>
					))}
				</div>

				<div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
					{segments.map((segment) => (
						<div
							key={`${segment.id}-legend`}
							className="flex items-center gap-1.5"
						>
							<span
								className="size-2 shrink-0 rounded-full"
								style={{ backgroundColor: segment.color }}
							/>
							<ChromeBar
								tone="subtle"
								className={cn("h-1.5", segment.labelWidth)}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export { DistributionBarThumbnail };
