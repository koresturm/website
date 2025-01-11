import type { Writable } from "svelte/store"

export type ObserverContext = {
    observer: IntersectionObserver,
    intersecting: Writable<string[]>
}