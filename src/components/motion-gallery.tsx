import {
	Cancel01Icon,
	Copy01Icon,
	PauseIcon,
	PlayIcon,
	Search01Icon,
	Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as React from "react";

import { GithubCta } from "@/components/github-cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";
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
	/** Noun for the result count and placeholder, e.g. { one: "style", other: "styles" }. */
	noun: { one: string; other: string };
	renderPreview: (item: T, playback: Playback) => React.ReactNode;
};

const RATES = [0.5, 1, 2] as const;

function matchesQuery(
	item: GalleryItem,
	category: GalleryCategory | undefined,
	query: string,
): boolean {
	return [item.name, item.aka, item.desc, item.prompt, category?.name ?? ""]
		.join(" ")
		.toLowerCase()
		.includes(query);
}

/**
 * Page layout shared by the Styles and Transitions pages: intro, a search bar,
 * a sticky playback toolbar, then one bordered title row and card grid per
 * category.
 */
export function MotionGallery<T extends GalleryItem>({
	title,
	intro,
	categories,
	items,
	noun,
	renderPreview,
}: MotionGalleryProps<T>) {
	const [rate, setRate] = React.useState<number>(1);
	const [paused, setPaused] = React.useState(false);
	const [query, setQuery] = React.useState("");
	const normalizedQuery = query.trim().toLowerCase();

	React.useEffect(() => {
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			setPaused(true);
		}
	}, []);

	const categoryById = new Map(categories.map((c) => [c.id, c]));
	const filteredItems = normalizedQuery
		? items.filter((item) =>
				matchesQuery(item, categoryById.get(item.category), normalizedQuery),
			)
		: items;

	const visible = categories.filter((c) =>
		filteredItems.some((item) => item.category === c.id),
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
						<GithubCta />
					</div>
					<div className="border-t border-dashed">
						<InputGroup className="h-12 px-1 md:max-w-5xl mx-auto rounded-none border-y-0 md:px-6 border-dashed border-border focus-within:bg-input/40 duration-75 has-[[data-slot=input-group-control]:focus-visible]:border-border has-[[data-slot=input-group-control]:focus-visible]:ring-0 dark:bg-transparent dark:focus-within:bg-input/40">
							<InputGroupInput
								type="text"
								placeholder={`Search ${noun.other}...`}
								className="h-full ml-1.5"
								value={query}
								onChange={(event) => setQuery(event.target.value)}
								autoComplete="off"
							/>
							<InputGroupAddon>
								<HugeiconsIcon icon={Search01Icon} className="size-4" />
							</InputGroupAddon>
							<InputGroupAddon align="inline-end" className="pr-1">
								<InputGroupText className="tabular-nums">
									{filteredItems.length}{" "}
									{filteredItems.length === 1 ? noun.one : noun.other}
								</InputGroupText>
								{query ? (
									<InputGroupButton
										size="icon-sm"
										aria-label="Clear search"
										onClick={() => setQuery("")}
									>
										<HugeiconsIcon icon={Cancel01Icon} className="size-4" />
									</InputGroupButton>
								) : null}
							</InputGroupAddon>
						</InputGroup>
					</div>
				</header>
				<div className="sticky top-14 z-40 border-t border-dashed bg-background/80 backdrop-blur-sm">
					<div
						role="toolbar"
						aria-label="Playback"
						className="flex flex-wrap items-center gap-1 md:max-w-5xl mx-auto border-x border-b border-dashed px-4 md:px-8 py-2"
					>
						<fieldset
							aria-label="Playback speed"
							className="flex items-center gap-1"
						>
							<span className="mr-1 text-sm text-muted-foreground">Speed</span>
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
						<span aria-hidden className="mx-2 h-5 w-px bg-border" />
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
				<section
					className="motion-gallery flex w-full flex-1 flex-col"
					data-paused={paused}
					style={{ "--rate": rate } as React.CSSProperties}
				>
					{visible.length === 0 ? (
						<div className="w-full flex-1 md:max-w-5xl mx-auto border-x border-dashed px-4 md:px-8 py-10">
							<p className="text-center text-muted-foreground">
								No {noun.other} match &ldquo;{query}&rdquo;.
							</p>
						</div>
					) : null}
					{visible.map((category, index) => {
						const group = filteredItems.filter(
							(s) => s.category === category.id,
						);
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
