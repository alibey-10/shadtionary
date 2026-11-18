import type * as React from "react";

import type { GalleryItem } from "@/components/motion-gallery";
import { cn } from "@/lib/utils";

export type TransitionItem = GalleryItem;

type TransitionStageProps = {
	item: TransitionItem;
	className?: string;
};

const ROWS = [22, 44, 66];
const LINES = [
	{ top: 66, width: 88 },
	{ top: 74, width: 80 },
	{ top: 82, width: 58 },
];

/**
 * Looping, read-only preview of a web transition between two abstract views:
 * A is a list page, B is a detail page. The first row's thumbnail (primary
 * color) becomes B's hero, which is what the shared element transition morphs.
 * All motion lives in `transition-preview.css`, keyed by `t-{slug}`.
 */
export function TransitionStage({ item, className }: TransitionStageProps) {
	return (
		<div
			role="img"
			aria-label={`${item.name} example`}
			className={cn("trx", `t-${item.slug}`, className)}
			style={{ "--base": "3s" } as React.CSSProperties}
		>
			<div className="scr a">
				<i className="head" />
				<i className="btn" />
				{ROWS.map((top, r) => (
					<RowChrome key={top} top={top} first={r === 0} />
				))}
			</div>
			<div className="scr b">
				<i className="btn" style={{ "--i": 0 } as React.CSSProperties} />
				<i
					className="hero"
					style={
						{
							left: "6%",
							top: "7%",
							width: "88%",
							height: "40%",
							"--i": 0,
						} as React.CSSProperties
					}
				/>
				<i
					style={
						{
							left: "6%",
							top: "53%",
							width: "46%",
							height: "6%",
							"--fill": "var(--bar-strong)",
							"--i": 1,
						} as React.CSSProperties
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
							} as React.CSSProperties
						}
					/>
				))}
			</div>
			<i className="morph" />
			<i className="curtain" />
		</div>
	);
}

function RowChrome({ top, first }: { top: number; first: boolean }) {
	return (
		<>
			<i
				className={cn("th", first && "th0")}
				style={{ left: "6%", top: `${top}%` }}
			/>
			<i
				style={{ left: "18%", top: `${top + 3}%`, width: "42%", height: "5%" }}
			/>
			<i
				style={{ left: "18%", top: `${top + 10}%`, width: "26%", height: "4%" }}
			/>
		</>
	);
}
