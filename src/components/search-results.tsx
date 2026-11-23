import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import * as React from "react";

import { ComparisonTitle } from "@/components/comparison-title";
import { LazyMount } from "@/components/lazy-mount";
import { PreviewChrome } from "@/components/preview-chrome";
import stylePreviewCss from "@/components/style-preview/style-preview.css?url";
import { StyleStage } from "@/components/style-preview/style-stage";
import thumbnails from "@/components/thumbnails";
import transitionPreviewCss from "@/components/transition-preview/transition-preview.css?url";
import { TransitionStage } from "@/components/transition-preview/transition-stage";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import type entries from "@/contstants/data.json";
import type { SearchItem, SearchKind, SearchResults } from "@/lib/search";
import { cn } from "@/lib/utils";

const cardClassName =
	"h-full rounded-2xl bg-secondary/60 p-[2.5px] ring-0 hover:bg-secondary dark:bg-secondary/40 hover:dark:bg-border";
const linkClassName =
	"block h-full rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50";

const GROUPS: {
	kind: SearchKind;
	label: string;
	viewAll?: "/styles" | "/transitions" | "/comparison";
}[] = [
	{ kind: "component", label: "Components" },
	{ kind: "style", label: "Styles", viewAll: "/styles" },
	{ kind: "transition", label: "Transitions", viewAll: "/transitions" },
	{ kind: "comparison", label: "Comparisons", viewAll: "/comparison" },
];

export function ComponentCard({ entry }: { entry: (typeof entries)[number] }) {
	const thumbnail = thumbnails[entry.slug as keyof typeof thumbnails];

	return (
		<Link
			to="/content/$slug"
			params={{ slug: entry.slug }}
			className={linkClassName}
		>
			<Card className={cardClassName}>
				<PreviewChrome
					className="overflow-hidden"
					contentClassName="py-3 min-h-48 lg:min-h-56"
				>
					<LazyMount rootMargin="10px 0px">
						<React.Fragment key={entry.slug}>{thumbnail}</React.Fragment>
					</LazyMount>
				</PreviewChrome>
				<CardContent className="pb-4">
					<CardTitle className="flex items-center justify-between gap-2 uppercase font-bold tracking-tight text-sm mb-2">
						{entry.title}
						<HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
					</CardTitle>
					<CardDescription className="line-clamp-2">
						{entry.description}
					</CardDescription>
				</CardContent>
			</Card>
		</Link>
	);
}

function MotionCard({
	item,
}: {
	item: Extract<SearchItem, { kind: "style" | "transition" }>;
}) {
	const preview =
		item.kind === "style" ? (
			<StyleStage item={item.item} rate={1} paused={false} />
		) : (
			<TransitionStage item={item.item} />
		);

	return (
		<Link
			to={item.kind === "style" ? "/styles" : "/transitions"}
			hash={item.slug}
			className={linkClassName}
		>
			<Card className={cn(cardClassName, "gap-0")}>
				<div className="overflow-hidden rounded-xl border border-b-[3px]">
					{preview}
				</div>
				<CardContent className="flex flex-col gap-2 pt-4 pb-4">
					<CardTitle className="flex items-center justify-between gap-2 uppercase font-bold tracking-tight text-sm">
						{item.title}
						<HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
					</CardTitle>
					<p className="text-xs text-muted-foreground">
						Also called: {item.item.aka}
					</p>
					<CardDescription className="line-clamp-2">
						{item.item.desc}
					</CardDescription>
				</CardContent>
			</Card>
		</Link>
	);
}

function ComparisonCard({
	item,
}: {
	item: Extract<SearchItem, { kind: "comparison" }>;
}) {
	return (
		<Link
			to="/comparison/$slug"
			params={{ slug: item.slug }}
			className={linkClassName}
		>
			<Card className={cardClassName}>
				<CardContent className="p-5">
					<CardTitle className="flex items-center justify-between gap-2 uppercase font-bold tracking-tight text-sm mb-2">
						<ComparisonTitle title={item.title} />
						<HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
					</CardTitle>
					<CardDescription className="whitespace-pre-line line-clamp-3">
						{item.comparison.description}
					</CardDescription>
				</CardContent>
			</Card>
		</Link>
	);
}

function ResultCard({ item }: { item: SearchItem }) {
	switch (item.kind) {
		case "component":
			return <ComponentCard entry={item.entry} />;
		case "style":
		case "transition":
			return <MotionCard item={item} />;
		case "comparison":
			return <ComparisonCard item={item} />;
	}
}

/**
 * Home page search results: one bordered title row and card grid per kind,
 * in the same layout as the category rows on the Styles and Transitions pages.
 * Kinds without matches are left out.
 */
export function SearchResultGroups({ results }: { results: SearchResults }) {
	const [paused, setPaused] = React.useState(false);

	React.useEffect(() => {
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
			setPaused(true);
		}
	}, []);

	const visible = GROUPS.filter((group) => results[group.kind].length > 0);

	return (
		<div className="motion-gallery" data-paused={paused}>
			{results.style.length > 0 ? (
				<link rel="stylesheet" href={stylePreviewCss} precedence="default" />
			) : null}
			{results.transition.length > 0 ? (
				<link
					rel="stylesheet"
					href={transitionPreviewCss}
					precedence="default"
				/>
			) : null}
			{visible.map((group, index) => {
				const items = results[group.kind];

				return (
					<section key={group.kind} aria-labelledby={`results-${group.kind}`}>
						<div
							className={cn("border-b border-dashed", index > 0 && "border-t")}
						>
							<div className="flex items-baseline gap-3 md:max-w-5xl mx-auto border-x border-dashed px-4 md:px-8 py-4">
								<h2
									id={`results-${group.kind}`}
									className="text-sm font-bold uppercase tracking-tight"
								>
									{group.label}
								</h2>
								<span className="text-sm text-muted-foreground tabular-nums">
									{items.length}
								</span>
								{group.viewAll ? (
									<Link
										to={group.viewAll}
										className="ml-auto flex items-center gap-1 rounded-sm text-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
									>
										View all
										<HugeiconsIcon
											icon={ArrowRight01Icon}
											className="size-3.5"
										/>
									</Link>
								) : null}
							</div>
						</div>
						<div className="md:max-w-5xl mx-auto border-x border-dashed px-4 md:px-8 py-10">
							<ul className="grid gap-4 sm:grid-cols-2 lg:gap-8 md:gap-6">
								{items.map((item) => (
									<li key={item.slug}>
										<ResultCard item={item} />
									</li>
								))}
							</ul>
						</div>
					</section>
				);
			})}
		</div>
	);
}
