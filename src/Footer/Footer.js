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
import tempAlbum from '../images/discover-weekly.png';
import { useDataLayerValue } from '../context/DataLayer';
import './footer.css';

const Footer = ({ spotify }) => {
	// eslint-disable-next-line
	const [{ activeSong, footerPlaying }, dispatch] = useDataLayerValue();

	useEffect(() => {
		if (activeSong) {
			if (activeSong.type === 'playlist') {
				spotify.play({ context_uri: activeSong.uri });
			} else {
				spotify.play({ uris: [activeSong.uri] });
			}
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
			if (activeSong.type === 'playlist') {
				spotify.play({ context_uri: activeSong.uri });
			} else {
				spotify.play({ uris: [activeSong.uri] });
			}
		}
	};
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className="footer__albumLogo"
					src={
						activeSong.length === 0
							? tempAlbum
							: activeSong.type === 'playlist'
							? activeSong.images[0].url
							: activeSong.album.images[0].url
					}
					alt=""
				/>
				<div className="footer__songInfo">
					<h4>{activeSong.length === 0 ? 'Title' : activeSong.name}</h4>
					{/* <p>
						{activeSong.length === 0 && activeSong.type !== 'playlist'
							? 'artist'
							: activeSong.artists.map((artist) => artist.name).join(', ')}
					</p> */}
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
