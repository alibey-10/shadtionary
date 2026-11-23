import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

const matrixRows = [
	{ id: "r1", rowWidth: "w-4", levels: [1, 1, 2, 3, 2, 1, 0] },
	{ id: "r2", rowWidth: "w-5", levels: [1, 2, 3, 4, 3, 2, 1] },
	{ id: "r3", rowWidth: "w-4", levels: [2, 3, 4, 4, 4, 2, 1] },
	{ id: "r4", rowWidth: "w-6", levels: [1, 2, 3, 3, 2, 1, 0] },
	{ id: "r5", rowWidth: "w-4", levels: [0, 1, 2, 2, 1, 1, 0] },
] as const;

const cols = ["c1", "c2", "c3", "c4", "c5", "c6", "c7"] as const;
const intensityOpacity = [0.1, 0.25, 0.45, 0.7, 0.95] as const;

function HeatmapThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full flex-col justify-center gap-1.5 overflow-hidden rounded-lg bg-secondary p-2.5">
				<div className="flex flex-1 flex-col justify-center gap-1">
					{matrixRows.map((row) => (
						<div key={row.id} className="flex items-center gap-1.5">
							<div className="flex w-6 shrink-0 justify-end">
								<ChromeBar
									tone="subtle"
									className={cn("h-1.5", row.rowWidth)}
								/>
							</div>
							<div className="grid flex-1 grid-cols-7 gap-1">
								{row.levels.map((level, colIdx) => (
									<div
										key={`${row.id}-${cols[colIdx]}`}
										className="h-4.5 rounded-sm"
										style={{
											backgroundColor: "var(--primary)",
											opacity: intensityOpacity[level],
										}}
									/>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="flex items-center gap-1.5">
					<div className="w-6 shrink-0" />
					<div className="grid flex-1 grid-cols-7 gap-1">
						{cols.map((col) => (
							<div key={col} className="flex justify-center">
								<ChromeBar tone="subtle" className="h-1 w-3.5" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export { HeatmapThumbnail };
