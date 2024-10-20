<script lang='ts'>
	import { getModalStore } from '@skeletonlabs/skeleton';
    import type { SvelteComponent } from 'svelte';

    import { ChevronLeft } from 'lucide-svelte';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	// Import modal store
	const modalStore = getModalStore();

	// Handle response
	function onBackButton(): void {
		if ($modalStore[0].response) $modalStore[0].response('back');
		modalStore.close();
	}

</script>

{#if $modalStore[0]}
	<div class="card w-modal-slim !bg-secondary-800">
        <button class="btn !bg-transparent {parent.buttonPositive}" on:click={onBackButton}><ChevronLeft /></button>
		<div class="grid grid-cols-1">
			<span class="text-secondary-500 justify-self-center">[ show Apes ]</span>
		</div>
    </div>
{/if}
