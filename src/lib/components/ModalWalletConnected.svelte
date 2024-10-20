<script lang="ts">
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

	import ModalWalletConnectedApes from '$lib/components/ModalWalletConnectedApes.svelte';
	import ModalWalletConnectedGear from '$lib/components/ModalWalletConnectedGear.svelte';

	// Import modal store
	const modalStore = getModalStore();

	function showModalWalletConnectedApes() {
		console.log('showModalWalletConnectedApes called: ');
		new Promise<boolean>((resolve) => {
			const c: ModalComponent = {
				ref: ModalWalletConnectedApes
			};
			const modal: ModalSettings = {
				type: 'component',
				component: c,
				title: 'Wallet Connected Apes',
				body: 'Wallet Connected Apes body.',
				response: (r: boolean) => {
					resolve(r);
				}
			};
			modalStore.trigger(modal);
			modalStore.trigger($modalStore[0]);
			modalStore.close();
		}).then((r: any) => {
			console.log('showModalWalletConnectedApes response:', r);
		});
	}

	function showModalWalletConnectedGear() {
		console.log('showModalWalletConnectedGear called: ');
		new Promise<boolean>((resolve) => {
			const c: ModalComponent = {
				ref: ModalWalletConnectedGear
			};
			const modal: ModalSettings = {
				type: 'component',
				component: c,
				title: 'Wallet Connected Gear',
				body: 'Wallet Connected Gear body.',
				response: (r: boolean) => {
					resolve(r);
				}
			};
			modalStore.trigger(modal);
			modalStore.trigger($modalStore[0]);
			modalStore.close();
		}).then((r: any) => {
			console.log('showModalWalletConnectedGear response:', r);
		});
	}
</script>

{#if $modalStore[0]}
	<div class="card w-modal-slim !bg-secondary-800">
		<div class="grid grid-cols-1">
			<span class="text-secondary-500 justify-self-center">[ Wallet info goes here ]</span>
		</div>
		<div class="grid grid-cols-1">
			<button class="btn !bg-transparent" onclick={showModalWalletConnectedApes}>
				<span class="text-secondary-500 justify-self-center">[ View Apes ]</span>
			</button>
		</div>
		<div class="grid grid-cols-1">
			<button class="btn !bg-transparent" onclick={showModalWalletConnectedGear}>
				<span class="text-secondary-500 justify-self-center">[ View Gear ]</span>
			</button>
		</div>
		<div class="grid grid-cols-1">
			<span class="text-secondary-500 justify-self-center">[ Manage Wallets ]</span>
		</div>
		<div class="grid grid-cols-1">
			<span class="text-secondary-500 justify-self-center">[ Disconnect Wallet ]</span>
		</div>
	</div>
{/if}
