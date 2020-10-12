import React, { useEffect, useState } from 'react';
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
import Songbar from './Songbar';
import { useDataLayerValue } from '../context/DataLayer';
import './footer.css';

const Footer = ({ spotify }) => {
	// eslint-disable-next-line
	const [{ activeSong, footerPlaying }, dispatch] = useDataLayerValue();
	const [image, setImage] = useState(null);
	const [volume, setVolume] = useState(50);
	const [shuffle, setShuffle] = useState(false);
	const [repeat, setRepeat] = useState(false);

	useEffect(() => {
		if (activeSong) {
			if (activeSong.type === 'playlist' || activeSong.type === 'album') {
				spotify.play({ context_uri: activeSong.uri });
			} else {
				spotify.play({ uris: [activeSong.uri] });
			}

			dispatch({
				type: 'SET_SONG_PLAYING',
			});
		}
	}, [activeSong, spotify, dispatch]);

	useEffect(() => {
		!activeSong
			? setImage(tempAlbum)
			: activeSong.type === 'playlist' || activeSong.type === 'album'
			? setImage(activeSong.images[0].url)
			: activeSong.album
			? setImage(activeSong.album.images[0].url)
			: setImage(null);
	}, [activeSong]);

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

	const handleVolume = (e, newValue) => {
		e.preventDefault();
		spotify.setVolume(newValue);
		setVolume(newValue);
	};

	const onRepeat = () => {
		if (repeat) {
			setRepeat(false);
			spotify.setRepeat('off');
		} else {
			if (activeSong.type === 'playlist') {
				spotify.setRepeat('context');
			} else {
				spotify.setRepeat('track');
			}
			setRepeat(true);
		}
	};
	const onShuffle = () => {
		spotify.setShuffle(!shuffle);
		setShuffle(!shuffle);
	};
	return (
		<div className="footer">
			<div className="footer__left">
				<img className="footer__albumLogo" src={image} alt="" />
				<div className="footer__songInfo">
					<h4>{activeSong?.name}</h4>
					{/* <p>
						{activeSong && activeSong?.type !== 'playlist'
							? 'artist'
							: activeSong.artists.map((artist) => artist.name).join(', ')}
					</p> */}
				</div>
			</div>
			<div className="footer__center">
				<ShuffleIcon
					className={shuffle ? 'footer__green' : null}
					onClick={onShuffle}
				/>
				<SkipPreviousIcon
					className="footer__icon"
					onClick={() => spotify.skipToPrevious()}
				/>
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
				<SkipNextIcon
					className="footer__icon"
					onClick={() => spotify.skipToNext()}
				/>
				<RepeatIcon
					className={repeat ? 'footer__green' : null}
					onClick={onRepeat}
				/>
				<Songbar playing={footerPlaying} spotify={spotify} />
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
						<Slider
							value={volume}
							onChange={handleVolume}
							aria-labelledby="continuous-slider"
						/>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
