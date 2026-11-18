import type * as React from "react";

import type { GalleryItem } from "@/components/motion-gallery";
import { cn } from "@/lib/utils";

export type TransitionItem = GalleryItem;

type TransitionStageProps = {
	item: TransitionItem;
	className?: string;
};

type Vars = React.CSSProperties & Record<`--${string}`, string | number>;

const ROWS = [22, 44, 66];
const LINES = [
	{ top: 68, width: 88 },
	{ top: 76, width: 80 },
	{ top: 84, width: 58 },
];
const COLUMNS = 5;
const TILE_COLS = 8;
const TILE_ROWS = 4;

/**
 * Looping, read-only preview of a web transition between two abstract views:
 * A is a list page, B is a detail page. The first row's thumbnail (primary
 * color) becomes B's hero, which is what the shared element transition morphs.
 * All motion lives in `transition-preview.css`, keyed by `t-{slug}`; a few
 * slugs render extra layers (panels, tiles, a split copy of A).
 */
export function TransitionStage({ item, className }: TransitionStageProps) {
	const { slug } = item;

	return (
		<div
			role="img"
			aria-label={`${item.name} example`}
			className={cn("trx", `t-${slug}`, className)}
			style={{ "--base": "3s" } as Vars}
		>
			{slug === "split" ? (
				<>
					<ScreenA className="l" />
					<ScreenA className="r" />
				</>
			) : (
				<ScreenA />
			)}
			<ScreenB />
			{slug === "shared-element" ? <i className="morph" /> : null}
			{slug === "curtain" ? <i className="curtain" /> : null}
			{slug === "column-wipe"
				? Array.from({ length: COLUMNS }, (_, i) => (
						<i
							// biome-ignore lint/suspicious/noArrayIndexKey: fixed decorative list
							key={i}
							className="col"
							style={{ left: `${i * 20}%`, "--i": i } as Vars}
						/>
					))
				: null}
			{slug === "tile-reveal"
				? Array.from({ length: TILE_COLS * TILE_ROWS }, (_, i) => {
						const x = i % TILE_COLS;
						const y = Math.floor(i / TILE_COLS);
						const d = (x + y) / (TILE_COLS + TILE_ROWS - 2);
						return (
							<i
								// biome-ignore lint/suspicious/noArrayIndexKey: fixed decorative grid
								key={i}
								className="tile"
								style={
									{
										left: `${x * 12.5}%`,
										top: `${y * 25}%`,
										"--d": d.toFixed(3),
									} as Vars
								}
							/>
						);
					})
				: null}
		</div>
	);
}

function ScreenA({ className }: { className?: string }) {
	return (
		<div className={cn("scr a", className)}>
			<i className="head" />
			<i className="btn" />
			<div className="xp">
				<i style={{ left: "0%", top: "18%", width: "70%", height: "22%" }} />
				<i style={{ left: "0%", top: "56%", width: "50%", height: "22%" }} />
			</div>
			{ROWS.map((top, r) => (
				<div key={top} className={cn("row", `r${r}`)}>
					<i
						className={cn("th", r === 0 && "th0")}
						style={{ left: "6%", top: `${ROWS[0]}%` }}
					/>
					<i
						style={{
							left: "18%",
							top: `${ROWS[0] + 3}%`,
							width: "42%",
							height: "5%",
						}}
					/>
					<i
						style={{
							left: "18%",
							top: `${ROWS[0] + 10}%`,
							width: "26%",
							height: "4%",
						}}
					/>
				</div>
			))}
		</div>
	);
}

function ScreenB() {
	return (
		<div className="scr b">
			<i className="head" style={{ "--i": 0 } as Vars} />
			<i className="btn" style={{ "--i": 0 } as Vars} />
			<i
				className="hero"
				style={
					{
						left: "6%",
						top: "20%",
						width: "88%",
						height: "30%",
						"--i": 0,
					} as Vars
				}
			/>
			<i
				style={
					{
						left: "6%",
						top: "56%",
						width: "46%",
						height: "6%",
						"--fill": "var(--bar-strong)",
						"--i": 1,
					} as Vars
				}
			/>
			{LINES.map((line, i) => (
				<i
					key={line.top}
					style={
						{
							left: "6%",
							top: `${line.top}%`,
							width: `${line.width}%`,
							height: "4%",
							"--i": i + 2,
						} as Vars
					}
				/>
			))}
		</div>
	);
}
