export function load({ cookies }) {
	const steam_id = cookies.get('steam_id');
	const steam_personaname = cookies.get('steam_personaname');
	const steam_avatar = cookies.get('steam_avatar');

	return {
		steam_id,
        steam_personaname,
        steam_avatar
	};
}
