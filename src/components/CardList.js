import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardList = ({ type, spotify, category, searchOption }) => {
	const [playlist, setPlayList] = useState(null);

	useEffect(() => {
		const setSearch = () => {
			return searchOption ? setPlayList(searchOption) : null;
		};
		switch (type) {
			case 'Categories':
				spotify
					.getCategoryPlaylists(category)
					.then((response) => {
						setPlayList(response.playlists.items);
					})
					.catch((err) => {
						console.log(err);
					});
				break;
			case 'New Releases':
				spotify.getNewReleases().then(
					(response) => {
						console.log('New Releases', response);
						setPlayList(response.albums.items);
					},
					(err) => {
						return;
					}
				);
				break;
			case 'Featured Playlist':
				spotify.getFeaturedPlaylists().then(
					(response) => {
						setPlayList(response.playlists.items);
					},
					(err) => {
						return;
					}
				);
				break;
			default:
				setSearch();
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
