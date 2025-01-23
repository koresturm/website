<script lang="ts">
	import type { Software } from '$lib/types';
	import { ArrowRightIcon } from 'lucide-svelte';

	interface $$Props {
		software: Software;
	}

	let { software }: $$Props = $props();

    const formatPrice = (price: number) => new Intl.NumberFormat('en-US' , {
        currency: 'USD',
        style: 'currency',
    }).format(price)
</script>

<div class="flex flex-col justify-between gap-4 border border-black">
    
    <div class="flex flex-col gap-2">
        <div class="w-full h-[200px]">
            <img src={software.image_url} alt={software.name} class="size-full object-cover" />
        </div>

        <div class="flex justify-between items-center p-2">

            <h1 class="text-2xl font-bold">{software.name}</h1>

            <p class="text-xl bg-black text-white px-4">
                {#if software.price <= 0}
                    FREE
                    {:else}
                    {formatPrice(software.price)}
                {/if}
            </p>
        </div>


		<p class="p-2">{software.description}</p>

        </div>

		<a
			style:--delay="1.7s"
			href={software.website}
            target="_blank"
			class="bg-black text-[yellow] px-4 py-2 flex items-center justify-center text-2xl gap-2 w-full"
		>
			<h1>Visit</h1>
			<ArrowRightIcon />
		</a>
</div>
