<script>
	import { InstagramIcon, MenuIcon, TwitterIcon, XIcon } from 'lucide-svelte';
	import MaxWidthWrapper from './max-width-wrapper.svelte';

	let navOpen = $state(false);

	const toggleNav = () => (navOpen = !navOpen);
</script>

<svelte:body onscroll={console.log} />

<MaxWidthWrapper sidePadding={false}>
	<p class="w-full bg-black text-[yellow] text-center py-2 underline">
		We are launching soon. 🎉🎉🎉
	</p>

	<nav class="flex items-center justify-between gap-4 w-full pr-4">
		<a href="/">
			<img
				style:--delay="1.5s"
				src="/assets/images/logo.png"
				alt="logo"
				class="size-[50px] animate-slide-fade-in"
			/>
		</a>

		<div
			class:visible={navOpen}
			class="menu flex flex-col lg:flex-row justify-center bg-[yellow] fixed lg:static top-0 left-0 z-10 w-full lg:w-max h-dvh lg:h-max px-4 gap-4 border-x border-black"
		>
			<a href="/softwares" style:--delay="1.7s" class="underline animate-slide-fade-in">Blog</a>
			<a href="/softwares" style:--delay="1.9s" class="underline animate-slide-fade-in">Softwares</a
			>
			<a href="/softwares" style:--delay="1.9s" class="underline animate-slide-fade-in">About</a>
			<a href="mailto:koresturm@gmail.com" style:--delay="2.1s" class="underline animate-slide-fade-in"
				>Send a Message</a
			>

			<div class="absolute left-0 bottom-14 lg:hidden w-full grid place-items-center">
				<button
					onclick={toggleNav}
					class="bg-black rounded-full size-[50px] text-white grid place-items-center"
				>
					<XIcon />
				</button>
			</div>
		</div>

		<div class="hidden lg:flex w-max gap-4">
			<a href="/softwares" style:--delay="2.3s" class="underline animate-slide-fade-in">
				<TwitterIcon />
			</a>
			<a href="/softwares" style:--delay="2.3s" class="underline animate-slide-fade-in">
				<InstagramIcon />
			</a>
		</div>

		<button onclick={toggleNav} style:--delay="1.5s" class="animate-slide-fade-in lg:hidden">
			<MenuIcon />
		</button>
	</nav>
</MaxWidthWrapper>

<style>
	@media screen and (max-width: 1024px) {

		.menu {
			transform: translateX(-100%);
			transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);

			a {
				font-size: 1.875rem /* 30px */;
				line-height: 2.25rem /* 36px */;
			}

			&.visible {
				transform: translateX(0);
			}
		}
	}
</style>
