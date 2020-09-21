import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
import './player.css';
import Footer from './Footer';

const Player = ({ spotify }) => {
	return (
		<div className="player">
			<div className="player__body">
				<Sidebar />
				<Body />
			</div>
			<Footer />
		</div>
	);
};

export default Player;
