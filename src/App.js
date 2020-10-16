import React, { useEffect } from 'react';
import { useDataLayerValue } from './context/DataLayer';
import Player from './Player/Player';
import Login from './Login/Login';
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		const _token = hash.access_token;

		if (_token) {
			dispatch({ type: 'SET_TOKEN', token: _token });
			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				dispatch({ type: 'SET_USER', user: user });
			});
			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists,
				});
			});
		}
	}, [token, dispatch]);

	return (
		<div className="app">
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
