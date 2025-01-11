<script lang="ts">
	import Footer from '$lib/components/shared/footer.svelte';
import Nav from '$lib/components/shared/nav.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Nav />

{@render children()}

<Footer />