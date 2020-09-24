import React from 'react';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import './Card.css';

const Card = ({ track }) => {
	return (
		<div className="card">
			<img className="card__img" src={track.album.images[0].url} alt="album" />
			<h3>{track.name}</h3>
			<p>{track.album.name}</p>
			<div className="card__playIcon">
				<PlayCircleFilledOutlinedIcon style={{ fontSize: 50 }} />
			</div>
		</div>
	);
};

export default Card;
