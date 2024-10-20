//import { type LinkedWallet, type LinkedWalletBlockchain } from '$lib/linkedWallet';
import { localStore } from '$lib/localStore.svelte';

import { type ThirdwebClient } from 'thirdweb';

import {
//    type Apes,
//    getApes,
//    createLinkedWallet,
//    type GearItems,
//    getGearItems,
    type LinkedWallet,
    type LinkedWalletBlockchain
} from '$lib/linkedWallet';

export const linkedWalletsStore = localStore<LinkedWallet[]>('linkedWallets', []);
// Export current value of linkedWalletStore
export const linkedWallets = linkedWalletsStore.value;

// Rune to store the currently connected wallet
export const connectedWalletStore = localStore<LinkedWallet | null>('connectedWallet', null);

export const thirdwebClientStore = localStore<ThirdwebClient | null>('thirdwebClient', null);

//export const connectWallet = (signerAddress: string) => {
//    console.log('connectWallet called: ', signerAddress);
//    const apes: Apes = await getApes(thirdwebClientStore.value, signerAddress);
//    const gearItems: GearItems = await getGearItems(thirdwebClientStore.value, signerAddress);
//    const newWallet = createLinkedWallet('Base', signerAddress, '-unamed-');
//    linkedWalletStore.addWallet(newWallet);
//    linkedWalletStore.setConnectedWallet(signerAddress);
//}

export const disconnectWallet = () => {
    linkedWalletStore.unsetConnectedWallet();
}

// Function to connect a wallet by ID
export const setConnectedWallet = (walletAddress: string) => {
    const blockchain: LinkedWalletBlockchain = "Base";
    const walletId = `${blockchain}_${walletAddress}`
    // Find the wallet by ID and set it as the connected wallet
    const walletIndex = linkedWalletsStore.value.findIndex(existingWallet => existingWallet.id === walletId);
    if (walletIndex !== -1) {
        connectedWalletStore.value = linkedWalletsStore.value[walletIndex];
    }
}

// Function to get address of connected wallet
export const getConnectedWalletAddress = () => {
    return connectedWalletStore.value?.address;
}

export const unsetConnectedWallet = () => {
    connectedWalletStore.value = null;
}

export const fetchConnectedWallet = () => {
    return connectedWalletStore.value;
}

// Add a new wallet to the store only if it doesn't already exist
export const addWallet = (wallet: LinkedWallet) => {
    // Check if wallet with the same id already exists
    const walletExists = linkedWalletsStore.value.some(existingWallet => existingWallet.id === wallet.id);

    if (!walletExists) {
        // Add wallet if it doesn't already exist
        linkedWalletsStore.value = [...linkedWalletsStore.value, wallet];
    } else {
        console.log(`Wallet with id ${wallet.id} already exists.`);
    }

}

// Update existing wallet in the store
export const updateWallet = (wallet: LinkedWallet) => {
    const walletIndex = linkedWalletsStore.value.findIndex(existingWallet => existingWallet.id === wallet.id);

    if (walletIndex !== -1) {
        // If wallet exists, update it
        linkedWalletsStore.value[walletIndex] = wallet;
        console.log(`Wallet with id ${wallet.id} updated.`);
    } else {
        console.log(`Wallet with id ${wallet.id} not found.`);
    }
}

// Delete existing wallet in the store
export const deleteWallet = (wallet: LinkedWallet) => {
    const walletIndex = linkedWalletsStore.value.findIndex(existingWallet => existingWallet.id === wallet.id);

    if (walletIndex !== -1) {
        // If wallet exists, delete it
        linkedWalletsStore.value.splice(walletIndex, 1);
        console.log(`Wallet with id ${wallet.id} deleted.`);
    } else {
        console.log(`Wallet with id ${wallet.id} not found.`);
    }
}

export const linkedWalletStore = {
    addWallet,
    updateWallet,
    deleteWallet,
    setConnectedWallet,
    unsetConnectedWallet,
    fetchConnectedWallet
}
