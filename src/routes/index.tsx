import {
	Cancel01Icon,
	LinkSquare01Icon,
	Search01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { GithubCta } from "@/components/github-cta";
import { ComponentCard, SearchResultGroups } from "@/components/search-results";
import { Button } from "@/components/ui/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";
import entries from "@/contstants/data.json";
import { urls } from "@/contstants/urls";
import { normalizeQuery, search, searchIndex } from "@/lib/search";

const title = "Shadtionary - The Visual Dictionary for Web UI";
const description =
	"The visual dictionary for web UI, covering components, styles, and transitions. Learn the right names so you can steer AI agents with precise vocabulary.";

type HomeSearch = { q?: string };

export const Route = createFileRoute("/")({
	component: Home,
	validateSearch: (search: Record<string, unknown>): HomeSearch => ({
		q: typeof search.q === "string" && search.q ? search.q : undefined,
	}),
	head: () => ({
		meta: [
			{ title },
			{ name: "description", content: description },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: description },
		],
	}),
});

function Home() {
	const { q = "" } = Route.useSearch();
	const navigate = Route.useNavigate();
	const [query, setQuery] = useState(q);

	// Follow the URL when it changes from outside the input (back / forward).
	useEffect(() => {
		setQuery((current) => (current === q ? current : q));
	}, [q]);

	const updateQuery = (value: string) => {
		setQuery(value);
		navigate({
			search: { q: value || undefined },
			replace: true,
			resetScroll: false,
		});
	};

	const normalizedQuery = normalizeQuery(query);
	const results = normalizedQuery ? search(normalizedQuery) : null;
	const count = results
		? Object.values(results).reduce((sum, items) => sum + items.length, 0)
		: searchIndex.length;

	return (
		<div className="px-3 md:px-10 lg:px-16">
			<div className="xl:border-x border-dashed">
				<header>
					<div className="py-10 md:py-12 md:max-w-5xl px-4 md:px-8 border-x mx-auto border-dashed">
						<h1 className="lg:text-4xl text-xl font-extrabold tracking-tight">
							The Visual Dictionary for Web UI
						</h1>
						<p className="mt-2 max-w-2xl text-lg text-muted-foreground text-pretty">
							Covering components, styles, and transitions
						</p>
						<GithubCta />
					</div>
					<div className="border-y border-dashed">
						<InputGroup className="h-12 px-1 md:max-w-5xl mx-auto rounded-none border-y-0 md:px-6 border-dashed border-border focus-within:bg-input/40 duration-75 has-[[data-slot=input-group-control]:focus-visible]:border-border has-[[data-slot=input-group-control]:focus-visible]:ring-0 dark:bg-transparent dark:focus-within:bg-input/40">
							<InputGroupInput
								type="text"
								aria-label="Search components, styles, transitions and comparisons"
								placeholder="Search components, styles, transitions..."
								className="h-full ml-1.5"
								value={query}
								onChange={(event) => updateQuery(event.target.value)}
								autoComplete="off"
							/>
							<InputGroupAddon>
								<HugeiconsIcon icon={Search01Icon} className="size-4" />
							</InputGroupAddon>
							<InputGroupAddon align="inline-end" className="pr-1">
								<InputGroupText className="tabular-nums" aria-live="polite">
									{count} {count === 1 ? "item" : "items"}
								</InputGroupText>
								{query ? (
									<InputGroupButton
										size="icon-sm"
										aria-label="Clear search"
										onClick={() => updateQuery("")}
									>
										<HugeiconsIcon icon={Cancel01Icon} className="size-4" />
									</InputGroupButton>
								) : null}
							</InputGroupAddon>
						</InputGroup>
					</div>
				</header>
				{results && count > 0 ? (
					<SearchResultGroups results={results} />
				) : (
					<section className="md:max-w-5xl mx-auto py-10 border-x border-dashed px-4 md:px-8">
						{results ? (
							<div className="flex flex-col items-center gap-4">
								<p className="text-center text-muted-foreground">
									Nothing matches &ldquo;{query}&rdquo;.
								</p>
								<Button
									variant="default"
									nativeButton={false}
									size="lg"
									render={(props) => (
										<a
											{...props}
											href={urls.githubNewIssue}
											target="_blank"
											rel="noopener noreferrer"
										>
											Request UI element
											<HugeiconsIcon
												icon={LinkSquare01Icon}
												className="size-3.5"
											/>
										</a>
									)}
								/>
							</div>
						) : (
							<ul className="grid gap-4 sm:grid-cols-2 lg:gap-8 md:gap-6">
								{entries.map((entry) => (
									<li key={entry.slug}>
										<ComponentCard entry={entry} />
									</li>
								))}
							</ul>
						)}
					</section>
				)}
			</div>
		</div>
	);
}
