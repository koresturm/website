<script>
	import InView from "$lib/components/shared/in-view.svelte";


	import MaxWidthWrapper from "$lib/components/shared/max-width-wrapper.svelte";

</script>
<MaxWidthWrapper class="bg-black text-white" sidePadding={false}>
	<section class="px-4 py-8">
		<h1 class="text-4xl md:text-5xl lg:text-7xl mb-4 font-bold">
			<span class="opacity-70">At</span>
			<InView tag="span" visible={{ opacity: 1 }} invisible={{ opacity: .2 }}>Koresturm,</InView>
			<span class="opacity-70">the</span>
			<InView tag="span" visible={{ opacity: 1 }} invisible={{ opacity: .2 }}>goal</InView>
			<span class="opacity-70">is to provide you with</span>
			<InView tag="span" visible={{ opacity: 1 }} invisible={{ opacity: .2 }}>tools tailored</InView>
			<span class="opacity-70">for your</span>
			<InView tag="span" visible={{ opacity: 1 }} invisible={{ opacity: .2 }}>workflow.</InView>
		</h1>

		<p class="text-2xl">
			<span class="opacity-70">Your life, business, daily routine and their corresponding pains are</span>
			<InView tag='span' visible={{ opacity: 1 }} invisible={{ opacity: .2 }}>unique</InView>,
			<span class="opacity-70">that's why we provide you with a</span> 
			<InView tag='span' visible={{ opacity: 1 }} invisible={{ opacity: .2 }}>software solution</InView>
			<span class="opacity-70">that just</span>
			<InView tag='span' visible={{ opacity: 1 }} invisible={{ opacity: .2 }}>fits.</InView>
		</p>

		<section>
			<div class=""></div>
		</section>
	</section>
</MaxWidthWrapper>