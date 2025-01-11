<script lang="ts">
	import InView from '$lib/components/shared/in-view.svelte';
	import MaxWidthWrapper from '$lib/components/shared/max-width-wrapper.svelte';
	import EasyStepsSection from '$lib/sections/home/easy-steps-section.svelte';
	import GenericSolutionsSection from '$lib/sections/home/generic-solutions-section.svelte';
	import HeroSection from '$lib/sections/home/hero-section.svelte';
	import WhatWeDoSection from '$lib/sections/home/what-we-do-section.svelte';
	import WhoAreYou from '$lib/sections/home/who-are-you.svelte';
</script>

<svelte:head>
	<title>Koresturm</title>
</svelte:head>

<HeroSection />

<WhoAreYou />

<WhatWeDoSection />

<EasyStepsSection />

<GenericSolutionsSection />
