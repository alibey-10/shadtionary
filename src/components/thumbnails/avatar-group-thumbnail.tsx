import { ChromeBar } from "@/components/chrome-bar";
import { cn } from "@/lib/utils";

function AvatarGroupThumbnail({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none w-full select-none", className)}
		>
			<div className="relative w-fit mx-auto ">
				<div className="flex w-full max-w-[9.5rem] items-center gap-2.5">
					<div className="flex items-center pl-0.5">
						<ChromeBar className="z-10 size-8 shrink-0 rounded-full ring-2 ring-background" />
						<ChromeBar
							tone="subtle"
							className="z-20 -ml-2.5 size-8 shrink-0 rounded-full ring-2 ring-background"
						/>
						<ChromeBar className="z-30 -ml-2.5 size-8 shrink-0 rounded-full ring-2 ring-background" />
						<div className="bg-background z-40 -ml-2.5 rounded-full ">
							<div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border/50 bg-muted ring-2 ring-background">
								<ChromeBar
									tone="subtle"
									className="h-1 w-2.5 rounded-[1px] opacity-80"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { AvatarGroupThumbnail };
