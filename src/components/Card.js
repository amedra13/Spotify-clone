import React from 'react';
import { Link } from 'react-router-dom';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import './Card.css';
import { useDataLayerValue } from '../context/DataLayer';

const Card = ({ playlist, spotify }) => {
	// eslint-disable-next-line
	const [{ album, footerPlaying }, dispatch] = useDataLayerValue();

	const clickHandler = () => {
		console.log(playlist);
		if (!playlist.id) return;
		if (playlist.type === 'album') {
			spotify.getAlbum(playlist.id).then((response) => {
				console.log(response);
				dispatch({ type: 'SET_ALBUM', selectedAlbum: response });
			});
		} else if (playlist.type === 'track') {
			return;
		} else if (playlist.type === 'artist') {
			spotify.getArtistTopTracks(playlist.id, 'US').then((response) => {
				console.log(response);
			});
		} else {
			spotify.getPlaylist(playlist.id).then((response) => {
				console.log(response);
				dispatch({ type: 'SET_ALBUM', selectedAlbum: response });
			});
		}
	};

	const onPlayButton = () => {
		if (!playlist.id) return;
		dispatch({ type: 'SET_SONG_PAUSED' });
		if (playlist.type === 'album') {
			spotify.getAlbum(playlist.id).then((response) => {
				dispatch({
					type: 'SET_ACTIVE_SONG',
					activeSong: response,
				});
			});
		} else if (playlist.type === 'track') {
			if (footerPlaying) {
				dispatch({
					type: 'SET_SONG_PAUSED',
				});
			}
			dispatch({
				type: 'SET_ACTIVE_SONG',
				activeSong: playlist,
			});
		} else {
			spotify.getPlaylist(playlist.id).then((response) => {
				dispatch({
					type: 'SET_ACTIVE_SONG',
					activeSong: response,
				});
			});
		}
	};

	const imageSrc = playlist.images[0].url
		? playlist.images[0].url
		: playlist.album.images[0].url;

	return (
		<Link
			style={{ textDecoration: 'none' }}
			onClick={clickHandler}
			to="/player"
		>
			<div className="card">
				<img className="card__img" src={imageSrc} alt="album" />
				<h3>{playlist.name}</h3>
				<p>{playlist.description || playlist.artists[0].name}</p>
				<div className="card__playIcon">
					<PlayCircleFilledOutlinedIcon
						style={{ fontSize: 50 }}
						onClick={onPlayButton}
					/>
				</div>
			</div>
		</Link>
	);
};

export default Card;
