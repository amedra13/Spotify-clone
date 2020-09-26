import React from 'react';
import { useDataLayerValue } from '../../context/DataLayer';
import { Link } from 'react-router-dom';

import './sidebarOption.css';

const SidebarOption = ({ title, id, spotify, Icon }) => {
	// eslint-disable-next-line
	const [playlistId, dispatch] = useDataLayerValue();
	const clickHandler = (id) => {
		if (!id) return;
		spotify.getPlaylist(id).then((response) => {
			dispatch({
				type: 'SET_DISCOVER_WEEKLY',
				discover_weekly: response,
			});
		});
	};

	let link = title === 'Home' ? '/' : '/player';

	return (
		<Link
			style={{ textDecoration: 'none' }}
			to={link}
			onClick={() => clickHandler(id)}
		>
			<div className="sidebarOption">
				{Icon && <Icon className="sidebarOption__icon" />}
				{Icon ? <h4>{title}</h4> : <p>{title}</p>}
			</div>
		</Link>
	);
};

export default SidebarOption;
