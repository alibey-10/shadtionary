import * as React from "react";

import { cn } from "@/lib/utils";

export type StyleItem = {
	slug: string;
	category: string;
	base: number;
	cls?: string;
	name: string;
	aka: string;
	desc: string;
	prompt: string;
	html: string;
};

type StyleStageProps = {
	item: StyleItem;
	rate: number;
	paused: boolean;
	className?: string;
};

/**
 * Looping, non-interactive preview of a visual style. Most styles are pure CSS
 * (see `style-preview.css`); `dither` and `led` draw to a canvas each frame.
 * The markup is static, authored content from `styles.json`.
 */
export function StyleStage({ item, rate, paused, className }: StyleStageProps) {
	const ref = React.useRef<HTMLDivElement>(null);
	const rateRef = React.useRef(rate);
	const pausedRef = React.useRef(paused);
	rateRef.current = rate;
	pausedRef.current = paused;

	React.useEffect(() => {
		const canvas = ref.current?.querySelector<HTMLCanvasElement>("canvas.cv");
		const kind = canvas?.dataset.kind as CanvasKind | undefined;
		if (!canvas || !kind || !(kind in DRAW)) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let visible = false;
		let raf = 0;
		let last = performance.now();
		let t = 0;

		const frame = (now: number) => {
			const dt = Math.max(0, Math.min(0.1, (now - last) / 1000));
			last = now;
			if (!pausedRef.current) t += dt * rateRef.current;
			DRAW[kind](ctx, t);
			raf = visible ? requestAnimationFrame(frame) : 0;
		};

		DRAW[kind](ctx, 0);

		const observer = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
			if (visible && !raf) {
				last = performance.now();
				raf = requestAnimationFrame(frame);
			}
		});
		observer.observe(canvas);

		return () => {
			observer.disconnect();
			cancelAnimationFrame(raf);
		};
	}, []);

	return (
		<div
			ref={ref}
			role="img"
			aria-label={`${item.name} example`}
			className={cn("sty", `s-${item.slug}`, item.cls, className)}
			style={{ "--base": `${item.base}s` } as React.CSSProperties}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static, authored preview markup
			dangerouslySetInnerHTML={{ __html: item.html }}
		/>
	);
}

type CanvasKind = "dither" | "led";

const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

let ledText: boolean[][] | null = null;

function getLedText() {
	if (ledText) return ledText;
	const o = document.createElement("canvas");
	const x = o.getContext("2d");
	if (!x) return [];
	const text = "SHADTIONARY  *  ";
	x.font = "bold 11px monospace";
	const w = Math.ceil(x.measureText(text).width);
	o.width = w;
	o.height = 13;
	x.font = "bold 11px monospace";
	x.fillStyle = "#fff";
	x.textBaseline = "top";
	x.fillText(text, 0, 1);
	const d = x.getImageData(0, 0, w, 13).data;
	const lit: boolean[][] = [];
	for (let c = 0; c < w; c++) {
		const col: boolean[] = [];
		for (let r = 0; r < 13; r++) col.push(d[(r * w + c) * 4 + 3] > 110);
		lit.push(col);
	}
	ledText = lit;
	return lit;
}

const DRAW: Record<
	CanvasKind,
	(x: CanvasRenderingContext2D, t: number) => void
> = {
	dither(x, t) {
		const W = 160;
		const H = 90;
		const img = x.createImageData(W, H);
		const d = img.data;
		let lx = Math.cos(t * 0.9);
		let ly = -0.55;
		let lz = Math.sin(t * 0.9) * 0.6 + 0.6;
		const n = Math.hypot(lx, ly, lz);
		lx /= n;
		ly /= n;
		lz /= n;
		const r = 24;
		const cx = 80;
		const cy = 44 - Math.abs(Math.sin(t * 1.8)) * 14;
		for (let y = 0; y < H; y++) {
			for (let X = 0; X < W; X++) {
				const dx = (X - cx) / r;
				const dy = (y - cy) / r;
				const q = dx * dx + dy * dy;
				let v: number;
				if (q < 1) {
					const nz = Math.sqrt(1 - q);
					v = Math.max(0, dx * lx + dy * ly + nz * lz) * 0.95 + 0.04;
				} else if (y > 68) {
					const sx = (X - cx) / (r * (1.25 - (68 - cy) / 60));
					const sy = (y - 72) / 4;
					v = sx * sx + sy * sy < 1 ? 0.12 : 0.72 - (y - 68) * 0.012;
				} else {
					v = 0.96 - y * 0.004;
				}
				const on = v > (BAYER[(y & 3) * 4 + (X & 3)] + 0.5) / 16;
				const i = (y * W + X) * 4;
				const c = on ? [233, 230, 218] : [24, 24, 24];
				d[i] = c[0];
				d[i + 1] = c[1];
				d[i + 2] = c[2];
				d[i + 3] = 255;
			}
		}
		x.putImageData(img, 0, 0);
	},
	led(x, t) {
		const text = getLedText();
		const cols = 64;
		const rows = 13;
		const cs = 5;
		const oy = (90 - rows * cs) / 2;
		x.fillStyle = "#120905";
		x.fillRect(0, 0, 320, 90);
		const tw = text.length;
		if (!tw) return;
		const off = Math.floor(t * 16) % tw;
		for (let i = 0; i < cols; i++) {
			const col = text[(i + off) % tw];
			for (let r = 0; r < rows; r++) {
				x.beginPath();
				x.arc(i * cs + cs / 2, oy + r * cs + cs / 2, col[r] ? 2.1 : 1.6, 0, 7);
				x.fillStyle = col[r] ? "#ffa23a" : "#3a1c0b";
				x.fill();
			}
		}
	},
};
