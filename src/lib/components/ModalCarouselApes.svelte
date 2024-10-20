<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { Accordion, AccordionItem, getModalStore } from '@skeletonlabs/skeleton';
	import { ChevronLeft, ChevronRight, ScrollText } from 'lucide-svelte';

	import { type LinkedWallet } from '$lib/linkedWallet';
	import { type Ape } from '$lib/Ape';
	import greyscaleApe from '$lib/assets/GreyscaleApe.png';
	import magicEdenTas from '$lib/assets/MagicEden-TAS.png';


	//	let { parent }: {parent: { close: () => void } } = $props();

	let { parent, linkedWallet } = $props<{
		parent: { close: () => void };
		linkedWallet: LinkedWallet;
	}>();

//	const apes: Ape[] = Object.values(linkedWallet.apes);
	// Use conditional access to safely get the apes
	const apes: Ape[] = linkedWallet ? Object.values(linkedWallet.apes) : [];
	//	console.log('apes: ', apes);

	// Import modal store
	const modalStore = getModalStore();
	//	if ($modalStore[0]) console.log($modalStore[0].title);

	//	let linkedWallet: LinkedWallet = $modalStore[0]?.meta.wallet;
//	console.log('linkedWallet: ', linkedWallet.address);

	// svelte-ignore non_reactive_update - not working so updated VS Code settings to ignore
	let elemApes: HTMLDivElement;

	function multiColumnLeft(): void {
		//		console.log('multiColumnLeft called');
		let x = elemApes.scrollWidth;
		if (elemApes.scrollLeft !== 0) x = elemApes.scrollLeft - elemApes.clientWidth;
		elemApes.scroll(x, 0);
	}

	function multiColumnRight(): void {
		//		console.log('multiColumnRight called');
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (elemApes.scrollLeft < elemApes.scrollWidth - elemApes.clientWidth - 1)
			x = elemApes.scrollLeft + elemApes.clientWidth;
		elemApes.scroll(x, 0);
	}
</script>

{#if $modalStore[0]}
	<div class="card p-2 w-modal shadow-xl space-y-2">
		<div class="grid grid-cols-1">
			<span class="text-secondary-500 justify-self-center">[ Filters/Search goes here ]</span>
		</div>
		<div class="grid grid-cols-[auto_1fr_auto] gap-2 items-center variant-glass-secondary">
			<div>
				<!-- Button: Left -->
				<button type="button" class="rounded-lg variant-filled-primary" onclick={multiColumnLeft}>
					<ChevronLeft />
				</button>
			</div>
			<!-- Carousel -->
			{#if apes.length}
				<div
					bind:this={elemApes}
					class="snap-x snap-mandatory scroll-smooth flex gap-1 pt-2 pb-1 overflow-x-auto"
				>
					{#each apes as ape}
						<a href={ape.image} target="_blank" class="shrink-0 w-[50%] snap-start">
							<img
								class="rounded-container-token hover:brightness-125"
								src={ape.image}
								alt={ape.name}
								title={ape.name}
								loading="lazy"
							/>
						</a>
					{/each}
				</div>
			{:else}
				<div
					bind:this={elemApes}
					class="snap-x snap-mandatory scroll-smooth flex gap-1 pt-2 pb-1 overflow-x-auto items-center"
				>
					<a href={greyscaleApe} target="_blank" class="shrink-0 w-[50%] snap-start">
						<img
							class="rounded-container-token hover:brightness-125"
							src={greyscaleApe}
							alt="NakedApe"
							title="NakedApe"
							loading="lazy"
						/>
					</a>
					<span class="text-primary-500 justify-self-center">
						Buy an Ape!!! [ advert goes here... ]
						<a href="https://magiceden.us/collections/base/0xc3e65e17182535a891de7a95f660e3dd124de2b2" target="_blank" class="shrink-0 w-[50%] snap-start">
							<img
							class="rounded-container-token hover:brightness-125"
							src={magicEdenTas}
							alt="MagicEden-TAS"
							title="MagicEden-"
							loading="lazy"
						/>
						</a>
						
					</span>
				</div>
			{/if}
			<div>
				<!-- Button-Right -->
				<button type="button" class="rounded-lg variant-filled-primary" onclick={multiColumnRight}>
					<ChevronRight />
				</button>
			</div>
		</div>
		<div class="grid grid-cols-3">
			<div></div>
			<div>
				<Accordion>
					<AccordionItem>
						<svelte:fragment slot="lead"><ScrollText /></svelte:fragment>
						<svelte:fragment slot="summary"><p class="font-bold">Metadata</p></svelte:fragment>
						<svelte:fragment slot="content">
							<p>Class: Family:</p>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>
			<div class="justify-self-end">
				<button class="rounded-md p-1 variant-filled-primary" onclick={parent.onClose}>Close</button
				>
			</div>
		</div>
	</div>
{/if}
