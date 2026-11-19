import { createServerFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";

/**
 * Origin of the current request (e.g. https://shadtionary.com or
 * http://localhost:3000). Used to build absolute URLs for social meta tags,
 * which crawlers require, without hard-coding the domain.
 */
export const getOriginServerFn = createServerFn().handler(
	() => getRequestUrl().origin,
);
