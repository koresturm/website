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
	<meta name="description" content="Custom software solutions to ease the pain points of your business and personal life." />
	<meta name="keywords" content="software, ai, automation, productivity, fitness, finance, inventory, personal, business, custom" />

	<!-- Open Graph / Facebook -->
	<meta property="og:title" content="Koresturm" />
	<meta property="og:description" content="Custom software solutions to ease the pain points of your business and personal life." />
	<meta property="og:image" content="https://koresturm.vercel.app/assets/images/opengraph.png" />
	<meta property="og:url" content="https://koresturm.vercel.app" />
	<meta property="og:type" content="website" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://koresturm.vercel.app" />
	<meta property="twitter:title" content="Koresturm" />
	<meta property="twitter:description" content="Custom software solutions to ease the pain points of your business and personal life." />
	<meta property="twitter:image" content="https://koresturm.vercel.app/assets/images/opengraph.png" />
</svelte:head>

<HeroSection />

<WhoAreYou />

<WhatWeDoSection />

<EasyStepsSection />

<GenericSolutionsSection />
