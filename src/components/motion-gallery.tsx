import {
	Copy01Icon,
	PauseIcon,
	PlayIcon,
	Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type GalleryItem = {
	slug: string;
	category: string;
	name: string;
	aka: string;
	desc: string;
	prompt: string;
	how?: string;
};

export type GalleryCategory = {
	id: string;
	name: string;
	note: string;
};

export type Playback = {
	rate: number;
	paused: boolean;
};

type MotionGalleryProps<T extends GalleryItem> = {
	title: string;
	intro: React.ReactNode;
	categories: GalleryCategory[];
	items: T[];
	renderPreview: (item: T, playback: Playback) => React.ReactNode;
};

const RATES = [0.5, 1, 2] as const;

/**
 * Page layout shared by the Styles and Transitions pages: intro, a sticky
 * playback bar, then one bordered title row and card grid per category.
 */
export function MotionGallery<T extends GalleryItem>({
	title,
	intro,
	categories,
	items,
	renderPreview,
}: MotionGalleryProps<T>) {
	const [rate, setRate] = React.useState<number>(1);
	const [paused, setPaused] = React.useState(false);

	React.useEffect(() => {
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			setPaused(true);
		}
	}, []);

	const visible = categories.filter((c) =>
		items.some((item) => item.category === c.id),
	);

	return (
		<div className="flex min-h-full flex-1 flex-col px-3 md:px-10 lg:px-16">
			<div className="flex min-h-full flex-1 flex-col xl:border-x border-dashed">
				<header>
					<div className="py-10 md:py-12 md:max-w-5xl px-4 md:px-8 border-x mx-auto border-dashed">
						<h1 className="lg:text-4xl text-xl font-extrabold tracking-tight">
							{title}
						</h1>
						<p className="mt-2 max-w-2xl text-lg text-muted-foreground text-pretty">
							{intro}
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
					className="motion-gallery flex w-full flex-1 flex-col"
					data-paused={paused}
					style={{ "--rate": rate } as React.CSSProperties}
				>
					{visible.map((category, index) => {
						const group = items.filter((s) => s.category === category.id);
						const isLast = index === visible.length - 1;

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
										{group.map((item) => (
											<li
												key={item.slug}
												id={item.slug}
												className="scroll-mt-28"
											>
												<GalleryCard item={item}>
													{renderPreview(item, { rate, paused })}
												</GalleryCard>
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

function GalleryCard({
	item,
	children,
}: {
	item: GalleryItem;
	children: React.ReactNode;
}) {
	return (
		<Card className="h-full gap-0 rounded-2xl bg-secondary/60 p-[2.5px] ring-0 dark:bg-secondary/40">
			<div className="overflow-hidden rounded-xl border border-b-[3px]">
				{children}
			</div>
			<CardContent className="flex flex-1 flex-col gap-2 pt-4 pb-4">
				<CardTitle className="uppercase font-bold tracking-tight text-sm">
					{item.name}
				</CardTitle>
				<p className="text-xs text-muted-foreground">Also called: {item.aka}</p>
				<p className="text-sm text-muted-foreground text-pretty">{item.desc}</p>
				{item.how ? (
					<p className="text-xs text-muted-foreground">
						<span className="font-semibold text-foreground">Built with:</span>{" "}
						{item.how}
					</p>
				) : null}
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
