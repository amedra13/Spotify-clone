import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import './header.css';
import { useDataLayerValue } from '../context/DataLayer';

const Header = () => {
	const [{ user }, dispatch] = useDataLayerValue();
	const [searchInput, setSearchInput] = useState('');
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		if (searchInput) {
			const search = setTimeout(() => {
				dispatch({ type: 'SET_SEARCH_FIELD', searchInput: searchInput });
				location.pathname !== 'search' && history.push('/search');
			}, 300);

			return () => clearTimeout(search);
		}
	}, [searchInput, dispatch, history, location]);

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
