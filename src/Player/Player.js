import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import './player.css';
import Footer from '../Footer/Footer';

const Player = ({ spotify }) => {
	return (
		<div className="player">
			<div className="player__body">
				<Sidebar />
				<Body spotify={spotify} />
			</div>
			<Footer />
		</div>
	);
};

export default Player;
