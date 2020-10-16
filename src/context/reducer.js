export const initialState = {
	user: null,
	playlists: [],
	album: null,
	footerPlaying: false,
	activeSong: null,
	searchField: null,
	token: null,
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
		case 'SET_SONG_PLAYING':
			return {
				...state,
				footerPlaying: true,
			};
		case 'SET_SONG_PAUSED':
			return {
				...state,
				footerPlaying: false,
			};
		case 'SET_SEARCH_FIELD':
			return {
				...state,
				searchField: action.searchInput,
			};
		default:
			return state;
	}
};

export default reducer;
