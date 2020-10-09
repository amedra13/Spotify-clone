export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'https://spotify-clone-1867c.web.app/';
const clientId = '5cd8df60ab154094a671522185990d38';

const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			let parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};
export const getPlaylistUri = (playlist) => {
	return playlist.split(':').slice(-1)[0];
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
