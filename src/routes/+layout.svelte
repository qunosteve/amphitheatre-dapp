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
	import logo_amphitheatre_txt from '$lib/assets/logo_ampthitheatre_txt.png';
	import logo_tas from '$lib/assets/logo_tas.png';
	import avatar_ape from '$lib/assets/ApeHead_Blue.jpeg';
	import craft_icon from '$lib/assets/craftsman_amphi_flipped.png';
	import nav_home from '$lib/assets/logo_amphitheatre_small.png';
	import nav_arena from '$lib/assets/melee.png';
	import nav_armoury from '$lib/assets/sword_helm_shield.png';
	import nav_anvil from '$lib/assets/anvil-impact.png';
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
	<header class="sticky top-0 z-1 bg-surface-600/80 backdrop-blur-sm">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<!-- left side of AppBar-->
			<svelte:fragment slot="lead">
				<span class="badge">
					<img src={nav_home} alt="tas logo" width="40" />
				</span>
			</svelte:fragment>
			<!-- center of AppBar-->
			<div class="h-full mx-auto flex justify-center">
				<img src={logo_amphitheatre_txt} alt="amphitheatre text logo" />
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
			flex="flex-1 xl:flex-none"
			class="bg-surface-30-900-token"
			tabStyle="rounded"
		>
			<TabAnchor href="/" selected={$page.url.pathname === '/'}>
				<svelte:fragment slot="lead">					
					<span>Explore</span>
				</svelte:fragment>
			</TabAnchor>
			<TabAnchor href="/equip" selected={$page.url.pathname === '/equip'}>
					<span> Equip</span>
			</TabAnchor>
			<TabAnchor href="/engage" selected={$page.url.pathname === '/engage'}>
					<span>Engage</span>
			</TabAnchor>
		</TabGroup>
	</header>

	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- Footer -->
	<footer class="bg-secondary-500 p-1">
		<div
			class="place-content-evenly justify-items-center logo-cloud grid-cols-3 lg:!grid-cols-3 gap-2 variant-filled-tertiary"
		>
			<a class="flex-none logo-item variant-ghost-secondary w-36 h-1" href="/">
				<span><MessageSquareQuote /></span>
				<span>Discord</span>
			</a>
			<a class="logo-item variant-ghost-secondary w-36 h-1" href="/">
				<span><Twitter /></span>
				<span>Twitter</span>
			</a>
			<a class="logo-item variant-ghost-secondary w-36 h-1" href="/">
				<span><Send /></span>
				<span>Telegram</span>
			</a>
		</div>
	</footer>
</div>
