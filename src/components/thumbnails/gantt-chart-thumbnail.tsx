import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

const columnMarkers = ["25%", "50%", "75%"] as const;

const tasks = [
	{
		id: "task-1",
		labelWidth: "w-9",
		left: "4%",
		width: "36%",
		progress: "100%",
		color: "var(--chart-2)",
		milestone: false,
	},
	{
		id: "task-2",
		labelWidth: "w-10",
		left: "24%",
		width: "42%",
		progress: "68%",
		color: "var(--chart-1)",
		milestone: false,
	},
	{
		id: "task-3",
		labelWidth: "w-8",
		left: "36%",
		width: "38%",
		progress: "42%",
		color: "var(--chart-1)",
		milestone: false,
	},
	{
		id: "task-4",
		labelWidth: "w-11",
		left: "56%",
		width: "26%",
		progress: "20%",
		color: "var(--chart-3)",
		milestone: true,
	},
	{
		id: "task-5",
		labelWidth: "w-7",
		left: "70%",
		width: "26%",
		progress: "0%",
		color: "var(--chart-3)",
		milestone: false,
	},
] as const;

function GanttChartThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="flex aspect-5/3 w-full overflow-hidden rounded-lg bg-secondary p-2">
				<div className="flex w-12 shrink-0 flex-col justify-around border-r border-border/60 pr-2">
					{tasks.map((task) => (
						<ChromeBar
							key={`${task.id}-label`}
							className={cn("h-1.5", task.labelWidth)}
						/>
					))}
				</div>

				<div className="relative flex flex-1 flex-col justify-around pl-2">
					{columnMarkers.map((left) => (
						<div
							key={`col-${left}`}
							className="pointer-events-none absolute inset-y-0 border-l border-dashed border-border/70"
							style={{ left }}
						/>
					))}

					<div
						className="pointer-events-none absolute inset-y-0 z-10 w-px bg-primary/75"
						style={{ left: "58%" }}
					>
						<div className="absolute -top-0.5 -left-[2.5px] size-1.5 rounded-full bg-primary" />
					</div>

					{tasks.map((task) => (
						<div key={task.id} className="relative h-3.5 w-full">
							<div
								className="absolute inset-y-0 overflow-hidden rounded-full"
								style={{
									left: task.left,
									width: task.width,
								}}
							>
								<div
									className="absolute inset-0 opacity-25"
									style={{ backgroundColor: task.color }}
								/>
								<div
									className="relative h-full rounded-full opacity-90"
									style={{
										width: task.progress,
										backgroundColor: task.color,
									}}
								/>
							</div>
							{task.milestone ? (
								<div
									className="absolute top-1/2 z-20 size-2.5 -translate-y-1/2 rotate-45 rounded-[1px] border border-background"
									style={{
										left: "calc(82% + 4px)",
										backgroundColor: "var(--primary)",
									}}
								/>
							) : null}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export { GanttChartThumbnail };
