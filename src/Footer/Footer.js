import React from 'react';
import Grid from '@material-ui/core/Grid';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';
import { useDataLayerValue } from '../context/DataLayer';
import './footer.css';

const Footer = ({ spotify }) => {
	// eslint-disable-next-line
	const [{ activeSong, deviceID }, dispatch] = useDataLayerValue();

	const clickHandler = () => {
		console.log(activeSong, deviceID);
		spotify
			.play({ device_id: `${deviceID}`, context_uri: `${activeSong} ` })
			.then((response) => {
				console.log(response);
			});
	};
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className="footer__albumLogo"
					src="https://upload.wikimedia.org/wikipedia/en/7/74/Usher_-_Confessions_album_cover.jpg"
					alt=""
				/>
				<div className="footer__songInfo">
					<h4>Yeah!</h4>
					<p>Usher</p>
				</div>
			</div>
			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer__icon" />
				<PlayCircleOutlineIcon
					fontSize="large"
					className="footer__icon"
					onClick={clickHandler}
				/>
				<SkipNextIcon className="footer__icon" />
				<RepeatIcon className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
