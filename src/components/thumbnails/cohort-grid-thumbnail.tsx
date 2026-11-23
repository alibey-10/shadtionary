import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

const periodColumns = ["p0", "p1", "p2", "p3", "p4", "p5"] as const;

const cohorts = [
	{ id: "c1", opacities: [0.9, 0.68, 0.52, 0.4, 0.3, 0.22] },
	{ id: "c2", opacities: [0.9, 0.72, 0.55, 0.44, 0.34] },
	{ id: "c3", opacities: [0.9, 0.66, 0.5, 0.38] },
	{ id: "c4", opacities: [0.9, 0.74, 0.58] },
	{ id: "c5", opacities: [0.9, 0.68] },
] as const;

function CohortGridThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full flex-col justify-center gap-1 overflow-hidden rounded-lg bg-secondary p-2.5">
				<div className="flex items-center gap-1.5 pb-0.5">
					<div className="w-8 shrink-0" />
					<div className="grid flex-1 grid-cols-6 gap-1">
						{periodColumns.map((col) => (
							<div key={col} className="flex justify-center">
								<ChromeBar tone="subtle" className="h-1 w-3.5" />
							</div>
						))}
					</div>
				</div>

				{cohorts.map((cohort) => (
					<div key={cohort.id} className="flex items-center gap-1.5">
						<ChromeBar className="h-1.5 w-8 shrink-0" />
						<div className="grid flex-1 grid-cols-6 gap-1">
							{periodColumns.map((col, colIndex) => {
								const opacity = cohort.opacities[colIndex];
								return opacity !== undefined ? (
									<div
										key={`${cohort.id}-${col}`}
										className="h-4 rounded-[3px]"
										style={{
											backgroundColor: "var(--primary)",
											opacity,
										}}
									/>
								) : (
									<div
										key={`${cohort.id}-${col}`}
										className="h-4 rounded-[3px] bg-background/30"
									/>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export { CohortGridThumbnail };
