import React, { useState, useEffect } from 'react';
import SongRow from '../Body/SongRow/SongRow';

const ArtistTracks = ({ id, spotify }) => {
	const [tracks, setTracks] = useState(null);

	useEffect(() => {
		spotify.getArtistTopTracks(id, 'US').then((response) => {
			console.log(response);
			setTracks(response.tracks);
		});
	}, [id, spotify]);

	return (
		<>
			{tracks?.map((item) => (
				<SongRow key={item.id} track={item} />
			))}
		</>
	);
};

export default ArtistTracks;
