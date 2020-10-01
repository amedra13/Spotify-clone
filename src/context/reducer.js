export const initialState = {
	user: null,
	playlists: [],
	album: null,
	activeSong: null,
	deviceID: null,
	// token:
	// 	'BQDWl-tbr893a0NN4z6-ywETRN2KXMBPUgRuvYsuanZZ0lgjjWUhcEpdZ7g7jR9lbX-Y13CL2ADdsoACax-AKylJCOYJ1bReur6JjJYnlIPmoJXfHMfPalyKquROggxkoB4d1nVG_4GJWdenSOhlvcB2Ag',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			};
		case 'SET_ALBUM':
			return {
				...state,
				album: action.selectedAlbum,
			};
		case 'SET_ACTIVE_SONG':
			return {
				...state,
				activeSong: action.activeSong,
			};
		case 'SET_DEVICE_ID':
			return {
				...state,
				deviceID: action.deviceID,
			};
		default:
			return state;
	}
};

export default reducer;
