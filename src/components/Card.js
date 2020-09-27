import React from 'react';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import './Card.css';

const Card = ({ playlist , spotify}) => {

	const clickHandler = () => {
		spotify.getPlaylist(playlist.id).then(response => {
			console.log(response)
		})
	}
	
	return (
		<div className="card" onClick={clickHandler}>
			<img className="card__img" src={playlist.images[0].url} alt="album" />
			<h3>{playlist.name}</h3>
			<p>{playlist.description || playlist.artists[0].name}</p>
			<div className="card__playIcon">
				<PlayCircleFilledOutlinedIcon style={{ fontSize: 50 }} />
			</div>
		</div>
	);
};

export default Card;
