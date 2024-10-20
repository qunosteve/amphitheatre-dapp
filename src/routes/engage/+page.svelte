<script lang="ts">
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

	import { Circle, Wallet } from 'lucide-svelte';

	import ModalWalletConnected from '$lib/components/ModalWalletConnected.svelte';
	import { localStore } from '$lib/localStore.svelte';
	import { type LinkedWallet } from '$lib/linkedWallet';

	const modalStore = getModalStore();

	const connectedWalletStore = localStore<LinkedWallet | null>('connectedWallet', null);

	function showModalWalletConnected() {
		console.log('showModalWalletConnected called: ');
		new Promise<boolean>((resolve) => {
			const c: ModalComponent = {
				ref: ModalWalletConnected
			};
			const modal: ModalSettings = {
				type: 'component',
				component: c,
				title: 'Wallet Connected',
				body: 'Wallet Connected body.',
				response: (r: boolean) => {
					resolve(r);
				}
			};
			modalStore.trigger(modal);
		}).then((r: any) => {
			console.log('showModalWalletConnected response:', r);
		});
	}
</script>

<div class="display: grid; justify-content: left;">
	<div class="card">
		<section class="p-4">
			<h2 class="h2">Engage Page</h2>
		</section>
		<div class="flex relative inline-block">
			<button class="btn btn-sm variant-filled-primary" onclick={showModalWalletConnected}>
				<span class="icon"><Wallet /></span>
			</button>
		</div>
		<ul>
			{#if connectedWalletStore.value}
				<li>
					<span class="text-secondary-500">Wallet: </span>
					<span class="text-primary-500">{connectedWalletStore.value.name}</span>

					<!-- Check if the wallet has ownedGearItems and loop through it if present -->
					{#if connectedWalletStore.value.gearItems && Object.values(connectedWalletStore.value.gearItems).length > 0}
						<ul>
							{#each Object.values(connectedWalletStore.value.gearItems) as gear}
								<li class="text-primary-500">{gear.name}</li>
								<li>{gear.image}</li>
							{/each}
						</ul>
						<br />
					{:else}
						<p>No gear owned.</p>
					{/if}
				</li>
			{/if}
		</ul>
	</div>
</div>
