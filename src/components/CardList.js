import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardList = ({ type, spotify, category, searchOption }) => {
	const [playlist, setPlayList] = useState(null);

	useEffect(() => {
		switch (type) {
			case 'Categories':
				spotify.getCategoryPlaylists(category).then((response) => {
					setPlayList(response.playlists.items);
				});
				break;
			case 'New Releases':
				spotify.getNewReleases().then((response) => {
					setPlayList(response.albums.items);
				});
				break;
			case 'Featured Playlist':
				spotify.getFeaturedPlaylists().then((response) => {
					setPlayList(response.playlists.items);
				});
				break;
			case 'Search':
				setPlayList(searchOption);
				break;
			default:
				return;
		}
	}, [type, category, spotify, searchOption]);

	return (
		<>
			{playlist?.map((list) => (
				<Card key={list.id} spotify={spotify} playlist={list} />
			))}
		</>
	);
};

export default CardList;
