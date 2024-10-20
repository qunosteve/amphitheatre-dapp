import { createThirdwebClient, type ThirdwebClient } from "thirdweb";
import { env } from '$env/dynamic/private'; // Import server-side env variables

//import { defaultConfig } from 'svelte-wagmi';
//import { injected } from '@wagmi/connectors';
//import { baseSepolia } from 'viem/chains'

export async function load(): Promise<{ thirdwebClient: ThirdwebClient }> {
    const thirdwebClientId = env.SECRET_THIRDWEB_CLIENT_ID;

    if (!thirdwebClientId) {
        throw new Error("SECRET_THIRDWEB_CLIENT_ID is not defined in the environment variables.");
    }

    const thirdwebClient = createThirdwebClient({
        clientId: thirdwebClientId
    });

 /*
    const baseNetwork = env.PUBLIC_BASE_NETWORK;
    let defaultConfigChains;
    if (baseNetwork === 'Mainnet') {
        defaultConfigChains = [baseSepolia];
    } else {
        defaultConfigChains = [baseSepolia]
    }

    const erckit = defaultConfig({
        chains: defaultConfigChains,
        appName: env.PUBLIC_WALLETCONNECT_APP ?? 'Unknown',
        walletConnectProjectId: env.PUBLIC_WALLETCONNECT_ID ?? 'Unknown',
        alchemyId: env.SECRET_ALCHEMY_ID,
        connectors: [injected()]
    });
    await erckit.init();
*/
    return { thirdwebClient };
}
