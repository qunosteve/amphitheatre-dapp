<script lang="ts">
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
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
			<!-- ... -->
		</Accordion>
	</div>
	<div style="display: flex; justify-content: center; align-items: center;" class="basis-1/12 ">
	</div>
</div>
