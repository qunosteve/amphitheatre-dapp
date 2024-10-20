import { getContract, type ThirdwebClient } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
//import { getOwnedNFTs as getOwnedNFTs_erc721 } from "thirdweb/extensions/erc721";
import { getOwnedNFTs as getOwnedNFTs_erc1155 } from "thirdweb/extensions/erc1155";
import { ThirdwebSDK, type NFT } from "@thirdweb-dev/sdk";
import { BaseSepoliaTestnet } from "@thirdweb-dev/chains";

import { PUBLIC_BASE_CONTRACT_APES, PUBLIC_BASE_CONTRACT_GEAR } from '$env/static/public'
import { localStore } from '$lib/localStore.svelte';

import type { Ape, ApeMetadataAttribute } from "./Ape";
import { type GearItem } from "./GearItem";

export const thirdwebClientStore = localStore<ThirdwebClient | null>('thirdwebClient', null);

// Define the Blockchain types with restricted values
export type LinkedWalletBlockchain = "Base";

// Define the LinkedWallet interface
export interface LinkedWallet {
    readonly id: string // expected to be <blockchain>_<address>
    readonly blockchain: LinkedWalletBlockchain;
    readonly address: string;
    name: string;
    apes: Record<string, Ape>;
    gearItems: Record<string, GearItem>;
}

/*
// Function to create a LinkedWallet instance
export function createLinkedWallet(
    blockchain: LinkedWalletBlockchain,
    address: string,
    name?: string,
    apes?: Record<string, Ape>,
    ownedGearItems?: Record<string, GearItem>): LinkedWallet {
    return {
        id: `${blockchain}_${address}`,  // Concatenates blockchain and address to form the id
        blockchain,
        address,
        name: name ?? "--unnamed--",  // Defaults to "--unnamed--" if name is not provided
        apes: apes ?? {},  // Defaults to an empty array if apes is not provided
        gearItems: ownedGearItems ?? {},  // Defaults to an empty array if ownedGearItems is not provided
    };
}
*/
// Function to create a LinkedWallet instance
export async function createLinkedWallet(
    blockchain: LinkedWalletBlockchain,
    address: string,
    name?: string): Promise<LinkedWallet> {
    return {
        id: `${blockchain}_${address}`,  // Concatenates blockchain and address to form the id
        blockchain,
        address,
        name: name ?? "--unnamed--",  // Defaults to "--unnamed--" if name is not provided
        apes: await fetchApes(address) ?? {},  // Defaults to an empty array if apes is not provided
        gearItems: await fetchGear(address) ?? {},  // Defaults to an empty array if ownedGearItems is not provided
    };
}

// Function to get the shortened form of the address
export function getShortAddress(wallet: LinkedWallet): string {
    const { address } = wallet;
    if (address.length <= 10) {
        return address; // If address is too short to truncate, return it as is
    }
    const start = address.slice(0, 10); // First 10 characters
    const end = address.slice(-10); // Last 10 characters
    return `${start}...${end}`;
}

// hasApes function to check if the wallet has any apes
export function walletHasApes(wallet: LinkedWallet): boolean {
    return wallet.apes && Object.keys(wallet.apes).length > 0;
}

// hasApes function to check if the wallet has any gearItems
export function walletHasGear(wallet: LinkedWallet): boolean {
    return wallet.gearItems && Object.keys(wallet.gearItems).length > 0;
}

// Define the response type (record of apes indexed by id)
export type Apes = Record<string, Ape>;

/**
 * Fetch GearItem NFTs owned by a specific wallet.
 *
 * @param walletAddress - The wallet address to fetch NFTs from.
 * @returns - A promise that resolves with an array of Apes.
 */
