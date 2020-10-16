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
	}, [activeSong, spotify, dispatch]);

	return (
		<div className="footer">
			<FooterLeft song={activeSong} />
			<FooterCenter
				song={activeSong}
				playing={footerPlaying}
				spotify={spotify}
			/>
			<FooterRight spotify={spotify} />
		</div>
	);
};

export default Footer;
