export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token:
	// 	'BQAViG3gJ4DyCtOfcqHNsE2jzL2WXTfiG0UfXSB1v5-_Xd0qLllIqZkPXzpb3FrqtPXoAPnbaLnNGGIgjnYPY1GuQiThyOnxyYX6xqblLikuxcCY9P9RmK0NTnkV45nQYSCcUDzTKDSrAdoytapRESr1Fg',
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
