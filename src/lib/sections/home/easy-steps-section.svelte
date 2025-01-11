<script>
	import MaxWidthWrapper from "$lib/components/shared/max-width-wrapper.svelte";

</script>
<MaxWidthWrapper sidePadding={false}>
	<section class="pt-8">
		<h1 class="text-4xl md:text-5xl lg:text-7xl mb-4 font-bold px-4">
			Get yourself a custom software solution in 3 easy steps:
		</h1>
	
		<div class="grid md:grid-cols-3 border-t border-black">
			<div class="p-2 flex flex-col gap-4 items-center">
				<h1 class="text-3xl">
					1
				</h1>
	
				<h1 class="text-3xl">
					Appointment
				</h1>
	
				<p>
					<a class="underline" href="mailto:koresturm@gmail.com">Send an Email</a> and we'll fix a day to talk.
				</p>
			</div>
			<div class="border-y md:border-y-transparent md:border-x border-black p-2 flex flex-col gap-4 items-center">
				<h1 class="text-3xl">
					2
				</h1>
	
				<h1 class="text-3xl">
					Conversation
				</h1>
	
			<p class="text-center">We talk about the problem and how you want the solution to look like.</p>
			</div>
	
			<div class="p-2 flex flex-col gap-4 items-center">
				<h1 class="text-3xl">
					3
				</h1>
	
				<h1 class="text-3xl">
					Idea to Reality
				</h1>
	
			<p class="text-center">We transform your idea of the solution into a custom software solution.</p>
			</div>
		</div>
	</section>
</MaxWidthWrapper>