<script>

	import MaxWidthWrapper from "./max-width-wrapper.svelte";

</script>
<footer class="w-full bg-black text-white py-4">
	<MaxWidthWrapper sidePadding={false}>
		<section class="flex lg:items-center flex-col lg:flex-row gap-4 lg:justify-between">
			<a href="/" class="size-[50px] rounded-full overflow-hidden">
				<img src="/assets/images/logo.png" alt="large" class="size-full object-cover"/>
			</a>

			<h1 class="text-3xl md:text-5xl font-bold lg:hidden">
				Get your solution today!
			</h1>

			<div class="flex flex-col lg:flex-row lg:items-center gap-4">
				<a href="/softwares" class="underline animate-slide-fade-in">Blog</a>
				<a href="/softwares" style:--delay="1.9s" class="underline animate-slide-fade-in">Softwares</a
				>
				<a href="/softwares" style:--delay="1.9s" class="underline animate-slide-fade-in">About</a>
				<a href="/softwares" style:--delay="2.1s" class="underline animate-slide-fade-in"
					>Book a call</a
				>
			</div>

			<p class="w-full lg:w-max text-center border-t border-white lg:border-none py-4 lg:p-0">
				Copyright 2025
			</p>

		</section>
	</MaxWidthWrapper>
</footer>