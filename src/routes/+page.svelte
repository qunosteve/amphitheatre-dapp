<script lang="ts">
	//skeleton and svelte imports
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	//3rd party imports
	import { CircleHelp } from 'lucide-svelte';

	//import graphics
	import AmphiLogo from '$lib/assets/svg/amphilogographic.svelte';
	import AmphiLogoText from '$lib/assets/svg/amphilogotext.svelte';

	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import CottageIcon from '$lib/assets/svg/cottage_noborder.svelte';
	import TasLogo from '$lib/assets/svg/taslogo.svelte';
	import Gamepad from '$lib/assets/svg/gamepad.svelte';
	import Lore from '$lib/assets/svg/wax-tablet.svelte';

	//import subpages
	import Tas from './explore/Tas.svelte';
	import Home from './explore/Home.svelte';
	import Game from './explore/Game.svelte';
	import LorePage from './explore/Lore.svelte';

	//page logic and variables
	let exploreMode: string = "home";

</script>
<div>
	<RadioGroup rounded="rounded-container-token" class="grid grid-cols-4 gap11" active="bg-gradient-to-br variant-gradient-primary-secondary" hover="hover:variant-soft-secondary">
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
		<RadioItem bind:group={exploreMode} name="game" value={'game'}>
			<div style="display: flex; justify-content: center; align-items: center;">
				<Gamepad iconSize={30} />
			</div>
		</RadioItem>
		<RadioItem bind:group={exploreMode} name="lore" value={'lore'}>
			<div style="display: flex; justify-content: center; align-items: center;">
				<Lore iconSize={30} />
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
	{:else if exploreMode === "lore"}
        <LorePage />	
    {/if}

</div>

