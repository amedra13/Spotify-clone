import React, { useState, useEffect } from 'react';
import tempAlbum from '../../images/discover-weekly.png';
import { useDataLayerValue } from '../../context/DataLayer';

const FooterLeft = ({ spotify }) => {
	const [{ footerPlaying }] = useDataLayerValue();
	const [info, setInfo] = useState(null);

	useEffect(() => {
		if (footerPlaying) {
			spotify.getMyCurrentPlayingTrack().then((response) => setInfo(response));
		}
	});

	return (
		<div className="footer__left">
			<img
				className="footer__albumLogo"
				src={info?.item.album.images[0].url || tempAlbum}
				alt=""
			/>
			<div className="footer__songInfo">
				<h4>{info?.item.name}</h4>
				<p>{info?.item.artists.map((artist) => artist.name).join(', ')}</p>
			</div>
		</div>
	);
};

export default FooterLeft;
