import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
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
	const [{ activeSong, footerPlaying }, dispatch] = useDataLayerValue();

	useEffect(() => {
		if (activeSong) {
			spotify.play({ uris: [activeSong.uri] });
			dispatch({
				type: 'SET_SONG_PLAYING',
			});
		}
	}, [activeSong, spotify, dispatch]);

	const clickHandler = () => {
		console.log(activeSong);
		if (footerPlaying) {
			dispatch({
				type: 'SET_SONG_PAUSED',
			});
			spotify.pause();
		} else {
			dispatch({
				type: 'SET_SONG_PLAYING',
			});
			console.log(activeSong);
			console.log(activeSong.album.images[0].url);
			spotify.play({ uris: [activeSong.uri] });
		}
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
					<h4>{activeSong?.name}</h4>
					{/* <p>{!activeSong.length && activeSong.artist[0].name}</p> */}
				</div>
			</div>
			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer__icon" />
				{footerPlaying ? (
					<PauseCircleOutlineIcon
						fontSize="large"
						className="footer__icon"
						onClick={clickHandler}
					/>
				) : (
					<PlayCircleOutlineIcon
						fontSize="large"
						className="footer__icon"
						onClick={clickHandler}
					/>
				)}
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
