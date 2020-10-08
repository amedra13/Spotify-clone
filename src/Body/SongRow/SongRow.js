import React from 'react';
import './songrow.css';
import { useDataLayerValue } from '../../context/DataLayer';

const SongRow = ({ track, cover, album, spotify }) => {
	const [{ footerPlaying }, dispatch] = useDataLayerValue();

	const clickHandler = () => {
		if (footerPlaying) {
			dispatch({
				type: 'SET_SONG_PAUSED',
			});
		}
		console.log(track);
		dispatch({
			type: 'SET_ACTIVE_SONG',
			activeSong: track,
		});
	};

	return (
		<div className="songRow" onClick={clickHandler}>
			<img
				className="songRow__albums"
				src={cover || track.album.images[0].url}
				alt=""
			/>
			<div className="songRow__info">
				<h1>{track.name}</h1>
				<p>
					{track.artists.map((artist) => artist.name).join(', ')}
					{/* {!album && track.album.name} */}
				</p>
			</div>
		</div>
	);
};

export default SongRow;
