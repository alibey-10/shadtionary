import { LinkSquare01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ArticleLoadingSkeleton } from "@/components/article-loading-skeleton";
import { PreviewChrome } from "@/components/preview-chrome";
import thumbnails from "@/components/thumbnails";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import entries from "@/contstants/data.json";
import { urls } from "@/contstants/urls";
import { loadEntryBody } from "@/lib/content.functions";

const EntryBody = lazy(() =>
	import("@/components/entry-body").then((module) => ({
		default: module.EntryBody,
	})),
);

export const Route = createFileRoute("/content/$slug")({
	component: ContentPage,
	loader: async ({ params }) => {
		const entry = entries.find((item) => item.slug === params.slug);
		if (!entry) {
			throw notFound();
		}
		const body = await loadEntryBody({ data: { slug: params.slug } });
		return {
			entry,
			body,
		};
	},
	head: ({ loaderData }) => {
		const entry = loaderData?.entry;
		if (!entry) {
			return {};
		}

		const title = `${entry.title} · Shadtionary`;

		return {
			meta: [
				{ title },
				{ name: "description", content: entry.description },
				{ property: "og:title", content: title },
				{ property: "og:description", content: entry.description },
				...(entry.alsoCalled.length > 0
					? [{ name: "keywords", content: entry.alsoCalled.join(", ") }]
					: []),
			],
		};
	},
});

function EntryHeader({ entry }: { entry: (typeof entries)[number] }) {
	return (
		<>
			<Breadcrumb className="mb-6">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{entry.title}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="mb-6 space-y-2">
				<h1 className="text-2xl lg:text-3xl font-bold lg:font-extrabold tracking-tight">
					{entry.title}
				</h1>
				{entry.tags.length > 0 ? (
					<div className="flex flex-wrap items-center gap-2">
						{entry.tags.map((tag) => (
							<div key={tag} className="text-sky-500">
								{tag}
							</div>
						))}
					</div>
				) : null}
			</div>
		</>
	);
}

function ContentPage() {
	const { body, entry } = Route.useLoaderData();
	const preview = thumbnails[entry.slug as keyof typeof thumbnails];

	return (
		<div className="mx-auto w-full max-w-6xl px-3 md:px-6 py-12">
			<section className="lg:grid lg:grid-cols-[6fr_4fr] lg:items-start lg:gap-8">
				<article className="order-2 lg:order-1">
					<EntryHeader entry={entry} />
					{body ? (
						<Suspense fallback={<ArticleLoadingSkeleton />}>
							<EntryBody body={body} />
						</Suspense>
					) : (
						<p className="text-sm text-muted-foreground">Content not found</p>
					)}
				</article>

				<div className="order-1 mb-4 min-w-0 lg:sticky lg:top-20 lg:order-2 lg:mb-0 lg:self-start lg:pl-6">
					<h2 className="font-semibold mb-2 text-secondary-foreground text-sm">
						{`<${entry.title} />`}
					</h2>
					<PreviewChrome
						variant="entry"
						className="overflow-hidden"
						contentClassName="py-3 min-h-48 lg:min-h-56"
					>
						{preview}
					</PreviewChrome>
					<div className="py-4">
						<Button
							variant="secondary"
							className="w-full"
							nativeButton={false}
							size="lg"
							render={(props) => (
								<a
									{...props}
									href={urls.contentEdit(entry.slug)}
									target="_blank"
									rel="noopener noreferrer"
								>
									Edit on GitHub
									<HugeiconsIcon icon={LinkSquare01Icon} className="size-4" />
								</a>
							)}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
