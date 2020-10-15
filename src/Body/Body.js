import React from 'react';
import Header from '../Header/Header';
import Grid from '@material-ui/core/Grid';
import TimerIcon from '@material-ui/icons/Timer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './body.css';
import { useDataLayerValue } from '../context/DataLayer';
import SongRow from './SongRow/SongRow';

const Body = ({ spotify }) => {
	// eslint-disable-next-line
	const [{ album }, dispatch] = useDataLayerValue();

	const clickedAlbum = () => {
		console.log(album);
		dispatch({
			type: 'SET_ACTIVE_SONG',
			activeSong: album,
		});
	};

	return (
		<div className="body">
			<Header />
			<div className="body__info">
				<img
					src={
						album?.images[0].url ||
						'https://newjams-images.scdn.co/v2/discover-weekly/j2OIQgTGzXWHMKruHd7dh8zHaKvElaof-HU6_J9ouKevuqLuNf2YRrAxMHAKd8FXkHvjHs6h2PERUXZs9jkg4dOyfXTepX2KG7i2PA8QHLsCsWn1tBz8izgMLLDwcjPQhBYMpTlcJrWMfSvu09CDsQ==/MDU6MDA6NTBUNjEtMzAtMA==/default'
					}
					alt={`${album?.description}`}
				/>
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
				{album?.type !== 'album'
					? album?.tracks.items.map((item) => (
							<SongRow
								key={item.track.id}
								track={item.track}
								added={item.added_at}
								spotify={spotify}
							/>
					  ))
					: album?.tracks.items.map((item) => (
							<SongRow
								key={item.id}
								track={item}
								cover={album.images[0].url}
								album
								releaseDate={album.release_date}
								spotify={spotify}
							/>
					  ))}
			</div>
		</div>
	);
};

export default Body;
