<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';

	import { Circle, Wallet } from 'lucide-svelte';
	import { connected, disconnectWagmi, signerAddress, WC } from 'svelte-wagmi';
	import { type ThirdwebClient } from 'thirdweb';

	import { localStore } from '$lib/localStore.svelte';
	import {
		disconnectWallet,
		getConnectedWalletAddress,
		linkedWalletStore
	} from '$lib/linkedWallets.svelte';
	import { createLinkedWallet, type LinkedWallet } from '$lib/linkedWallet';

	const linkedWalletsStore = localStore<LinkedWallet[]>('linkedWallets', []);

	const toastStore = getToastStore();

	async function linkWallet() {
		await WC();
		if ($signerAddress) {
			const differentAddress: boolean = $signerAddress != getConnectedWalletAddress();
			if (differentAddress) {
				// Check if connected to a new address
				const newWallet = await createLinkedWallet('Base', $signerAddress, '-unamed-');
				linkedWalletStore.addWallet(newWallet);
				linkedWalletStore.setConnectedWallet($signerAddress);
				toastStore.trigger({
					message: `linked wallet: ${$signerAddress}`,
					timeout: 5000,
					hoverable: true
				});
			}
		} else {
			disconnectWallet();
			toastStore.trigger({
				message: 'disconnected wallet',
				timeout: 5000,
				hoverable: true
			});
		}
	}

	async function disconnectFromEthereum() {
		await disconnectWagmi();
		disconnectWallet();
	}
</script>

{#snippet walletStatus(style: string)}
	<span class="badge-icon {style} absolute -top-2 -right-1 z-10">
		<Circle />
	</span>
{/snippet}

<div class="flex relative inline-block">
	{#if $connected}
		{@render walletStatus('bg-green-500')}
		<button class="btn btn-sm variant-filled-primary" onclick={disconnectFromEthereum}>
			<span class="icon"><Wallet /></span>
		</button>
	{:else}
		{@render walletStatus('variant-filled-surface')}
		<button class="btn btn-sm variant-filled-primary" onclick={linkWallet}>
			<span class="icon"><Wallet /></span>
		</button>
	{/if}
</div>
