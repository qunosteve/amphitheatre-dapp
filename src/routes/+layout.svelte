<script lang="ts">
	//import svelte and skeleton architecture
	import {
		PUBLIC_BASE_NETWORK,
		PUBLIC_WALLETCONNECT_APP,
		PUBLIC_WALLETCONNECT_ID
	} from '$env/static/public';
	import '../app.postcss';
	import { page } from '$app/stores';
	import { AppBar, TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import {
		Avatar,
		initializeStores,
		LightSwitch,
		Modal,
		Toast,
	} from '@skeletonlabs/skeleton';
	import { type Snippet } from 'svelte';

	//import 3rd party
	import { defaultConfig } from 'svelte-wagmi';
	import { type ThirdwebClient } from 'thirdweb';
	import { baseSepolia } from 'viem/chains';
	import { injected } from '@wagmi/connectors';

	//import graphics
	import LinkWallet from '$lib/components/LinkWallet.svelte';
	import ModalCarouselApes from '$lib/components/ModalCarouselApes.svelte';
	import logo_amphitheatre_txt from '$lib/assets/logo_ampthitheatre_txt.png';
	import logo_tas from '$lib/assets/logo_tas.png';
	import nav_home from '$lib/assets/logo_amphitheatre_small.png';
	import nav_arena from '$lib/assets/melee.png';
	import nav_armoury from '$lib/assets/sword_helm_shield.png';
	import nav_anvil from '$lib/assets/anvil-impact.png';
	import { localStore } from '$lib/localStore.svelte';
	import AmphiLogoTxt from '$lib/assets/svg/amphilogotext.svelte';
	import AmphiLogo from '$lib/assets/svg/amphilogographic.svelte';
	import avatar_ape from '$lib/assets/png/ApeHead_Blue.jpeg';

	//page logic and variables

	initializeStores();

	/* registry works, but gets instantiated here with fixed empty wallet
	const modalRegistry: Record<string, ModalComponent> = {
		// Set a unique modal ID, then pass the component reference
		modalCarouselApes: { ref: ModalCarouselApes }
	};
	*/

	let { children, data } = $props<{
		children: Snippet;
		data: { thirdwebClient: Promise<{ thirdwebClient: ThirdwebClient }> };
	}>();

	// Store the ThirdwebClient
	const thirdwebClientStore = localStore<ThirdwebClient | null>('thirdwebClient', null);

	// Use $effect to handle async logic
	$effect(() => {
		console.log('+layout.svelte Use $effect');
		// Self-invoking async function within the effect
		(async () => {
			// Access thirdwebClient from the `data` passed from the server
			// Wait for the thirdwebClient promise to resolve
			const result = await data.thirdwebClient;
			console.log('thirdwebClient result:', result);

			thirdwebClientStore.value = result;
			console.log('Thirdweb Client initialized:', thirdwebClientStore.value);

			const baseNetwork = PUBLIC_BASE_NETWORK;
			let defaultConfigChains;
			if (baseNetwork === 'Mainnet') {
				defaultConfigChains = [baseSepolia];
			} else {
				defaultConfigChains = [baseSepolia];
			}

			const erckit = defaultConfig({
				chains: defaultConfigChains,
				appName: PUBLIC_WALLETCONNECT_APP ?? 'Unknown',
				walletConnectProjectId: PUBLIC_WALLETCONNECT_ID ?? 'Unknown',
				connectors: [injected()]
			});
			await erckit.init();
		})(); // Call the async function immediately
	});
</script>

<!-- Overlays -->
<!-- Modal registry -->
<!-- Modal components={modalRegistry} -->
<!-- registry works, but gets instantiated here with fixed empty wallet -->
<Modal />
<!-- Toast notifications -->
<Toast />

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header class="sticky top-0 z-1 bg-surface-600/80 backdrop-blur-sm">
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
				<LightSwitch class="variant-ringed-primary" />
				<LinkWallet />
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
	{@render children()}
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- Footer -->
</div>
