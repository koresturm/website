<script>
	import MaxWidthWrapper from "$lib/components/shared/max-width-wrapper.svelte";
	import { ArrowRightIcon } from "lucide-svelte";

</script>

<MaxWidthWrapper sidePadding={false}>
	<section class="w-full relative z-0">

		<div class="size-full absolute -z-10 grid place-items-center">
			<img src="/assets/images/opengraph.png" alt="large" class="animate-slide-fade-in-out-half" />
		</div>

		<div class="flex flex-col gap-8 py-4">

			<h1
				style:--delay="1.7s"
				style:--duration="2s"
				class="text-4xl md:text-5xl lg:text-7xl animate-slide-fade-in px-4"
			>
				<span class="underline">Custom software solutions</span> to ease the
				<span class="bg-black text-[yellow]">pain points</span> of your business and personal life.
			</h1>

			<a
				style:--delay="1.7s"
				href="mailto:koresturm@gmail.com"
				class="bg-black text-[yellow] px-4 py-2 flex items-center text-2xl gap-2 w-max animate-slide-fade-in"
			>
				<h1>Leave A Message</h1>
				<ArrowRightIcon />
			</a>

			<!-- svelte-ignore a11y_distracting_elements -->
			<marquee direction="left" class="border-t border-black text-3xl">
				<span class="mr-4">AI solutions</span>
				<span class="mr-4">Productivity</span>
				<span class="mr-4">Fitness</span>
				<span class="mr-4">Finance tracking</span>
				<span class="mr-4">Inventory management</span>
				<span class="mr-4">Automations</span>
				<span class="mr-4">And many more</span>
			</marquee>

			<!-- <div style:--delay="1.7s" class="grid md:grid-cols-3 gap-4 h-[400px] animate-slide-fade-in">
				<div class="bg-black"></div>
				<div class="bg-black"></div>
				<div class="bg-black"></div>
			</div> -->

			<!-- <div class="w-full flex items-center justify-center">
				<a
					href="/"
					class="bg-black text-[yellow] px-4 py-2 flex items-center text-2xl gap-2"
				>
					<h1>See All</h1>
					<ArrowRightIcon />
				</a>
			</div> -->
		</div>
	</section>
</MaxWidthWrapper>