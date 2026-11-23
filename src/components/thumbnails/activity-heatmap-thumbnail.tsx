import { cn } from "@/lib/utils";

const calendarRows = [
	{ id: "sun", cells: [0, 1, 0, 2, 1, 0, 3, 2, 0, 1, 0, 2, 1, 0] },
	{ id: "mon", cells: [2, 3, 1, 4, 2, 1, 0, 3, 4, 2, 1, 3, 4, 2] },
	{ id: "tue", cells: [1, 4, 3, 2, 4, 2, 1, 2, 3, 4, 3, 2, 4, 3] },
	{ id: "wed", cells: [3, 2, 4, 1, 3, 4, 2, 4, 2, 3, 4, 1, 3, 4] },
	{ id: "thu", cells: [2, 1, 2, 3, 2, 3, 1, 3, 1, 2, 3, 4, 2, 3] },
	{ id: "fri", cells: [1, 2, 0, 2, 1, 2, 0, 1, 2, 1, 2, 3, 1, 2] },
	{ id: "sat", cells: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 2, 0] },
] as const;

const levelOpacity = [0, 0.25, 0.5, 0.75, 1] as const;

function ActivityHeatmapThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full flex-col justify-center gap-2 overflow-hidden rounded-lg bg-secondary p-2.5">
				<div className="grid grid-cols-14 gap-1">
					{calendarRows.flatMap((row) =>
						row.cells.map((level, colIdx) => {
							const colId = `c${colIdx + 1}`;
							return level === 0 ? (
								<div
									key={`${row.id}-${colId}`}
									className="aspect-square rounded-[2px] bg-muted-foreground/15"
								/>
							) : (
								<div
									key={`${row.id}-${colId}`}
									className="aspect-square rounded-[2px]"
									style={{
										backgroundColor: "var(--chart-2)",
										opacity: levelOpacity[level],
									}}
								/>
							);
						}),
					)}
				</div>

				<div className="flex items-center justify-end gap-1">
					<div className="size-2 rounded-[2px] bg-muted-foreground/15" />
					{levelOpacity.slice(1).map((opacity) => (
						<div
							key={`scale-${opacity}`}
							className="size-2 rounded-[2px]"
							style={{ backgroundColor: "var(--chart-2)", opacity }}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export { ActivityHeatmapThumbnail };
