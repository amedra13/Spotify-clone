import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import './header.css';
import { useDataLayerValue } from '../context/DataLayer';

const Header = () => {
	// eslint-disable-next-line
	const [{ user }, dispatch] = useDataLayerValue();
	const [searchInput, setSearchInput] = useState(null);

	useEffect(() => {
		if (searchInput) {
			const search = setTimeout(() => {
				dispatch({ type: 'SET_SEARCH_FIELD', searchInput: searchInput });
			}, 1500);

			return () => clearTimeout(search);
		}
	}, [searchInput, dispatch]);

	return (
		<div className="header">
			<div className="header__left">
				<SearchIcon />
				<input
					placeholder="Search for Artists, Songs, or Albums"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					type="text"
				/>
			</div>
			<div className="header__right">
				<Avatar src={user?.images[0]?.url} alt={user?.display_name} />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
};

export default Header;
