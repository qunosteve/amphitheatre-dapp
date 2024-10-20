<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar, TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import {
		initializeStores,
		Drawer,
		getDrawerStore,
		Toast,
		getToastStore
	} from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Wallet } from 'lucide-svelte';

	//import iamges
	import AmphiLogoTxt from '$lib/assets/svg/amphilogotext.svelte';
	import AmphiLogo from '$lib/assets/svg/amphilogographic.svelte';
	import avatar_ape from '$lib/assets/png/ApeHead_Blue.jpeg';
	import { MessageSquareQuote, Send, Twitter } from 'lucide-svelte';

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<!-- enable Toast notifications -->
<Toast />

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header class="top-0 z-1 bg-surface-600/80 backdrop-blur-sm">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<!-- left side of AppBar-->
			<svelte:fragment slot="lead">
				<span class="badge">
					<AmphiLogo iconSize={50} />
				</span>
			</svelte:fragment>
			<!-- center of AppBar-->
			<div class="h-full mx-auto flex justify-center">
				<AmphiLogoTxt iconSize={50} />
			</div>
			<!-- right side of AppBar-->
			<svelte:fragment slot="trail">
				<!--
				<LightSwitch class="variant-ringed-primary" />
				-->
				<a href="/profile">
					<Avatar
						src={avatar_ape}
						width="w-16"
						rounded="rounded-2xl"
						cursor="cursor-pointer"
					/>
				</a>
			</svelte:fragment>
		</AppBar>
		<!-- navigation tabs -->
		<TabGroup
		justify="justify-center"
		active="bg-gradient-to-br variant-gradient-secondary-primary"
		hover="hover:variant-soft-secondary"
		flex="flex-1 lg:flex-none"
		padding="py-1 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60"
		class="bg-surface-30-900-token w-full"
		tabStyle="rounded"
	  >
			<TabAnchor href="/" selected={$page.url.pathname === '/'}>
				<svelte:fragment slot="lead">					
					<span>Explore</span>
				</svelte:fragment>
			</TabAnchor>
			<TabAnchor href="/equip" selected={$page.url.pathname === '/equip'}>
					<span>Equip</span>
			</TabAnchor>
			<TabAnchor href="/engage" selected={$page.url.pathname === '/engage'}>
					<span>Engage</span>
			</TabAnchor>
		</TabGroup>
	</header>
	<slot />
</div>
