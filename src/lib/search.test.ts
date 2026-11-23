import { describe, expect, it } from "vitest";
import { normalizeQuery, search, searchIndex } from "@/lib/search";

const slugs = (query: string, kind: keyof ReturnType<typeof search>) =>
	search(normalizeQuery(query))[kind].map((item) => item.slug);

describe("search", () => {
	it("indexes every kind", () => {
		const kinds = new Set(searchIndex.map((item) => item.kind));
		expect([...kinds].sort()).toEqual([
			"comparison",
			"component",
			"style",
			"transition",
		]);
	});

	it("ranks an exact title first", () => {
		expect(slugs("sheet", "component")[0]).toBe("sheet");
		expect(slugs("Crossfade", "transition")[0]).toBe("crossfade");
	});

	it("finds items by alias", () => {
		expect(slugs("dissolve", "transition")).toContain("crossfade");
		expect(slugs("combination chart", "component")[0]).toBe("combo-chart");
	});

	it("matches comparisons through their entries", () => {
		expect(slugs("drawer", "comparison")).toContain("drawer-vs-sheet");
	});

	it("lists a whole kind by its name", () => {
		const transitions = searchIndex.filter((i) => i.kind === "transition");
		const styles = searchIndex.filter((i) => i.kind === "style");
		for (const query of ["transition", "Transitions"]) {
			expect(slugs(query, "transition")).toHaveLength(transitions.length);
		}
		for (const query of ["style", "styles "]) {
			expect(slugs(query, "style")).toHaveLength(styles.length);
		}
		expect(slugs("transitions", "transition")).toEqual(
			transitions.map((i) => i.slug),
		);
	});

	it("narrows a kind with another word", () => {
		const fades = slugs("fade transition", "transition");
		expect(fades).toContain("crossfade");
		expect(fades.length).toBeLessThan(
			searchIndex.filter((i) => i.kind === "transition").length,
		);
	});

	it("requires every word to match", () => {
		const all = Object.values(search(normalizeQuery("sheet zzzz"))).flat();
		expect(all).toHaveLength(0);
	});
});
