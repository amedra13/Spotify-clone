import React from 'react';
import { Link } from 'react-router-dom';
import { useDataLayerValue } from '../context/DataLayer';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import ImagePlaceHolder from '../images/discover-weekly.png';
import { getImage } from '../Util/utility';
import './Card.css';

const Card = ({ playlist, spotify }) => {
	const [{ footerPlaying }, dispatch] = useDataLayerValue();

	const clickHandler = () => {
		if (!playlist.id) return;
		switch (playlist.type) {
			case 'album':
				spotify.getAlbum(playlist.id).then((response) => {
					dispatch({ type: 'SET_ALBUM', selectedAlbum: response });
				});
				break;
			case 'playlist':
				spotify.getPlaylist(playlist.id).then((response) => {
					dispatch({ type: 'SET_ALBUM', selectedAlbum: response });
				});
				break;
			case 'track':
				dispatch({ type: 'SET_ALBUM', selectedAlbum: playlist });
				return;
			case 'artist':
				dispatch({ type: 'SET_ALBUM', selectedAlbum: playlist });
				break;
			default:
				return;
		}
	};

	const onPlayButton = () => {
		if (!playlist.id) return;
		dispatch({ type: 'SET_SONG_PAUSED' });
		switch (playlist.type) {
			case 'album':
				spotify.getAlbum(playlist.id).then((response) => {
					dispatch({
						type: 'SET_ACTIVE_SONG',
						activeSong: response,
					});
				});
				break;

			case 'playlist':
				spotify.getPlaylist(playlist.id).then((response) => {
					dispatch({
						type: 'SET_ACTIVE_SONG',
						activeSong: response,
					});
				});
				break;
			case 'track':
				if (footerPlaying) {
					dispatch({
						type: 'SET_SONG_PAUSED',
					});
				}
				dispatch({
					type: 'SET_ACTIVE_SONG',
					activeSong: playlist,
				});
				break;
			case 'artist':
				dispatch({
					type: 'SET_ACTIVE_SONG',
					activeSong: playlist,
				});
				break;
			default:
				return;
		}
	};

	return (
		<Link
			style={{ textDecoration: 'none' }}
			onClick={clickHandler}
			to="/player"
		>
			<div className="card">
				<img
					className="card__img"
					src={getImage(playlist, ImagePlaceHolder)}
					alt="album"
				/>
				<h3>{playlist.name}</h3>
				<p>
					{playlist.type !== 'artist'
						? playlist.description || playlist.artists[0].name
						: null}
				</p>
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
