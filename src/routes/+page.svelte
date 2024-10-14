<script lang="ts">
	import { MessageSquareQuote, Send, Twitter } from 'lucide-svelte';

	//import page elements
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import CottageIcon from '$lib/assets/svg/cottage_noborder.svelte';
	import TasLogo from '$lib/assets/svg/taslogo.svelte';
	import Gamepad from '$lib/assets/svg/gamepad.svelte';

	//import subpages
	import Tas from './explore/tas.svelte';
	import Home from './explore/home.svelte';
	import Game from './explore/Game.svelte';

	//page logic
	let exploreMode: string = "home";
</script>


<div>
	<RadioGroup rounded="rounded-container-token" class="grid grid-cols-3 gap11" active="bg-gradient-to-br variant-gradient-primary-secondary" hover="hover:variant-soft-secondary">
		<RadioItem bind:group={exploreMode} name="home" value={'home'}>
			<div style="display: flex; justify-content: center; align-items: center;">
				<CottageIcon iconSize={30} />
			</div>
		</RadioItem>
		<RadioItem bind:group={exploreMode} name="tas" value={'tas'}>
			<div style="display: flex; justify-content: center; align-items: center;">
				<TasLogo iconSize={30} />
			</div>
		</RadioItem>
		<RadioItem bind:group={exploreMode} name="tas" value={'game'}>
			<div style="display: flex; justify-content: center; align-items: center;">
				<Gamepad iconSize={30} />
			</div>
		</RadioItem>
	</RadioGroup>

	 <!-- Conditionally render Equipment Handler Type based on equipMode -->
	{#if exploreMode === "home"}
        <Home />
	{:else if exploreMode === "tas"}
        <Tas />
	{:else if exploreMode === "game"}
        <Game />		
    {/if}

</div>
