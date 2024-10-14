<script lang="ts">
//imports
import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

//image imports
import TasLogo from '$lib/assets/svg/taslogo.svelte';
import TasTextLogo from '$lib/assets/svg/taslogosecondary.svelte';
import CraftsmenIcon from '$lib/assets/svg/craftsmenIcon.svelte';
import ArtistsIcon from '$lib/assets/svg/artistsIcon.svelte';
import ExplorerIcon from '$lib/assets/svg/explorerIcon.svelte';
import MerchantIcon from '$lib/assets/svg/merchantIcon.svelte';
import MilitaryIcon from '$lib/assets/svg/militaryIcon.svelte';
import RoyalAdvisorIcon from '$lib/assets/svg/royalAdvisorIcon.svelte';
import NobleIcon from '$lib/assets/svg/nobleIcon.svelte';
//page variables


</script>

<div style="display: grid; justify-content: center;">
	<div style="display: flex; justify-content: center; padding-top: 50px; padding-bottom: 20px;">
		<TasLogo iconSize={200} />
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
						<TasTextLogo iconSize={35} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="summary">&nbsp;</svelte:fragment>
				<svelte:fragment slot="content">
					<h2>
						 Your Onchain Country Club
					</h2>
					<p>
						The Ape Society community is an exclusive community of builders, evangelists and creatives on the blockchain. The aim is to create new ways of providing value whilst enhancing our ecosystem and empower our members.
					</p>
					<p>
						Every Ape in The Society has its own name. This unique feature allows the holder to connect more deeply with the Ape and the family name categorises them in different Classes. There are 35 different families, and each one of them has a reigning King.
					</p>
					<p>
						Verified holders are given access to both the team-supported token and the community-run DAO -- each of which comes with unique benefits, events, and more.
					</p>
					<p>
						There are 7 different classes of Apes in The Society: Craftsmen at the bottom, Artists, Explorers, Merchants, Military Officers, Royal Advisors, and de' Medici at the top. Each class provides unique benefits, providing holders with a more personalized experience based on how they participate in the team-supported and community supported ecosystem.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<div style="display: flex; justify-content: center;">
						<CraftsmenIcon iconSize={35} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="summary">Craftsmen</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Craftsmen provide the foundational crafting kits required to create all items used in the Amphitheatre. In addition, some craftsmen families have earned reduced cost and rarity boost bonuses in crafting weapons, shields and armor which to sell to players in the open market. Amphitheatre gear supply is directly correlated to how many Craftsman apes are actively producing crafting kits.
					</p>
					<p>
						Years of manual labor give craftsmen bonuses in crafting in the arena.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<div style="display: flex; justify-content: center;">
						<ArtistsIcon iconSize={35} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="summary">Artists</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Entertaining is an artist’s specialty. Events in the Amphitheatre present limitless opportunities for artists to earn $SOCIETY. Everyone wants to represent their ingame avatar with unique skins. Artists serve as "Couturiers" which means they can design and sell skins for $SOCIETY to players to visually represent their avatars in the arena..
					</p>
					<p>
						As the ape society's source of entertainment, artists serve the essential job of entertaining and livestreaming their point of view to the audience. Entrepreneurial artists could establish their ape as a brand in the livestreaming and greater community, or they could sell their entertainer tokens on the secondary market for others to stream.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<div style="display: flex; justify-content: center;">
						<ExplorerIcon iconSize={35} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="summary">Explorers</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Entertaining is an artist’s specialty. Events in the Amphitheatre present limitless opportunities for artists to earn $SOCIETY. Everyone wants to represent their ingame avatar with unique skins. Artists serve as "Couturiers" which means they can design and sell skins for $SOCIETY to players to visually represent their avatars in the arena..
					</p>
					<p>
						As the ape society's source of entertainment, artists serve the essential job of entertaining and livestreaming their point of view to the audience. Entrepreneurial artists could establish their ape as a brand in the livestreaming and greater community, or they could sell their entertainer tokens on the secondary market for others to stream.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<div style="display: flex; justify-content: center;">
						<MerchantIcon iconSize={35} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="summary">Merchants</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Entertaining is an artist’s specialty. Events in the Amphitheatre present limitless opportunities for artists to earn $SOCIETY. Everyone wants to represent their ingame avatar with unique skins. Artists serve as "Couturiers" which means they can design and sell skins for $SOCIETY to players to visually represent their avatars in the arena..
					</p>
					<p>
						As the ape society's source of entertainment, artists serve the essential job of entertaining and livestreaming their point of view to the audience. Entrepreneurial artists could establish their ape as a brand in the livestreaming and greater community, or they could sell their entertainer tokens on the secondary market for others to stream.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<div style="display: flex; justify-content: center;">
						<MilitaryIcon iconSize={35} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="summary">Military Officers</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Entertaining is an artist’s specialty. Events in the Amphitheatre present limitless opportunities for artists to earn $SOCIETY. Everyone wants to represent their ingame avatar with unique skins. Artists serve as "Couturiers" which means they can design and sell skins for $SOCIETY to players to visually represent their avatars in the arena..
					</p>
					<p>
						As the ape society's source of entertainment, artists serve the essential job of entertaining and livestreaming their point of view to the audience. Entrepreneurial artists could establish their ape as a brand in the livestreaming and greater community, or they could sell their entertainer tokens on the secondary market for others to stream.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<div style="display: flex; justify-content: center;">
						<RoyalAdvisorIcon iconSize={35} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="summary">Royal Advisors</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Entertaining is an artist’s specialty. Events in the Amphitheatre present limitless opportunities for artists to earn $SOCIETY. Everyone wants to represent their ingame avatar with unique skins. Artists serve as "Couturiers" which means they can design and sell skins for $SOCIETY to players to visually represent their avatars in the arena..
					</p>
					<p>
						As the ape society's source of entertainment, artists serve the essential job of entertaining and livestreaming their point of view to the audience. Entrepreneurial artists could establish their ape as a brand in the livestreaming and greater community, or they could sell their entertainer tokens on the secondary market for others to stream.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<div style="display: flex; justify-content: center;">
						<NobleIcon iconSize={35} />
					</div>
				</svelte:fragment>
				<svelte:fragment slot="summary">Nobles</svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Entertaining is an artist’s specialty. Events in the Amphitheatre present limitless opportunities for artists to earn $SOCIETY. Everyone wants to represent their ingame avatar with unique skins. Artists serve as "Couturiers" which means they can design and sell skins for $SOCIETY to players to visually represent their avatars in the arena..
					</p>
					<p>
						As the ape society's source of entertainment, artists serve the essential job of entertaining and livestreaming their point of view to the audience. Entrepreneurial artists could establish their ape as a brand in the livestreaming and greater community, or they could sell their entertainer tokens on the secondary market for others to stream.
					</p>
				</svelte:fragment>
			</AccordionItem>
			<!-- ... -->
		</Accordion>
	</div>
	<div style="display: flex; justify-content: center; align-items: center;" class="basis-1/12 ">
	</div>
</div>
