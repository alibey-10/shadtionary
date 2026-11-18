import {
	Copy01Icon,
	PauseIcon,
	PlayIcon,
	Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import previewCss from "@/components/style-preview/style-preview.css?url";
import {
	type StyleItem,
	StyleStage,
} from "@/components/style-preview/style-stage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import data from "@/contstants/styles.json";
import { cn } from "@/lib/utils";

const title = "Styles · Shadtionary";
const description =
	"Live examples of visual styles for AI animation and video tools — the overall look, with a prompt phrase ready to paste.";

export const Route = createFileRoute("/styles")({
	component: StylesIndex,
	head: () => ({
		meta: [
			{ title },
			{ name: "description", content: description },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
		],
		links: [{ rel: "stylesheet", href: previewCss }],
	}),
});

const styles = data.styles as StyleItem[];
const RATES = [0.5, 1, 2] as const;

function StylesIndex() {
	const [rate, setRate] = React.useState<number>(1);
	const [paused, setPaused] = React.useState(false);

	React.useEffect(() => {
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			setPaused(true);
		}
	}, []);

	return (
		<div className="flex min-h-full flex-1 flex-col px-3 md:px-10 lg:px-16">
			<div className="flex min-h-full flex-1 flex-col xl:border-x border-dashed">
				<header>
					<div className="py-10 md:py-12 md:max-w-5xl px-4 md:px-8 border-x mx-auto border-dashed">
						<h1 className="lg:text-4xl text-xl font-extrabold tracking-tight">
							Styles
						</h1>
						<p className="mt-2 max-w-2xl text-lg text-muted-foreground text-pretty">
							{styles.length} visual styles to name when you prompt an AI
							animation or video tool. Each preview loops, and the phrase
							underneath is ready to paste.
						</p>
					</div>
					<div className="sticky top-14 z-40 border-y border-dashed bg-background/80 backdrop-blur-sm">
						<div className="flex flex-wrap items-center justify-between gap-2 md:max-w-5xl mx-auto border-x border-dashed px-4 md:px-8 py-2">
							<fieldset
								aria-label="Playback speed"
								className="flex items-center gap-1"
							>
								<span className="mr-1 text-sm text-muted-foreground">
									Speed
								</span>
								{RATES.map((r) => (
									<Button
										key={r}
										size="sm"
										variant={rate === r ? "secondary" : "ghost"}
										aria-pressed={rate === r}
										onClick={() => setRate(r)}
										className="tabular-nums"
									>
										{r}×
									</Button>
								))}
							</fieldset>
							<Button
								size="sm"
								variant="outline"
								onClick={() => setPaused((p) => !p)}
							>
								<HugeiconsIcon
									icon={paused ? PlayIcon : PauseIcon}
									className="size-4"
								/>
								{paused ? "Play all" : "Pause all"}
							</Button>
						</div>
					</div>
				</header>
				<section
					className="style-previews flex w-full flex-1 flex-col"
					data-paused={paused}
					style={{ "--rate": rate } as React.CSSProperties}
				>
					{data.categories.map((category, index) => {
						const items = styles.filter((s) => s.category === category.id);
						if (items.length === 0) return null;
						const isLast = index === data.categories.length - 1;

						return (
							<div
								key={category.id}
								id={category.id}
								className={cn("flex flex-col scroll-mt-28", isLast && "flex-1")}
							>
								<div
									className={cn(
										"border-b border-dashed",
										index > 0 && "border-t",
									)}
								>
									<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 md:max-w-5xl mx-auto border-x border-dashed px-4 md:px-8 py-4">
										<h2 className="text-sm font-bold uppercase tracking-tight">
											{category.name}
										</h2>
										<p className="text-sm text-muted-foreground">
											{category.note}
										</p>
									</div>
								</div>
								<div className="w-full flex-1 md:max-w-5xl mx-auto border-x border-dashed px-4 md:px-8 py-10">
									<ul className="grid gap-4 sm:grid-cols-2 lg:gap-8 md:gap-6">
										{items.map((item) => (
											<li
												key={item.slug}
												id={item.slug}
												className="scroll-mt-28"
											>
												<StyleCard item={item} rate={rate} paused={paused} />
											</li>
										))}
									</ul>
								</div>
							</div>
						);
					})}
				</section>
			</div>
		</div>
	);
}

function StyleCard({
	item,
	rate,
	paused,
}: {
	item: StyleItem;
	rate: number;
	paused: boolean;
}) {
	return (
		<Card className="h-full gap-0 rounded-2xl bg-secondary/60 p-[2.5px] ring-0 dark:bg-secondary/40">
			<div className="overflow-hidden rounded-xl border border-b-[3px]">
				<StyleStage item={item} rate={rate} paused={paused} />
			</div>
			<CardContent className="flex flex-1 flex-col gap-2 pt-4 pb-4">
				<CardTitle className="uppercase font-bold tracking-tight text-sm">
					{item.name}
				</CardTitle>
				<p className="text-xs text-muted-foreground">Also called: {item.aka}</p>
				<p className="text-sm text-muted-foreground text-pretty">{item.desc}</p>
				<PromptCopy prompt={item.prompt} className="mt-auto pt-2" />
			</CardContent>
		</Card>
	);
}

function PromptCopy({
	prompt,
	className,
}: {
	prompt: string;
	className?: string;
}) {
	const [copied, setCopied] = React.useState(false);

	React.useEffect(() => {
		if (!copied) return;
		const id = setTimeout(() => setCopied(false), 1400);
		return () => clearTimeout(id);
	}, [copied]);

	return (
		<div className={cn("flex items-stretch gap-2", className)}>
			<code className="flex-1 rounded-lg border border-dashed bg-background/60 px-2.5 py-1.5 font-mono text-xs leading-relaxed">
				{prompt}
			</code>
			<Button
				size="icon-sm"
				variant="outline"
				aria-label={copied ? "Copied" : "Copy prompt"}
				className="self-start"
				onClick={async () => {
					try {
						await navigator.clipboard.writeText(prompt);
						setCopied(true);
					} catch {
						setCopied(false);
					}
				}}
			>
				<HugeiconsIcon
					icon={copied ? Tick02Icon : Copy01Icon}
					className="size-4"
				/>
			</Button>
		</div>
	);
}
