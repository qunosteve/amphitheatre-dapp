<script lang="ts">
	//skeleton and svelte imports
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	//3rd party imports
	import { CircleHelp } from 'lucide-svelte';

    //graphics imports
    import AmphiLogo from '$lib/assets/svg/amphilogographic.svelte'
    import TasLogo from '$lib/assets/svg/taslogo.svelte'
    import Gamepad from '$lib/assets/svg/gamepad.svelte'
    import sunscreenshot from '$lib/assets/png/amphi_splash.png'
</script>
<div style="display: grid; justify-content: center;">
    <div style="display: flex; justify-content: center; padding: 3% 10%;">
        <img alt="sunscreenshot" src={sunscreenshot} style="border-radius: 30px;">
      </div>      
</div>

<div class="flex flex-row pb-3">
	<div style="display: flex; justify-content: center; align-items: center;" class="basis-1/12 ">
	</div>
	<div style="display: flex; justify-content: center; align-items: center;" class="basis-10/12 ">
        
		<Accordion>
			<AccordionItem open>
				<svelte:fragment slot="lead">
					<div style="display: flex; justify-content: center;">
						<AmphiLogo iconSize={40} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="summary">The Amphitheatre</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						The Amphitheatre is a dynamic virtual destination where gamers, web3 enthusiasts, and members of The Ape Society can come together to compete in thrilling arena tournaments, vying for rewards like $SOCIETY, recognition, and glory. Beyond the arena, participants from all backgrounds have an active role in shaping the Amphitheatre ecosystem. The unique classes within The Ape Society introduce new items, features, and roles that help bring this world to life. All player owned assets and intellectual property like proprietary weapons, armor, skins are validated on the blockchain, ensuring that the economy remains open and accessible to anyone, from any device, whether or not they own the game client. This transparency and inclusivity invite everyone to be part of the Amphitheatres evolving landscape.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
                    <TasLogo/>
                </svelte:fragment>
				<svelte:fragment slot="summary">The Ape Society</svelte:fragment>
				<svelte:fragment slot="content">(content)</svelte:fragment>
			</AccordionItem>
            <AccordionItem>
				<svelte:fragment slot="lead">
                    <Gamepad/>
                </svelte:fragment>
				<svelte:fragment slot="summary">Gameplay</svelte:fragment>
				<svelte:fragment slot="content">(content)</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead"><CircleHelp /></svelte:fragment>
				<svelte:fragment slot="summary">
					<div class="flex justify-left">
						<span class="text-primary-500">Enquire</span>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="content">
					<div class="logo-cloud grid-cols-4 sm:!grid-cols-4 gap-1 [&>.logo-item]:variant-filled-primary">
						<a class="logo-item" href="/">
							<span>(icon)</span>
							<span>TAS Website</span>
						</a>
						<a class="logo-item" href="/">
							<span>(icon)</span>
							<span>Discord</span>
						</a>	
						<a class="logo-item" href="/">
							<span>(icon)</span>
							<span>Twitter</span>
						</a>	
						<a class="logo-item" href="/">
							<span>(icon)</span>
							<span>Other</span>
						</a>
					</div>
				</svelte:fragment>
			</AccordionItem>
			<!-- ... -->
		</Accordion>
	</div>
	<div style="display: flex; justify-content: center; align-items: center;" class="basis-1/12 ">
	</div>
</div>
