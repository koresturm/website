import type { Writable } from "svelte/store"
import type { Id } from "../convex/_generated/dataModel";

export type ObserverContext = {
    observer: IntersectionObserver,
    intersecting: Writable<string[]>
}

export type Software = {
    _id: Id<"softwares">;
    _creationTime: number;
    description: string;
    image_url: string;
    name: string;
    price: number;
    website: string;
}