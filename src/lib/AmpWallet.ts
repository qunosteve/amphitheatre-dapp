import { createThirdwebClient, getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { getOwnedNFTs } from "thirdweb/extensions/erc1155";

import { type GearItem } from "./GearItem";

const client = createThirdwebClient({
    clientId: "8bfca423161e8da64808dd04188530af",
});

// Define the Blockchain types with restricted values
export type Blockchain = "Base" | "Cardano";

// Define the AmpWallet interface
export interface AmpWallet {
    blockchain: Blockchain;
    address: string;
    name: string;
    ownedGearItems: GearItem[];
}

// Function to create a AmpWallet instance
export function createAmpWallet(blockchain: Blockchain, address: string, name?: string, ownedGearItems?: GearItem[]): AmpWallet {
    return {
        blockchain,
        address,
        name: name ?? address, // Defaults to address if name is not provided
        ownedGearItems: ownedGearItems ?? []  // Defaults to an empty array if ownedGearItems is not provided
    };
}

// Function to get the shortened form of the address
export function getShortAddress(wallet: AmpWallet): string {
    const { address } = wallet;
    if (address.length <= 10) {
        return address; // If address is too short to truncate, return it as is
    }
    const start = address.slice(0, 10); // First 10 characters
    const end = address.slice(-10); // Last 10 characters
    return `${start}...${end}`;
}

// Define the response type (record of gear metadata indexed by ID)
export type GearResponse = Record<string, GearItem>;

/**
 * Fetch gear NFTs owned by a specific wallet.
 *
 * @param walletAddress - The wallet address to fetch NFTs for.
 * @returns - A promise that resolves with an array of GearMetadata.
 */
export async function getGear(walletAddress: string): Promise<GearResponse> {
    console.log('calling getGear function to retrieve NFTs ');
    try {
        // Get the contract instance for the NFT collection
        const gearContract = getContract({
            client,
            chain: baseSepolia,
            address: "0xa14eea1911eb12FdBd189259aEC93246996BAfd2"
        });

        // Fetch NFTs owned by the specific wallet
        // const ownedNfts = await getOwned(walletAddress);
        const ownedNfts = await getOwnedNFTs({
            contract: gearContract,
            address: walletAddress
        });

        // Initialize an object to store gear and their metadata
        const gear: GearResponse = {};

        // Display the NFTs owned by the wallet
        console.log(`NFTs owned by ${walletAddress}:`, ownedNfts);

        ownedNfts.forEach((nft) => {
            const metadata = nft.metadata;

            // Type assertion to ensure metadata.attributes is treated as an array of Attribute
            //            const attributes = nft.metadata.attributes;

            // Add the NFT's metadata to the userGear array
            const id = String(metadata.id ?? "Unknown")

            const gearItem: GearItem = {
                //common gear values
                id: id,
                name: String(metadata.name ?? "Unknown"), // Ensure name is always a string
                image: metadata.image ?? "",
            };

            // Store the gear metadata by its ID or other unique key
            gear[id] = gearItem;
        });

        return gear;
    } catch (error) {
        console.error("Error fetching owned NFTs:", error);
        return {};
    }

}
