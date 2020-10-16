import React from 'react';
import { setImage } from '../../Util/utility';
import tempAlbum from '../../images/discover-weekly.png';

const FooterLeft = ({ song }) => {
	return (
		<div className="footer__left">
			<img
				className="footer__albumLogo"
				src={setImage(song, tempAlbum)}
				alt=""
			/>
			<div className="footer__songInfo">
				<h4>{song?.name}</h4>
				{/* <p>
						{activeSong && activeSong?.type !== 'playlist'
							? 'artist'
							: activeSong.artists.map((artist) => artist.name).join(', ')}
					</p> */}
			</div>
		</div>
	);
};

export default FooterLeft;
