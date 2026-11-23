import type { StyleItem } from "@/components/style-preview/style-stage";
import type { TransitionItem } from "@/components/transition-preview/transition-stage";
import comparisons from "@/contstants/comparisons.json";
import entries from "@/contstants/data.json";
import styles from "@/contstants/styles.json";
import transitions from "@/contstants/transitions.json";

export type SearchKind = "component" | "style" | "transition" | "comparison";

type Base = {
	slug: string;
	title: string;
	aliases: string[];
	/** Everything else worth matching: descriptions, prompts, categories. */
	body: string[];
};

export type SearchItem =
	| (Base & { kind: "component"; entry: (typeof entries)[number] })
	| (Base & { kind: "style"; item: StyleItem })
	| (Base & { kind: "transition"; item: TransitionItem })
	| (Base & { kind: "comparison"; comparison: (typeof comparisons)[number] });

const splitAka = (aka: string) =>
	aka
		.split(",")
		.map((name) => name.trim())
		.filter(Boolean);

const entryTitles = new Map(entries.map((e) => [e.slug, e.title]));
const styleCategories = new Map(styles.categories.map((c) => [c.id, c.name]));
const transitionCategories = new Map(
	transitions.categories.map((c) => [c.id, c.name]),
);

export const searchIndex: SearchItem[] = [
	...entries.map(
		(entry): SearchItem => ({
			kind: "component",
			slug: entry.slug,
			title: entry.title,
			aliases: entry.alsoCalled,
			body: [entry.slug, entry.description, ...entry.tags],
			entry,
		}),
	),
	...(styles.styles as StyleItem[]).map(
		(item): SearchItem => ({
			kind: "style",
			slug: item.slug,
			title: item.name,
			aliases: splitAka(item.aka),
			body: [item.desc, item.prompt, styleCategories.get(item.category) ?? ""],
			item,
		}),
	),
	...(transitions.transitions as TransitionItem[]).map(
		(item): SearchItem => ({
			kind: "transition",
			slug: item.slug,
			title: item.name,
			aliases: splitAka(item.aka),
			body: [
				item.desc,
				item.prompt,
				item.how ?? "",
				transitionCategories.get(item.category) ?? "",
			],
			item,
		}),
	),
	...comparisons.map(
		(comparison): SearchItem => ({
			kind: "comparison",
			slug: comparison.slug,
			title: comparison.title,
			aliases: [],
			body: [
				comparison.description,
				...comparison.entries.map((slug) => entryTitles.get(slug) ?? slug),
			],
			comparison,
		}),
	),
];

export function normalizeQuery(query: string): string {
	return query.trim().toLowerCase().replace(/\s+/g, " ");
}

/** Typing one of these lists every item of that kind, e.g. "transitions". */
const KIND_WORDS: Record<SearchKind, string[]> = {
	component: ["component", "components"],
	style: ["style", "styles"],
	transition: ["transition", "transitions"],
	comparison: ["comparison", "comparisons"],
};

const startsAWord = (text: string, query: string) =>
	text.startsWith(query) || text.includes(` ${query}`);

/**
 * Relevance of one item for a normalized query; 0 means no match.
 * Every word of the query must appear somewhere, and the closer the whole
 * query sits to the title, the higher the score. The kind's own name counts
 * as a word of every item, so "transitions" or "fade transition" work.
 */
export function scoreItem(item: SearchItem, query: string): number {
	const title = item.title.toLowerCase();
	const aliases = item.aliases.map((a) => a.toLowerCase());
	const kindWords = KIND_WORDS[item.kind];
	const haystack = [title, ...aliases, ...item.body, ...kindWords]
		.join(" ")
		.toLowerCase();

	if (!query.split(" ").every((word) => haystack.includes(word))) return 0;

	if (title === query) return 100;
	if (aliases.includes(query)) return 90;
	if (title.startsWith(query)) return 80;
	if (aliases.some((a) => a.startsWith(query))) return 70;
	if (startsAWord(title, query)) return 60;
	if (aliases.some((a) => startsAWord(a, query))) return 50;
	if (title.includes(query)) return 40;
	if (aliases.some((a) => a.includes(query))) return 30;
	if (kindWords.includes(query)) return 20;
	return 10;
}

export type SearchResults = Record<SearchKind, SearchItem[]>;

/** Matching items per kind, best first; ties keep their original order. */
export function search(query: string): SearchResults {
	const results: SearchResults = {
		component: [],
		style: [],
		transition: [],
		comparison: [],
	};
	const scored = searchIndex
		.map((item) => ({ item, score: scoreItem(item, query) }))
		.filter(({ score }) => score > 0)
		.sort((a, b) => b.score - a.score);

	for (const { item } of scored) results[item.kind].push(item);
	return results;
}
