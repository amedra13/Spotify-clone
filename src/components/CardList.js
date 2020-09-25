import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardList = ({ spotify, category }) => {
	const [categoryPlayList, setCategoryPlayList] = useState(null);

	useEffect(() => {
		spotify.getCategoryPlaylists(category).then(
			(response) => {
				setCategoryPlayList(response.playlists.items);
			},
			(err) => {
				return;
			}
		);
	}, [category, spotify]);

	return (
		<>
			{categoryPlayList?.map((category) => (
				<Card key={category.id} playlist={category} />
			))}
		</>
	);
};

export default CardList;
