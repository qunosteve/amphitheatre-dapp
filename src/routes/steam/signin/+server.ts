const openid_params = new URLSearchParams({
    'openid.ns': 'http://specs.openid.net/auth/2.0',
    'openid.mode': 'checkid_setup',
    'openid.return_to': 'http://localhost:5173/steam/verify/',
    'openid.realm': 'http://localhost:5173/steam/verify/',
    'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
    'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select'
});

const getUserSteamApiKey = () => {
    // get user steam api key but how to give it to verify/+server.ts
};

const steamLogin = () => {
    const url = 'https://steamcommunity.com/openid/login' + '?' + openid_params;

    const redirectToUrl = (url: string) => {
        window.location.href = url;
    };

    redirectToUrl(url);
};

export { steamLogin, getUserSteamApiKey };
