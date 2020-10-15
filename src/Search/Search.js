import React, { useState, useEffect } from 'react';
import { useDataLayerValue } from '../context/DataLayer';
import Header from '../Header/Header';
import CardList from '../components/CardList';
import './Search.css';

const Search = ({ spotify }) => {
	// eslint-disable-next-line
	const [{ searchField }, dispatch] = useDataLayerValue();
	const [searchResults, setSearchResults] = useState(null);

	useEffect(() => {
		if (searchField) {
			spotify
				.search(searchField, ['album', 'artist', 'track'])
				.then((response) => {
					console.log(response);
					setSearchResults(response);
				});
		}
	}, [searchField, spotify]);

	return (
		<div className="search">
			<Header />
			<h1>Albums</h1>
			<div className="search__albums">
				<CardList
					type="Search"
					spotify={spotify}
					searchOption={searchResults?.albums.items}
				/>
			</div>
			<h1>Tracks</h1>
			<div className="search__albums">
				<CardList
					type="Search"
					spotify={spotify}
					searchOption={searchResults?.tracks.items}
				/>
			</div>
			<h1>Artists</h1>
			<div className="search__albums">
				<CardList
					type="Search"
					spotify={spotify}
					searchOption={searchResults?.artists.items}
				/>
			</div>
		</div>
	);
};

export default Search;
