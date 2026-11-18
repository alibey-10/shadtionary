import { createFileRoute } from "@tanstack/react-router";
import { MotionGallery } from "@/components/motion-gallery";
import previewCss from "@/components/style-preview/style-preview.css?url";
import {
	type StyleItem,
	StyleStage,
} from "@/components/style-preview/style-stage";
import data from "@/contstants/styles.json";

const title = "Styles · Shadtionary";
const description =
	"Live examples of visual styles for AI animation and video tools — the overall look, with a prompt phrase ready to paste.";

export const Route = createFileRoute("/styles")({
	component: StylesIndex,
	head: () => ({
		meta: [
			{ title },
			{ name: "description", content: description },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
		],
		links: [{ rel: "stylesheet", href: previewCss }],
	}),
});

const styles = data.styles as StyleItem[];

function StylesIndex() {
	return (
		<MotionGallery
			title="Styles"
			intro={`${styles.length} visual styles to name when you prompt an AI animation or video tool. Each preview loops, and the phrase underneath is ready to paste.`}
			categories={data.categories}
			items={styles}
			renderPreview={(item, { rate, paused }) => (
				<StyleStage item={item} rate={rate} paused={paused} />
			)}
		/>
	);
}
