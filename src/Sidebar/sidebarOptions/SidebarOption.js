import React from 'react';
import { useDataLayerValue } from '../../context/DataLayer';
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
	return (
		<div className="sidebarOption" onClick={() => clickHandler(id)}>
			{Icon && <Icon className="sidebarOption__icon" />}
			{Icon ? <h4>{title}</h4> : <p>{title}</p>}
		</div>
	);
};

export default SidebarOption;
