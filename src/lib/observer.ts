import { browser } from "$app/environment"
import { writable, type Writable } from "svelte/store"

export let intersecting: Writable<string[]>

export let observer: IntersectionObserver

if(browser) {
    intersecting = writable<string[]>([])

    observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('data-entry-id')

        if(entry.isIntersecting) {
            if(id) intersecting.update(prev => [...prev , id])
        }else {
            intersecting.update(prev => prev.filter(i => i !== id))
        }
    })
} , { threshold: .5 })
}