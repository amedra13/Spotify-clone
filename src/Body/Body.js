import React from 'react';
import Header from '../Header/Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './body.css';
import { useDataLayerValue } from '../context/DataLayer';
import SongRow from './SongRow/SongRow';

const Body = ({ spotify }) => {
	// eslint-disable-next-line
	const [{ album }, dispatch] = useDataLayerValue();

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
					<PlayCircleFilledIcon className="body__shuffle" />
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				{album?.tracks.items.map((item) => (
					<SongRow key={item.track.id} track={item.track} />
				))}
			</div>
		</div>
	);
};

export default Body;
