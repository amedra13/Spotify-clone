import React from 'react';
import { Link } from 'react-router-dom';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import './Card.css';
import { useDataLayerValue } from '../context/DataLayer';

const Card = ({ playlist, spotify }) => {
	// eslint-disable-next-line
	const [{ album }, dispatch] = useDataLayerValue();

	const clickHandler = () => {
		if (!playlist.id) return;
		spotify.getPlaylist(playlist.id).then((response) => {
			dispatch({ type: 'SET_ALBUM', selectedAlbum: response });
		});
	};

	return (
		<Link
			style={{ textDecoration: 'none' }}
			onClick={clickHandler}
			to="/player"
		>
			<div className="card">
				<img className="card__img" src={playlist.images[0].url} alt="album" />
				<h3>{playlist.name}</h3>
				<p>{playlist.description}</p>
				<div className="card__playIcon">
					<PlayCircleFilledOutlinedIcon style={{ fontSize: 50 }} />
				</div>
			</div>
		</Link>
	);
};

export default Card;
