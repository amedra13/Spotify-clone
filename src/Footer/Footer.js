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
				switch (activeSong.type) {
					case 'album':
						await spotify.play({ context_uri: activeSong.uri });
						dispatch({
							type: 'SET_SONG_PLAYING',
						});
						break;
					case 'playlist':
						await spotify.play({ context_uri: activeSong.uri });
						dispatch({
							type: 'SET_SONG_PLAYING',
						});
						break;
					case 'track':
						await spotify.play({ uris: [activeSong.uri] });
						dispatch({
							type: 'SET_SONG_PLAYING',
						});
						break;
					case 'artist':
						let artistTracks = await spotify
							.getArtistTopTracks(activeSong.id, 'US')
							.then((response) => response.tracks.map((item) => item.uri));
						await spotify.play({ uris: artistTracks });
						dispatch({
							type: 'SET_SONG_PLAYING',
						});
						break;
					default:
						return;
				}
			}
		};

		playSong();
	}, [activeSong, spotify, dispatch]);

	return (
		<div className="footer">
			<FooterLeft spotify={spotify} />
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
