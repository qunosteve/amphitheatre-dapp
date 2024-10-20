import { redirect } from '@sveltejs/kit';

import { env } from '$env/dynamic/private'; // Import server-side env variables

export const GET = async ({ url, cookies }) => {
    const verifyParams = url.searchParams;
    verifyParams.set('openid.mode', 'check_authentication');

    const verifyUrl = 'https://steamcommunity.com/openid/login' + '?' + verifyParams.toString();

    const responseFromSteamIsValid = await fetch(verifyUrl);
    const res = await responseFromSteamIsValid.text();

    let userSteamID64;
    if (res.includes('true')) {
        userSteamID64 = verifyParams.get('openid.claimed_id')?.replace(/^\D+/g, '');
        console.log('Request has been validated by OpenID, Steam ID:' + userSteamID64);
    } else {
        console.log('Status 408: Request timeout');
    }

    const userSteamApiKey = env.SECRET_STEAM_API_KEY; // STEAM API KEY
    const userDataLink = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${userSteamApiKey}&steamids=${userSteamID64}`;

    const responseFromSteamUserInfo = await fetch(userDataLink);
    const resp = await responseFromSteamUserInfo.text();
    const userJsonResp = JSON.parse(resp);

    const userData = userJsonResp['response']['players'][0];
    const steamID = userData.steamid;
    const personaname = userData.personaname;
    const avatar = userData.avatarmedium;

    // Store retrieved Steam data in cookies
    cookies.set('steam_id', steamID, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
    });
    cookies.set('steam_personaname', personaname, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
    });
    cookies.set('steam_avatar', avatar, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
    });

    throw redirect(302, 'http://localhost:5173/profile');
};
