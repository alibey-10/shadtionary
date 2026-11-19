import { GithubIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { urls } from "@/contstants/urls";
import { cn } from "@/lib/utils";

/** "Missing a Word?" call to action linking to the GitHub repo. */
export function GithubCta({ className }: { className?: string }) {
	return (
		<Button
			variant="default"
			size="lg"
			className={cn("mt-6 h-10 px-4", className)}
			nativeButton={false}
			render={(props) => (
				<a
					{...props}
					href={urls.github}
					target="_blank"
					rel="noopener noreferrer"
				>
					<HugeiconsIcon icon={GithubIcon} strokeWidth={2} />
					Missing a Word?
				</a>
			)}
		/>
	);
}
