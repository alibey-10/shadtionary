import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

const rows = [
	{
		id: "row-1",
		barWidth: "100%",
		labelWidth: "w-16",
		valueWidth: "w-7",
		top: true,
	},
	{
		id: "row-2",
		barWidth: "74%",
		labelWidth: "w-14",
		valueWidth: "w-6",
		top: false,
	},
	{
		id: "row-3",
		barWidth: "54%",
		labelWidth: "w-12",
		valueWidth: "w-6",
		top: false,
	},
	{
		id: "row-4",
		barWidth: "34%",
		labelWidth: "w-16",
		valueWidth: "w-5",
		top: false,
	},
	{
		id: "row-5",
		barWidth: "18%",
		labelWidth: "w-10",
		valueWidth: "w-5",
		top: false,
	},
] as const;

function BarListThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full flex-col justify-center gap-1.5 overflow-hidden rounded-lg bg-secondary p-2.5">
				{rows.map((row) => (
					<div key={row.id} className="flex items-center gap-2">
						<div className="relative flex h-4.5 flex-1 items-center overflow-hidden rounded-sm bg-background/40 px-2">
							<div
								className={cn(
									"absolute inset-y-0 left-0 rounded-sm",
									row.top ? "bg-primary/30" : "bg-primary/20",
								)}
								style={{ width: row.barWidth }}
							/>
							<ChromeBar
								className={cn("relative z-10 h-1.5", row.labelWidth)}
							/>
						</div>
						<ChromeBar
							tone="subtle"
							className={cn("h-1.5 shrink-0", row.valueWidth)}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export { BarListThumbnail };
