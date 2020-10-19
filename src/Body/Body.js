import React, { useState, useEffect } from 'react';
import { useDataLayerValue } from '../context/DataLayer';
import tempAlbum from '../images/discover-weekly.png';
import Header from '../Header/Header';
import Grid from '@material-ui/core/Grid';
import TimerIcon from '@material-ui/icons/Timer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SongRow from './SongRow/SongRow';
import { setImage } from '../Util/utility';
import './body.css';

const Body = ({ spotify }) => {
	const [{ album }, dispatch] = useDataLayerValue();
	const [tracks, setTracks] = useState(null);

	useEffect(() => {
		if (album?.type === 'artist') {
			spotify.getArtistTopTracks(album.id, 'US').then((response) => {
				setTracks(response.tracks);
			});
		}
	}, [album, spotify]);

	const clickedAlbum = () => {
		console.log(album);
		dispatch({ type: 'SET_SONG_PAUSED' });
		dispatch({
			type: 'SET_ACTIVE_SONG',
			activeSong: album,
		});
	};

	return (
		<div className="body">
			<Header />
			<div className="body__info">
				<img src={setImage(album, tempAlbum)} alt="" />
				<div className="body__infoText">
					<strong>PlayList</strong>
					<h2>{album?.name}</h2>
					<p>{album?.description}</p>
				</div>
			</div>
			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon
						className="body__shuffle"
						onClick={clickedAlbum}
					/>
					<FavoriteIcon fontSize="large" />
				</div>
				<div className="body__dividers">
					<Grid container>
						<Grid item xs={1}>
							#
						</Grid>
						<Grid item xs={4}>
							TITLE
						</Grid>
						<Grid item xs={3}>
							ALBUM
						</Grid>
						<Grid item xs={3}>
							Date Added
						</Grid>
						<Grid item xs={1}>
							<TimerIcon />
						</Grid>
					</Grid>
				</div>
				{album?.type === 'album' ? (
					album?.tracks.items.map((item) => (
						<SongRow
							key={item.id}
							track={item}
							cover={album.images[0].url}
							album
							releaseDate={album.release_date}
							spotify={spotify}
						/>
					))
				) : album?.type === 'playlist' ? (
					album?.tracks.items.map((item) => (
						<SongRow
							key={item.track.id}
							track={item.track}
							added={item.added_at}
							spotify={spotify}
						/>
					))
				) : album?.type === 'track' ? (
					<SongRow track={album} />
				) : album?.type === 'artist' ? (
					// <ArtistTracks id={album.id} spotify={spotify} />
					tracks?.map((item) => <SongRow key={item.id} track={item} />)
				) : null}
			</div>
		</div>
	);
};

export default Body;
