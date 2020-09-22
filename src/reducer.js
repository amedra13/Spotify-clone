export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token:
	// 	'BQDUmiAnNGN1AL3EI7nlWT6Jto-nSUYjxiiB2dSzrElmsKs3UvusIB1KHdu62qGgcnHC-3KwmIG--oLjYm_Ce3RWHjeIoUq9yxBnvzfFjQ8eQWEHS6QRA5s9NuYZu9XuRbkBEmGjCjH-DhJlW_ZPM_pm-Q',
};

const reducer = (state, action) => {
	console.log(action);
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
		default:
			return state;
	}
};

export default reducer;
