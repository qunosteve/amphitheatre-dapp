<script lang="ts">
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { Pencil, Wallet } from 'lucide-svelte';
	import { tick } from 'svelte';
	import { onMount } from 'svelte';

	import { defaultConfig } from 'svelte-wagmi';
	import { baseSepolia } from 'viem/chains';
	import { injected } from '@wagmi/connectors';
	import { WC } from 'svelte-wagmi';
	import { signerAddress } from 'svelte-wagmi';

	import { Toast, getToastStore } from '@skeletonlabs/skeleton';

	import type { AmpWallet, Blockchain } from '$lib/AmpWallet';
	import { createAmpWallet, type GearResponse, getGear } from '$lib/AmpWallet';
	import { type GearItem } from '$lib/GearItem';
	import ampWallets from '$lib/stores/AmpWallets';

	const toastStore = getToastStore();

	let tabSet: number = 0;

	let walletName: string = '<wallet name>'; // Hold the wallet name
	let editing: boolean = false; // Track editing state
	let inputRef: HTMLInputElement; // Reference to the input element

	const myChainsArray = [baseSepolia];
	onMount(async () => {
		const erckit = defaultConfig({
			chains: myChainsArray,
			appName: 'Amphitheatre',
			walletConnectProjectId: 'Amphitheatre',
			alchemyId: 'gng2fPg4GznxWSj25eS0WSSmFcXinJlD',
			connectors: [injected()]
		});
		await erckit.init();
	});
	async function connectToEthereum() {
		await WC();
		if ($signerAddress) {
			//			let gearResponse: GearResponse = await getGear($signerAddress);
			// Constructing an array of two GearItem objects with hardcoded values
			const gearItems: GearItem[] = [
				{
					id: 1,
					name: 'Common Chestpiece',
					image: 'https://8bfca423161e8da64808dd04188530af.ipfscdn.io/ipfs/bafybeihbonkklaquux6vasl7pc3fbsatyxpfthws5px5qwzrjfkzogqx2y/Chestpiece-GIF.gif'
				},
				{
					id: 2,
					name: 'Common Bracers',
					image: 'https://8bfca423161e8da64808dd04188530af.ipfscdn.io/ipfs/bafybeigeof4poyppu6nd3tjmaqjh4wkjny6eqjofmnh4jswnofh3x3jpba/Bracers-GIF.gif'
				}
			];
			const newWallet = createAmpWallet(
				'Base',
				$signerAddress,
				'-unamed-',
				//				Object.values(gearResponse)
				gearItems
			);
			ampWallets.addWallet(newWallet);

			toastStore.trigger({
				message: $signerAddress,
				timeout: 5000,
				hoverable: true
			});
		} else {
			toastStore.trigger({
				message: 'disconnected wallet',
				timeout: 5000,
				hoverable: true
			});
		}
	}

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

	// Function to save wallet name and exit edit mode
	function saveWalletName() {
		editing = false;
	}

	// Function to generate a random character
	function getRandomCharacter(): string {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const randomIndex = Math.floor(Math.random() * characters.length);
		return characters[randomIndex];
	}

	const clearWallets = () => {
		ampWallets.reset();
	};
</script>

<div>
	<div class="card">
		<section class="p-4">
			<h2 class="h2">Profile</h2>
			<br />
			<!-- Button to connect a wallet -->
			<button class="btn variant-filled-primary" on:click={connectToEthereum}>
				<span class="icon"><Wallet /></span>
				<span>Connect Wallet</span>
			</button>
			<!-- Button to clear all wallets -->
			<button class="btn variant-filled-primary" on:click={clearWallets}>
				<span class="icon"><Wallet /></span>
				<span>Clear Wallets</span>
			</button>

			<h3 class="h3">Linked Wallets</h3>
			<TabGroup>
				<Tab bind:group={tabSet} name="tab1" value={0}>Base</Tab>
				<Tab bind:group={tabSet} name="tab2" value={1}>Cardano</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						<div class="card card-hover p-4 gap-4 flex items-center">
							<button type="button" class="btn-icon !bg-transparent" on:click={toggleEdit}
								><Pencil /></button
							>
							<span class="icon"><Wallet /></span>
							<div>
								{#if editing}
									<!-- Input field for editing with inputRef to capture input element -->
									<input
										type="text"
										bind:value={walletName}
										bind:this={inputRef}
										on:blur={saveWalletName}
										class="input"
									/>
								{:else}
									<!-- Display wallet name when not editing -->
									<span class="text-primary-500">{walletName}</span>
								{/if}
								<br />
								<span>addr1q9sff...sjwqmqc57k</span>
							</div>
						</div>
						<div class="card card-hover p-4 gap-4 flex items-center">
							<button type="button" class="btn-icon !bg-transparent" on:click={toggleEdit}
								><Pencil /></button
							>
							<span class="icon"><Wallet /></span>
							<div>
								{#if editing}
									<!-- Input field for editing with inputRef to capture input element -->
									<input
										type="text"
										bind:value={walletName}
										bind:this={inputRef}
										on:blur={saveWalletName}
										class="input"
									/>
								{:else}
									<!-- Display wallet name when not editing -->
									<span class="text-primary-500">{walletName}</span>
								{/if}
								<br />
								<span>addr1q9sff...sjwqmqc57k</span>
							</div>
						</div>
					{:else if tabSet === 1}
						<span>(not currently implemented)</span>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</section>
	</div>
</div>
