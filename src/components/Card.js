import React from 'react';
import weekly from '../images/discover-weekly.png';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import './Card.css';

const Card = () => {
	return (
		<div className="card">
			<img className="card__img" src={weekly} alt="album" />
			<h3>Lizarasdgsgaegsergd</h3>
			<p>
				alwj gb aw lgjal wrhgla wrhgpWGRH;A GHRL ARGHALG; GUHL WGHAL IHKFGA EFBG
				ALWF BVLAW alwjgbaw lgjalwrhglawrhgpWGRH;A GHRLARGHALG; GUHL WGHAL
				IHKFGA EFBG ALWF BVLAW
			</p>
			<div className="card__playIcon">
				<PlayCircleFilledOutlinedIcon style={{ fontSize: 50 }} />
			</div>
		</div>
	);
};

export default Card;