//export async function getApes(thirdwebClient: ThirdwebClient, walletAddress: string): Promise<Apes> {
export async function fetchApes(walletAddress: string): Promise<Apes> {
    console.log('Fetching owned NFTs for Apes');
    try {
        const sdk = new ThirdwebSDK(BaseSepoliaTestnet, {
            clientId: "8bfca423161e8da64808dd04188530af",
        });
        /*          
                // Get the contract instance for the NFT collection
                const apeContract = getContract({
                    client: thirdwebClient,
                    chain: baseSepolia,
                    address: "0xc3e65e17182535a891De7a95F660E3dD124DE2B2"
                });
        
                // Fetch NFTs owned by the specific wallet
                const ownedNfts = await getOwnedNFTs_erc721({
                    contract: apeContract,
                    owner: walletAddress
                });
        */
        // Get the contract instance for the NFT collection
        const nftCollection = await sdk.getContract(PUBLIC_BASE_CONTRACT_APES);

        // Fetch NFTs owned by the specific wallet
        const ownedNfts: NFT[] = await nftCollection.erc721.getOwned(walletAddress);

        // Initialize an object to store ape and their metadata
        const apes: Apes = {};

        // Display the NFTs owned by the wallet
        console.log(`NFTs owned by ${walletAddress}:`, ownedNfts);

        ownedNfts.forEach((nft) => {
            //            const id = String(nft.id ?? "Unknown")

            // Get NFT metadata
            const metadata = nft.metadata;
            const id = String(metadata.id)

            const apeName = String(metadata.name ?? "Unknown");
            const apeDescription = metadata.description ?? "Unknown";
            const apeImage = metadata.image ?? "";

            const attributes = metadata.attributes as unknown as ApeMetadataAttribute[];

            const apeFamily = attributes?.find(attr => attr.trait_type === "Family")?.value ?? "Unknown";
            const apeClass = attributes?.find(attr => attr.trait_type === "Class")?.value ?? "Unknown";

            const apeBackground = attributes?.find(attr => attr.trait_type === "Background")?.value ?? "None";
            const apeHat = attributes?.find(attr => attr.trait_type === "Hat")?.value ?? "None";
            const apeHead = attributes?.find(attr => attr.trait_type === "Head")?.value ?? "None";
            const apeEyes = attributes?.find(attr => attr.trait_type === "Eyes")?.value ?? "None";
            const apeEars = attributes?.find(attr => attr.trait_type === "Ears")?.value ?? "None";
            const apeAccessory = attributes?.find(attr => attr.trait_type === "Accessory")?.value ?? "None";
            const apeFacialHair = attributes?.find(attr => attr.trait_type === "Facial Hair")?.value ?? "None";
            const apeBody = attributes?.find(attr => attr.trait_type === "Body")?.value ?? "None";
            const apeWeapon = attributes?.find(attr => attr.trait_type === "Weapon")?.value ?? "None";

            const apeRefinedBackground = attributes?.find(attr => attr.trait_type === "Refined Background")?.value ?? "None";
            const apeRefinedHat = attributes?.find(attr => attr.trait_type === "Refined Hat")?.value ?? "None";
            const apeRefinedHead = attributes?.find(attr => attr.trait_type === "Refined Head")?.value ?? "None";
            const apeRefinedEyes = attributes?.find(attr => attr.trait_type === "Refined Eyes")?.value ?? "None";
            const apeRefinedEars = attributes?.find(attr => attr.trait_type === "Refined Ears")?.value ?? "None";
            const apeRefinedAccessory = attributes?.find(attr => attr.trait_type === "Refined Accessory")?.value ?? "None";
            const apeRefinedFacialHair = attributes?.find(attr => attr.trait_type === "Refined Facial Hair")?.value ?? "None";
            const apeRefinedBody = attributes?.find(attr => attr.trait_type === "Refined Body")?.value ?? "None";
            const apeRefinedWeapon = attributes?.find(attr => attr.trait_type === "Refined Weapon")?.value ?? "None";

            const ape: Ape = {
                //common ape values
                id: id,
                name: apeName,
                description: apeDescription,
                image: apeImage,
                family: apeFamily,
                class: apeClass,
                background: apeRefinedBackground !== "None" ? apeRefinedBackground : apeBackground,
                hat: apeRefinedHat !== "None" ? apeRefinedHat : apeHat,
                head: apeRefinedHead !== "None" ? apeRefinedHead : apeHead,
                eyes: apeRefinedEyes !== "None" ? apeRefinedEyes : apeEyes,
                ears: apeRefinedEars !== "None" ? apeRefinedEars : apeEars,
                accessory: apeRefinedAccessory !== "None" ? apeRefinedAccessory : apeAccessory,
                facialHair: apeRefinedFacialHair !== "None" ? apeRefinedFacialHair : apeFacialHair,
                body: apeRefinedBody !== "None" ? apeRefinedBody : apeBody,
                weapon: apeRefinedWeapon !== "None" ? apeRefinedWeapon : apeWeapon,
            };

            // Store the ape metadata by its ID or other unique key
            apes[id] = ape;
        });
        return apes;
    } catch (error) {
        console.error("Error fetching owned NFTs for Apes:", error);
        return {};
    }
}

// Define the response type (record of gear items indexed by id)
export type GearItems = Record<string, GearItem>;

/**
 * Fetch GearItem NFTs owned by a specific wallet.
 *
 * @param walletAddress - The wallet address to fetch NFTs from.
 * @returns - A promise that resolves with an array of GearItems.
 */
export async function fetchGear(walletAddress: string): Promise<GearItems> {
    console.log('Fetching owned NFTs for GearItems');
    try {
        // Initialize an object to store gear and their metadata
        const gear: GearItems = {};

        if (thirdwebClientStore.value) {
            // Get the contract instance for the NFT collection
            const gearContract = getContract({
                client: thirdwebClientStore.value,
                //            client: thirdwebClientx,
                chain: baseSepolia,
                address: PUBLIC_BASE_CONTRACT_GEAR
            });


            // Fetch NFTs owned by the specific wallet
            const ownedNfts = await getOwnedNFTs_erc1155({
                contract: gearContract,
                address: walletAddress
            });

            // Display the NFTs owned by the wallet
            console.log(`NFTs owned by ${walletAddress}:`, ownedNfts);

            ownedNfts.forEach((nft) => {
                const id = String(nft.id ?? "Unknown")

                // Add the NFT's metadata to the userGear array
                const metadata = nft.metadata;

                const gearItem: GearItem = {
                    //common gear values
                    id: id,
                    name: String(metadata.name ?? "Unknown"), // Ensure name is always a string
                    image: metadata.image ?? "",
                };

                // Store the gear metadata by its ID or other unique key
                gear[id] = gearItem;
            });
        }
        return gear;
    } catch (error) {
        console.error("Error fetching owned NFTs for GearItems:", error);
        return {};
    }
}
