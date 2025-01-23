<script lang="ts">
	import { PUBLIC_UPLOAD_KEY } from "$env/static/public";
	import MaxWidthWrapper from "$lib/components/shared/max-width-wrapper.svelte";
	import { useConvexClient } from "convex-svelte";
	import { api } from "../../../convex/_generated/api";
	import { convexClient } from "$lib/index.svelte";
	import { goto } from "$app/navigation";

    let loading = $state(false)

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();

        loading = true

        const formData = new FormData(e.target as HTMLFormElement);

        const uploadKey = formData.get("key");

        if(uploadKey !== PUBLIC_UPLOAD_KEY || !convexClient.value) return;

        formData.delete("key");

        const data = Object.fromEntries(formData);

        const res = await convexClient.value.mutation(api.software.enlistSoftware, {...data , price: parseFloat(data.price as any) } as any);

        loading = false;

        (e.target as HTMLFormElement).reset();

        goto("/softwares");
    }
</script>

<MaxWidthWrapper>
    <div class="flex flex-col gap-4 py-4">
        <h1 class="text-4xl font-bold">New Software</h1>

        <form onsubmit={handleSubmit} class="flex flex-col gap-4">
            <label for="name" class="text-lg font-bold">Name</label>
            <input type="text" 
            id="name" 
            name="name" 
            class="border border-black p-2 bg-transparent focus:outline-none" required />

            <label for="description" class="text-lg font-bold">Description</label>
            <textarea 
            id="description" 
            name="description" 
            class="border border-black p-2 bg-transparent focus:outline-none resize-none" required></textarea>

            <label for="price" class="text-lg font-bold">Price</label>
            <input type="number" 
            id="price" 
            name="price" 
            class="border border-black p-2 bg-transparent focus:outline-none" required />

            <label for="image" class="text-lg font-bold">Image URL</label>
            <input type="text" 
            id="image" 
            name="image_url" 
            class="border border-black p-2 bg-transparent focus:outline-none" required />

            <label for="website" class="text-lg font-bold">Website URL</label>
            <input type="text" 
            id="website" 
            name="website" 
            class="border border-black p-2 bg-transparent focus:outline-none" required />

            <label for="key" class="text-lg font-bold">Key</label>
            <input type="password" 
            id="key" 
            name="key" 
            class="border border-black p-2 bg-transparent focus:outline-none" required />

            <button disabled={loading} type="submit" class="bg-black text-white p-2 text-lg disabled:opacity-50">
                {#if loading}
                    Submitting...
                {:else}
                    Submit
                {/if}
            </button>

        </form>
    </div>
</MaxWidthWrapper>