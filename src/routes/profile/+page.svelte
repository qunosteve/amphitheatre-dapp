<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { tick } from 'svelte';

	import { Wallet } from 'lucide-svelte';
	import { type ThirdwebClient } from 'thirdweb';

	import type { LinkedWallet } from '$lib/linkedWallet';
	import { getShortAddress } from '$lib/linkedWallet';
	import { linkedWalletStore, linkedWalletsStore } from '$lib/linkedWallets.svelte';

	import LinkedWalletEntry from '$lib/components/LinkedWalletEntry.svelte';
	import logo_base from '$lib/assets/Base_Symbol_Blue.svg';
	import logo_steam from '$lib/assets/Steam_icon_logo.svg';
	import logo_steam_button from '$lib/assets/Steam_logo_black.png';

	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import ModalCarouselApes from '$lib/components/ModalCarouselApes.svelte';
	import { steamLogin } from '../../routes/steam/signin/+server';
	import LinkedSteamEntry from '$lib/components/LinkedSteamEntry.svelte';

	let { data } = $props<{
		data: {
			thirdwebClient: Promise<{ thirdwebClient: ThirdwebClient }>;
			steam_id: string;
			steam_personaname: string;
			steam_avatar: string;
		};
	}>();
	let thirdwebClient = data.thirdwebClient;
	let steam_id = data.steam_id;
	let steam_personaname = data.steam_personaname;
	let steam_avatar = data.steam_avatar;

	const modalStore = getModalStore();

	function handleShowApes(event: { detail: { wallet: LinkedWallet } }) {
		console.log('showApes called: ', event.detail.wallet.address);
		//		const c: ModalComponent = { ref: ModalCarouselApes };
		const c: ModalComponent = {
			ref: ModalCarouselApes,
			props: { linkedWallet: event.detail.wallet }
		};
		const modal: ModalSettings = {
			type: 'component',
			//			component: 'modalCarouselApes', // registry works, but wallet isn't dynamic
			component: c,
			title: 'Example Alert',
			body: 'This is an example modal.',
			response: (r) => console.log('response:', r)
		};
		let x = modalStore.trigger(modal);
		console.log('showApes ended: ', x);
	}

	const toastStore = getToastStore();

	let tabView = $state('tabBase');

	let walletName: string = '<wallet name>'; // Hold the wallet name
	let editing: boolean = false; // Track editing state
	let inputRef: HTMLInputElement; // Reference to the input element

	// Function to toggle editing state
	async function toggleEdit() {
		editing = !editing;
		if (editing) {
			await tick(); // Wait for the DOM to update
			if (inputRef) {
				inputRef.focus();
				inputRef.select(); // Preselect text
			}
		}
	}

	// Function to update the wallet in the store
	function handleUpdateWallet(event: { detail: { wallet: LinkedWallet } }) {
		linkedWalletStore.updateWallet(event.detail.wallet);
	}
	// Delete the wallet using the store's deleteWallet function
	function handleDeleteWallet(event: { detail: { wallet: LinkedWallet } }) {
		linkedWalletStore.deleteWallet(event.detail.wallet);
		toastStore.trigger({
			message: `unlinked wallet ${event.detail.wallet.name}: ${getShortAddress(event.detail.wallet)}`,
			timeout: 5000,
			hoverable: true
		});
	}

	const handleSteamLogin = () => {
		steamLogin();
	};
</script>

<div>
	<div class="card">
		<section class="p-4">
			<h2 class="h2 text-secondary-800 h-6">Profile Settings</h2>
			<br />
			<br />
			<div class="flex gap-4">
				<h3 class="h3">Linked Wallets / Accounts</h3>
			</div>
			<br />

			<TabGroup>
				<Tab bind:group={tabView} name="Base" value="tabBase">
					<div class="flex gap-2">
						<img src={logo_base} alt="Base logo" width="20" />
						<span>Base</span>
					</div>
				</Tab>
				<Tab bind:group={tabView} name="Steam" value="tabSteam">
					<div class="flex gap-2">
						<img src={logo_steam} alt="Base logo" width="24" />
						<span>Steam</span>
					</div>
				</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					<!-- Base wallets -->
					{#if tabView === 'tabBase'}
						{#each linkedWalletsStore.value as linkedWallet}
							{#if linkedWallet && linkedWallet.id}
								<!-- Linked wallet entry -->
								<LinkedWalletEntry
									{linkedWallet}
									on:updateWallet={handleUpdateWallet}
									on:deleteWallet={handleDeleteWallet}
									on:showApes={handleShowApes}
								/>
							{/if}
						{/each}
						<!-- Steam account -->
					{:else if tabView === 'tabSteam'}
						{#if steam_id}
							<LinkedSteamEntry {steam_id} {steam_personaname} {steam_avatar} />
						{:else}
							<button class="btn btn-sm variant-filled-primary" onclick={handleSteamLogin}>
								<img src={logo_steam_button} alt="Base logo" width="100" />
							</button>
						{/if}
					{/if}
				</svelte:fragment>
			</TabGroup>
		</section>
	</div>
</div>
