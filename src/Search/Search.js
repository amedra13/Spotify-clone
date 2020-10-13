import React, { useEffect } from 'react';
import { useDataLayerValue } from '../context/DataLayer';
import Header from '../Header/Header';
import './Search.css';

const Search = ({ spotify }) => {
	// eslint-disable-next-line
	const [{ searchField }, dispatch] = useDataLayerValue();

	useEffect(() => {
		if (searchField) {
			spotify
				.search(searchField, ['album', 'artist', 'track'])
				.then((response) => {
					console.log(response);
				});
		}
	}, [searchField, spotify]);

	return (
		<div className="search">
			<Header />
		</div>
	);
};

export default Search;
