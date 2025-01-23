<script lang="ts">
	import MaxWidthWrapper from '$lib/components/shared/max-width-wrapper.svelte';
	import { useQuery } from 'convex-svelte';
	import { api } from '../../convex/_generated/api';
	import SoftwareDisplayCard from '$lib/components/software/software-display-card.svelte';

	const query = useQuery(api.software.getSoftwares, {});
</script>

<MaxWidthWrapper sidePadding={false}>
	{#if query.isLoading}
        <div class="size-full grid place-items-center min-h-screen">
            <h1 class="text-3xl md:text-5xl lg:text-7xl">Getting softwares....</h1>
        </div>
    {:else if query.error}
		<div class="size-full grid place-items-center min-h-screen">
			<h1 class="text-3xl md:text-5xl lg:text-7xl">Oop's, Something went wrong</h1>
		</div>
	{:else}
		<div class="flex flex-col gap-4 py-4 min-h-screen">
			<h1 class="text-4xl font-bold p-4">Softwares</h1>
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-3 border-t border-black h-max p-2">
				{#each query.data as software}
					<SoftwareDisplayCard {software} />
				{/each}
			</div>
		</div>
	{/if}
</MaxWidthWrapper>
