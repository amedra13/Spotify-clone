import React, { useEffect, useState } from 'react';
import tempAlbum from '../../images/discover-weekly.png';

const FooterLeft = ({ song }) => {
	const [image, setImage] = useState(null);

	useEffect(() => {
		!song
			? setImage(tempAlbum)
			: song.type === 'playlist' || song.type === 'album'
			? setImage(song.images[0].url)
			: song.album
			? setImage(song.album.images[0].url)
			: setImage(null);
	}, [song]);

	return (
		<>
			<img className="footer__albumLogo" src={image} alt="" />
			<div className="footer__songInfo">
				<h4>{song?.name}</h4>
				{/* <p>
						{activeSong && activeSong?.type !== 'playlist'
							? 'artist'
							: activeSong.artists.map((artist) => artist.name).join(', ')}
					</p> */}
			</div>
		</>
	);
};

export default FooterLeft;
