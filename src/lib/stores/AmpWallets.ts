import { browser } from '$app/environment';
import { writable } from 'svelte/store'

import { type AmpWallet } from '$lib/AmpWallet';

const storedAmpWallets: AmpWallet[] = browser
    ? JSON.parse(window.localStorage.getItem("ampWallets") ?? '[]')
    : [];
const ampWalletStore = writable<AmpWallet[]>(storedAmpWallets);

// Subscribe to changes and update localStorage whenever the store is updated
ampWalletStore.subscribe((ampWallets) => {
    if (browser) {
        window.localStorage.setItem("ampWallets", JSON.stringify(ampWallets));
    }
});

const addWallet = (wallet: AmpWallet) => ampWalletStore.update(wallets => {
    return [...wallets, wallet];
});

const reset = () => {
    ampWalletStore.set([]);
};

export default {
    subscribe: ampWalletStore.subscribe,
    addWallet,
    reset
}