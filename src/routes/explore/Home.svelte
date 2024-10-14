<script lang="ts">
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import AmphiLogo from '$lib/assets/svg/amphilogographic.svelte'
    import AmphiLogoText from '$lib/assets/svg/amphilogotext.svelte'
</script>
<div style="display: grid; justify-content: center;">
	<div style="display: flex; justify-content: center; padding-top: 50px; padding-bottom: 20px;">
		<AmphiLogoText iconSize={100} />
	</div>
</div>

<div class="flex flex-row pt-3 pb-3">
	<div style="display: flex; justify-content: center; align-items: center;" class="basis-1/12 ">
	</div>
	<div style="display: flex; justify-content: center; align-items: center;" class="basis-10/12 ">

		<Accordion>
			<AccordionItem open>
				<svelte:fragment slot="lead">
					<div style="display: flex; justify-content: center;">
						<AmphiLogo iconSize={50} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="summary">&nbsp;</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						The Amphitheatre is a dynamic virtual destination where gamers, web3 enthusiasts, and members of The Ape Society can come together to compete in thrilling arena tournaments, vying for rewards like $SOCIETY, recognition, and glory. Beyond the arena, participants from all backgrounds have an active role in shaping the Amphitheatre ecosystem. The unique classes within The Ape Society introduce new items, features, and roles that help bring this world to life. All player owned assets and intellectual property like proprietary weapons, armor, skins are validated on the blockchain, ensuring that the economy remains open and accessible to anyone, from any device, whether or not they own the game client. This transparency and inclusivity invite everyone to be part of the Amphitheatres evolving landscape.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<svelte:fragment slot="summary">(summary)</svelte:fragment>
				<svelte:fragment slot="content">(content)</svelte:fragment>
			</AccordionItem>
			<!-- ... -->
		</Accordion>
	</div>
	<div style="display: flex; justify-content: center; align-items: center;" class="basis-1/12 ">
	</div>
</div>
