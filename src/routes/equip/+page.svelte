<script lang="ts">
	//import page elements
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import CraftsmenIcon from '$lib/assets/svg/craftsmenIcon.svelte';
	import MilitaryIcon from '$lib/assets/svg/militaryIcon.svelte';
    import ArtistsIcon from '$lib/assets/svg/artistsIcon.svelte';
	import MerchantIcon from '$lib/assets/svg/merchantIcon.svelte';
	import ExplorerIcon from '$lib/assets/svg/explorerIcon.svelte';
	//import subpages
	import Armoury from './Armoury.svelte';
	import Merchant from './Merchant.svelte';
	import Workshop from './Workshop.svelte';
	import Stables from './Stables.svelte';
	import Couturier from './Couturier.svelte';

	//page logic
	let equipMode: string = "armoury";

	

</script>
<div class="h-screen grid-rows-[auto_1fr_auto]">
<RadioGroup rounded="rounded-container-token" class="grid grid-cols-5 gap11" active="bg-gradient-to-br variant-gradient-primary-secondary" hover="hover:variant-soft-secondary">
	<RadioItem bind:group={equipMode} name="workshop" value={'workshop'}>
		<div style="display: flex; justify-content: center; align-items: center;">
			<span class="badge-icon variant-filled-error relative -top-4">3</span>
			<CraftsmenIcon iconSize={30} />
		</div>
	</RadioItem>
	<RadioItem bind:group={equipMode} name="stables" value={'stables'}>
		<div style="display: flex; justify-content: center; align-items: center;">
			<ExplorerIcon iconSize={30} />
		</div>
	</RadioItem>
	<RadioItem bind:group={equipMode} name="armoury" value={'armoury'}>
		<div style="display: flex; justify-content: center; align-items: center;">
			<MilitaryIcon iconSize={30}/>
		</div>	
	</RadioItem>
	<RadioItem bind:group={equipMode} name="couturier" value={'couturier'}>
		<div style="display: flex; justify-content: center; align-items: center;">
			<span class="badge-icon variant-filled-success relative -top-4">2</span>
			<ArtistsIcon iconSize={30}/>
		</div>
	</RadioItem>	

	<RadioItem bind:group={equipMode} name="merchant" value={'merchant'}>
		<div style="display: flex; justify-content: center; align-items: center;">
			<MerchantIcon iconSize={30} />
		</div>
	</RadioItem>
</RadioGroup>

    <!-- Conditionally render Equipment Handler Type based on equipMode -->
    {#if equipMode === "armoury"}
        <Armoury />
    {:else if equipMode === "workshop"}
        <Workshop />
	{:else if equipMode === "merchant"}
        <Merchant />
	{:else if equipMode === "stables"}
        <Stables />
	{:else if equipMode === "couturier"}
        <Couturier />
    {/if}

</div>
