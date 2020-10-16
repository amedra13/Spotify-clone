import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';
import FooterLeft from './FooterLeft/FooterLeft';
import FooterCenter from './FooterCenter/FooterCenter';
import { useDataLayerValue } from '../context/DataLayer';
import './footer.css';

const Footer = ({ spotify }) => {
	// eslint-disable-next-line
	const [{ activeSong, footerPlaying }, dispatch] = useDataLayerValue();
	const [volume, setVolume] = useState(50);

	useEffect(() => {
		const playSong = async () => {
			if (activeSong) {
				if (activeSong.type === 'playlist' || activeSong.type === 'album') {
					await spotify.play({ context_uri: activeSong.uri });
				} else {
					await spotify.play({ uris: [activeSong.uri] });
				}
				dispatch({
					type: 'SET_SONG_PLAYING',
				});
			}
		};

		playSong();
		console.log(activeSong);
	}, [activeSong, spotify, dispatch]);

	const handleVolume = (e, newValue) => {
		e.preventDefault();
		spotify.setVolume(newValue);
		setVolume(newValue);
	};

	return (
		<div className="footer">
			<div className="footer__left">
				<FooterLeft song={activeSong} />
			</div>
			<div className="footer__center">
				<FooterCenter
					song={activeSong}
					playing={footerPlaying}
					spotify={spotify}
				/>
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
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
