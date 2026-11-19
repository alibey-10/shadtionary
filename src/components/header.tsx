import {
	Cancel01Icon,
	GithubIcon,
	Menu01Icon,
	NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { LogoFull } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { urls } from "@/contstants/urls";
import { cn } from "@/lib/utils";

type HeaderProps = {
	className?: string;
};

const navLinks = [
	{ to: "/comparison", label: "Comparisons" },
	{ to: "/styles", label: "Styles" },
	{ to: "/transitions", label: "Transitions" },
] as const;

const socialLinks = [
	{ href: urls.github, label: "GitHub", icon: GithubIcon },
	{ href: urls.x, label: "X", icon: NewTwitterIcon },
] as const;

export function Header({ className }: HeaderProps) {
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });

	// Close the mobile menu whenever the route changes.
	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger
	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!menuOpen) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [menuOpen]);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 border-b border-dashed bg-background/80 backdrop-blur-sm px-3 md:px-10 lg:px-16",
				className,
			)}
		>
			<div className="flex h-14 items-center justify-between gap-2 border-x border-dashed px-3">
				<Link
					to="/"
					className="min-w-0 shrink outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded-sm"
				>
					<span className="block h-6 sm:h-8 [&_svg]:h-full [&_svg]:w-auto [&_svg]:max-w-full">
						<LogoFull />
					</span>
					<span className="sr-only">Shadtionary home</span>
				</Link>

				<nav className="flex shrink-0 items-center gap-1">
					{navLinks.map((link) => (
						<Button
							key={link.to}
							variant="ghost"
							size="sm"
							className="hidden md:inline-flex"
							nativeButton={false}
							render={(props) => <Link {...props} to={link.to} />}
						>
							{link.label}
						</Button>
					))}
					<ThemeToggle />
					{socialLinks.map((link) => (
						<Button
							key={link.label}
							variant="ghost"
							size="icon"
							className="hidden md:inline-flex"
							nativeButton={false}
							render={(props) => (
								<a
									{...props}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<HugeiconsIcon icon={link.icon} strokeWidth={2} />
									<span className="sr-only">{link.label}</span>
								</a>
							)}
						/>
					))}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						aria-expanded={menuOpen}
						aria-controls="mobile-nav"
						onClick={() => setMenuOpen((open) => !open)}
					>
						<HugeiconsIcon
							icon={menuOpen ? Cancel01Icon : Menu01Icon}
							strokeWidth={2}
						/>
						<span className="sr-only">
							{menuOpen ? "Close menu" : "Open menu"}
						</span>
					</Button>
				</nav>
			</div>

			{menuOpen && (
				<nav
					id="mobile-nav"
					className="flex flex-col gap-1 border-x border-t border-dashed px-3 py-3 md:hidden"
				>
					{navLinks.map((link) => (
						<Button
							key={link.to}
							variant="ghost"
							className="justify-start"
							nativeButton={false}
							render={(props) => (
								<Link
									{...props}
									to={link.to}
									onClick={() => setMenuOpen(false)}
								/>
							)}
						>
							{link.label}
						</Button>
					))}
					<div className="mt-2 flex items-center gap-1 border-t border-dashed pt-3">
						{socialLinks.map((link) => (
							<Button
								key={link.label}
								variant="ghost"
								size="icon"
								nativeButton={false}
								render={(props) => (
									<a
										{...props}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
									>
										<HugeiconsIcon icon={link.icon} strokeWidth={2} />
										<span className="sr-only">{link.label}</span>
									</a>
								)}
							/>
						))}
					</div>
				</nav>
			)}
		</header>
	);
}
