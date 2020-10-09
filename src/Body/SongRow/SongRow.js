import React from 'react';
import Grid from '@material-ui/core/Grid';
import './songrow.css';
import { useDataLayerValue } from '../../context/DataLayer';

const SongRow = ({ track, cover, album, added, releaseDate, spotify }) => {
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

	const msToMinutes = (ms) => {
		let seconds = (ms / 1000) % 60;
		let minutes = ms / 1000 / 60;
		return `${Math.floor(minutes)}:${seconds.toFixed(0)}`;
	};

	const dateAdded = (date) => {
		let day = new Date(date);
		let today = new Date();

		let setDays = today.getTime() - day.getTime();
		let released = Math.floor(setDays / (24 * 60 * 60 * 1000));
		return released;
	};

	return (
		<div className="songRow" onClick={clickHandler}>
			<Grid container>
				<Grid item xs={1}>
					<img
						className="songRow__albums"
						src={cover || track.album.images[0].url}
						alt=""
					/>
				</Grid>
				<Grid item xs={4}>
					<div className="songRow__info">
						<h1>{track.name}</h1>
						<p>
							{track.artists.map((artist) => artist.name).join(', ')}
							{/* {!album && track.album.name} */}
						</p>
					</div>
				</Grid>
				<Grid item xs={3}>
					<div className="songRow__info">{!album && track.album.name}</div>
				</Grid>
				<Grid item xs={3}>
					{added && `${dateAdded(added)} days ago`}
					{releaseDate && releaseDate}
				</Grid>
				<Grid item xs={1}>
					{msToMinutes(track.duration_ms)}
				</Grid>
			</Grid>
		</div>
	);
};

export default SongRow;
