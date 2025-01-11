<script>
	import InView from "$lib/components/shared/in-view.svelte";
	import MaxWidthWrapper from "$lib/components/shared/max-width-wrapper.svelte";

</script>

<MaxWidthWrapper bottom={false} sidePadding={false}>
	<section class="py-4">
		<InView 
		visible={{ opacity: 1 , transform: 'translateY(0px)' }} 
		invisible={{ opacity: .2 , transform: 'translateY(50%)'}}
		tag="h1" class="text-4xl md:text-5xl lg:text-7xl font-bold px-4">
			Are you:
		</InView>

		<ul class="my-4 text-xl md:text-3xl border-y border-black">
			<InView 
			visible={{ opacity: 1 , transform: 'translateY(0px)' }} 
			invisible={{ opacity: .2 , transform: 'translateY(50%)'}}
			tag="li" class="list-disc list-inside p-4 border-b border-black hover:bg-black hover:text-[yellow] transition-colors">
				A Student trying to manage your academic workflow?
			</InView>

			<InView 
			visible={{ opacity: 1 , transform: 'translateY(0)' }} 
			invisible={{ opacity: .2 , transform: 'translateY(50%)'}}
			tag="li" class="list-disc list-inside p-4 border-b border-black hover:bg-black hover:text-[yellow] transition-colors">
				A Business owner with a business model peculiar to you?
			</InView>

			<InView 
			visible={{ opacity: 1 , transform: 'translateY(0)' }} 
			invisible={{ opacity: .2 , transform: 'translateY(50%)'}}
			tag="li" class="list-disc list-inside p-4 hover:bg-black hover:text-[yellow] transition-colors">	
				Just someone who finds it difficult to keep track of, manage or get something?	
			</InView>
		</ul>


		<InView 
		visible={{ opacity: 1 , transform: 'translateY(0)' }} 
		invisible={{ opacity: .2 , transform: 'translateY(50%)'}}
		tag='h1' class="text-3xl md:text-4xl lg:text-6xl px-4">
			That <span class="underline">process</span>, doesn't have to be that
			<span class="underline">tedious</span>
		</InView>
	</section>
</MaxWidthWrapper>