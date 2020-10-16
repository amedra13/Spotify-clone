import React, { useEffect } from 'react';
import FooterLeft from './FooterLeft/FooterLeft';
import FooterCenter from './FooterCenter/FooterCenter';
import FooterRight from './FooterRight/FooterRight';
import { useDataLayerValue } from '../context/DataLayer';
import './footer.css';

const Footer = ({ spotify }) => {
	const [{ activeSong, footerPlaying }, dispatch] = useDataLayerValue();

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
				<FooterRight spotify={spotify} />
			</div>
		</div>
	);
};

export default Footer;
