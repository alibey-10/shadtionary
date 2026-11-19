import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import cn from "cnfast";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { NotFound } from "@/components/not-found";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeHotkey } from "@/hooks/use-theme";
import { getOriginServerFn } from "@/lib/site";
import { getThemeServerFn } from "@/lib/theme";
import appCss from "../styles.css?url";

const siteDescription =
	"A visual dictionary of UI components. Learn the names of UI elements and their parts, so you can steer AI agents with precise vocabulary.";

const ogImageAlt = "Shadtionary — The Visual Dictionary for Web UI";

export const Route = createRootRoute({
	head: ({ match, matches }) => {
		// Social crawlers need absolute URLs, so build them from the origin the
		// page is served on (localhost, preview deploys, or production).
		const { origin } = match.context;
		const pathname = matches.at(-1)?.pathname ?? "/";
		const ogImageUrl = `${origin}/og-image.png`;

		return {
			meta: [
				{
					charSet: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					title: "Shadtionary",
				},
				{
					name: "description",
					content: siteDescription,
				},
				{
					property: "og:title",
					content: "Shadtionary",
				},
				{
					property: "og:description",
					content: siteDescription,
				},
				{ property: "og:type", content: "website" },
				{ property: "og:url", content: `${origin}${pathname}` },
				{ property: "og:site_name", content: "Shadtionary" },
				{ property: "og:image", content: ogImageUrl },
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ property: "og:image:type", content: "image/png" },
				{ property: "og:image:alt", content: ogImageAlt },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:site", content: "@alibey_10" },
				{ name: "twitter:creator", content: "@alibey_10" },
				{ name: "twitter:title", content: "Shadtionary" },
				{ name: "twitter:description", content: siteDescription },
				{ name: "twitter:image", content: ogImageUrl },
				{ name: "twitter:image:alt", content: ogImageAlt },
			],
			links: [
				{
					rel: "stylesheet",
					href: appCss,
				},
			],
			scripts: [
				{
					src: "https://analytics.ahrefs.com/analytics.js",
					"data-key": "+t5Jd48OhgCF03neZwMy4g",
					async: true,
				},
			],
		};
	},
	beforeLoad: async () => {
		const [theme, origin] = await Promise.all([
			getThemeServerFn(),
			typeof window === "undefined"
				? getOriginServerFn()
				: Promise.resolve(window.location.origin),
		]);
		return { theme, origin };
	},
	notFoundComponent: NotFound,
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const { theme } = Route.useRouteContext();

	return (
		<html
			lang="en"
			className={cn(theme === "dark" && "dark", "scroll-smooth antialiased")}
			suppressHydrationWarning
		>
			<head>
				<HeadContent />
			</head>
			<body className="flex min-h-screen flex-col font-sans antialiased">
				<ThemeHotkey />
				<Header />
				<main className="flex flex-1 flex-col">{children}</main>
				<Footer />
				<ScrollToTop />
				<TanStackDevtools
					config={{
						position: "bottom-left",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
