<script lang="ts">
	import ampWalletsStore from '$lib/stores/AmpWallets';
	import { getShortAddress } from '$lib/AmpWallet';
</script>

<div id="ampWalletList">
	<ul>
		{#each $ampWalletsStore as wallet}
			<li>
				{wallet.blockchain} - {wallet.name} - {getShortAddress(wallet)}
				
				<!-- Check if the wallet has ownedGearItems and loop through it if present -->
				{#if wallet.ownedGearItems && wallet.ownedGearItems.length > 0}
					<ul>
						{#each wallet.ownedGearItems as gear}
							<li>{gear.name} - <img src={gear.image} alt={gear.name} width="50" /></li>
						{/each}
					</ul>
				{:else}
					<p>No gear owned.</p>
				{/if}
			</li>
		{/each}
	</ul>
</div>
