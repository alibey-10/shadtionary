import { createFileRoute } from "@tanstack/react-router";
import { MotionGallery } from "@/components/motion-gallery";
import previewCss from "@/components/transition-preview/transition-preview.css?url";
import {
	type TransitionItem,
	TransitionStage,
} from "@/components/transition-preview/transition-stage";
import data from "@/contstants/transitions.json";

const title = "Transitions · Shadtionary";
const description =
	"Live examples of the page and UI transitions used on the web — crossfade, shared element, circle reveal and more — with a prompt phrase ready to paste.";

export const Route = createFileRoute("/transitions")({
	component: TransitionsIndex,
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

const transitions = data.transitions as TransitionItem[];

function TransitionsIndex() {
	return (
		<MotionGallery
			title="Transitions"
			intro={`${transitions.length} transitions used on the web, for moving between pages, views and states. Each preview goes forward to the next view, then back.`}
			categories={data.categories}
			items={transitions}
			noun={{ one: "transition", other: "transitions" }}
			renderPreview={(item) => <TransitionStage item={item} />}
		/>
	);
}
