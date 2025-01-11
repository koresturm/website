<script lang="ts">
	import { observer, intersecting } from "$lib/observer";
	import { onMount } from "svelte";

    let el: HTMLElement

    type $$Props = {
        tag?: string,
        class?: string,
        visible?: Object,
        invisible?: Object,
        children?: any,
        invisibleOutside?: boolean
    }

    let { tag, class: className = '' , visible , invisible , invisibleOutside = false , children }: $$Props = $props()

    const entryId = Math.floor(Math.random() * 10000000).toString()

    onMount(() => {

        observer?.observe(el)

        console.log(el)

        if(invisible) Object.assign(el.style, invisible)

        return intersecting?.subscribe(ids => {
            if(ids.includes(entryId)){
                if(visible) Object.assign(el.style, visible)
            }else{
                if(invisibleOutside && invisible) Object.assign(el.style , invisible)
            }
        })
    })
</script>

<svelte:element bind:this={el} data-entry-id={entryId} this="{tag}" class="in-view {className}">
    {@render children()}
</svelte:element>

<style>
    .in-view {
        transition: all .5s cubic-bezier(.25, .46, .45, .94);
    }
</style>