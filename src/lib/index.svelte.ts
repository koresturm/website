// place files you want to import through the `$lib` alias in this folder.

import type { ConvexClient } from "convex/browser";

interface SvelteConvexClient {
    value: ConvexClient | null;
}

export const convexClient: SvelteConvexClient = $state({ value: null })