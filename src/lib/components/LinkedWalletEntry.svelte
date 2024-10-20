<script lang="ts">
	import { createEventDispatcher, tick } from 'svelte';
	import { connected, signerAddress } from 'svelte-wagmi';
	import {
		Link2,
		Pencil,
		RefreshCcw,
		Sword,
		Trash2,
		Unlink2,
		UserRound,
	} from 'lucide-svelte';

	import {
		type LinkedWallet,
		type GearItems,
		fetchGear,
		getShortAddress,
		walletHasApes,
		walletHasGear
	} from '$lib/linkedWallet';

	// Props to be passed into the component
	export let linkedWallet: LinkedWallet;

	// Get count of gear items from linked wallet
	let apesCount = Object.keys(linkedWallet.apes || {}).length || 0;
	// Get count of gear items from linked wallet
	let gearItemsCount = Object.keys(linkedWallet.gearItems || {}).length || 0;

	let editing: boolean = false; // Track editing state
	let inputRef: HTMLInputElement; // Reference to the input element

	const dispatch = createEventDispatcher(); // Used to dispatch custom events

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

	// Save wallet name and notify the parent about the update
	function updateWalletName() {
		toggleEdit(); // Turn off editing mode after saving
		//		dispatch('updateWallet', { wallet: linkedWallet }); // Notify parent about update
	}

	function deleteWallet() {
		dispatch('deleteWallet', { wallet: linkedWallet }); // Notify parent about deletion
	}

	async function loadGear() {
		let gearItems: GearItems = await fetchGear(linkedWallet.address);
		linkedWallet.gearItems = gearItems;
	}

	function showApes() {
		console.log('dispatch showApes', linkedWallet.name);
		dispatch('showApes', { wallet: linkedWallet }); // Notify parent about deletion
	}

	let elemApes: HTMLDivElement;

	function multiColumnLeft(): void {
		let x = elemApes.scrollWidth;
		if (elemApes.scrollLeft !== 0) x = elemApes.scrollLeft - elemApes.clientWidth;
		elemApes.scroll(x, 0);
	}

	function multiColumnRight(): void {
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (elemApes.scrollLeft < elemApes.scrollWidth - elemApes.clientWidth - 1)
			x = elemApes.scrollLeft + elemApes.clientWidth;
		elemApes.scroll(x, 0);
	}
</script>

{#snippet walletButtonApes(styleIcon: string, styleText: string)}
	<span><UserRound class=" {styleIcon}" /></span>
	<span class={styleText}>{apesCount}</span>
{/snippet}

{#snippet walletButtonGear(styleIcon: string, styleText: string)}
	<span><Sword class={styleIcon} /></span>
	<span class={styleText}>{gearItemsCount}</span>
{/snippet}

<div class="card h-16 p-2 gap-4 grid grid-cols-2 items-center">
	<div class="flex gap-4 items-center">
		<div class="flex gap-6">
			<!-- Link icon for the entry -->
			{#if $connected && linkedWallet.address == $signerAddress}
				<button type="button" class="!bg-transparent"><Link2 class="text-green-500" /></button>
			{:else}
				<button type="button" class="!bg-transparent"><Unlink2 class="text-secondary-500" /></button
				>
			{/if}
			<!-- Refresh button for the entry -->
			<button type="button" class="!bg-transparent" onclick={loadGear}>
				<RefreshCcw class="text-secondary-500" />
			</button>
			<!-- Button to edit the entry -->
			<button type="button" class="!bg-transparent" onclick={toggleEdit}>
				<Pencil class="text-primary-500" />
			</button>
		</div>
		<!-- Details of the entry -->
		<div>
			{#if editing}
				<!-- Input field for editing with inputRef to capture input element -->
				<input
					type="text"
					bind:value={linkedWallet.name}
					bind:this={inputRef}
					onblur={updateWalletName}
					class="input"
				/>
			{:else}
				<!-- Display wallet name when not editing -->
				<span class="text-primary-500">{linkedWallet.name}</span>
			{/if}
			<br />
			<span class="text-secondary-500">{getShortAddress(linkedWallet)}</span>
		</div>
		<div>
			<!-- Character button for the entry -->
			{#if walletHasApes(linkedWallet)}
				<button
					type="button"
					class="!bg-transparent flex items-center space-x-2"
					onclick={showApes}
				>
					{@render walletButtonApes('text-primary-500', 'text-primary-500')}
				</button>
			{:else}
				<button
					type="button"
					class="!bg-transparent flex items-center space-x-2"
					onclick={showApes}
				>
					{@render walletButtonApes('text-error-500', 'text-error-500')}
				</button>
			{/if}
		</div>
		<span class="divider-vertical h-8" style="border-color: rgb(var(--color-secondary-800));"
		></span>
		<div>
			<!-- Gear button for the entry -->
			{#if walletHasGear(linkedWallet)}
				<button type="button" class="!bg-transparent flex items-center space-x-2">
					{@render walletButtonGear('text-primary-500', 'text-primary-500')}
				</button>
			{:else}
				<button type="button" class="!bg-transparent flex items-center space-x-2">
					{@render walletButtonGear('text-error-500', 'text-error-500')}
				</button>
			{/if}
		</div>
	</div>
	<div class="justify-self-end">
		<!-- Trash button for the entry -->
		<button type="button" class="btn-icon !bg-transparent" onclick={deleteWallet}>
			<Trash2 class="text-primary-500" />
		</button>
	</div>
</div>
