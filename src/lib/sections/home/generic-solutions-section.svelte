<script>
	import InView from '$lib/components/shared/in-view.svelte';

	import MaxWidthWrapper from '$lib/components/shared/max-width-wrapper.svelte';
	import { ArrowRightIcon } from 'lucide-svelte';
</script>

<MaxWidthWrapper class="bg-white text-black" bottom={false} sidePadding={false}>

	<section class="flex gap-4 flex-col py-8">
		<InView
			tag="h1"
			visible={{ opacity: 1, transform: 'translateY(0px)' }}
			invisible={{ opacity: 0.2, transform: 'translateY(50%)' }}
			class="text-4xl md:text-5xl lg:text-7xl flex-1 font-bold px-4"
		>
			The problem with <span class="underline decoration-[yellow]">generic solutions</span> is that
			they are <span class="underline decoration-[yellow]">generic.</span>
		</InView>

		<p class="flex-1 text-2xl px-4">
			Why pay for something you still have to customize to fit your needs and it still doesn't fit? <br
			/>
			At Koresturm, we make it
			<strong><span class="underline decoration-[yellow]">your own</span></strong> out of the box. Get yourself a custom solution <b>today!</b>
		</p>

		<a
			style:--delay="1.7s"
			href="mailto:koresturm@gmail.com"
			class="bg-black text-white px-4 py-2 flex items-center text-2xl gap-2 w-max"
		>
			<h1>Reach out</h1>
			<ArrowRightIcon />
		</a>
	</section>
</MaxWidthWrapper>
