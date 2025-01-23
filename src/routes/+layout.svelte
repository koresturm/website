<script lang="ts">

	import { injectAnalytics } from '@vercel/analytics/sveltekit'

	import Footer from '$lib/components/shared/footer.svelte';
	import Nav from '$lib/components/shared/nav.svelte';
	import '../app.css';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex, useConvexClient  } from 'convex-svelte';
	import { convexClient } from '$lib/index.svelte';

	let { children } = $props();

	setupConvex(PUBLIC_CONVEX_URL);

	convexClient.value = useConvexClient();

	injectAnalytics();
</script>

<Nav />

{@render children()}

<Footer />