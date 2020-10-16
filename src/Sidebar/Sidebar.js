import React from 'react';
import './sidebar.css';
import SidebarOption from './sidebarOptions/SidebarOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { useDataLayerValue } from '../context/DataLayer';

const Sidebar = ({ spotify }) => {
	const [{ playlists }] = useDataLayerValue();

	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt=""
			/>
			<SidebarOption Icon={HomeIcon} title="Home" />
			<SidebarOption Icon={SearchIcon} title="Search" />

			<br />
			<strong className="sidebar__title">PLAYLISTS</strong>
			<hr />

			{playlists?.items?.map((playlist) => {
				return (
					<div className="sidebar__option" key={playlist.id}>
						<SidebarOption
							title={playlist.name}
							id={playlist.id}
							spotify={spotify}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Sidebar;
