import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Home from '../Home/Home';
import './player.css';
import Footer from '../Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Player = ({ spotify }) => {
	return (
		<BrowserRouter>
			<div className="player">
				<div className="player__body">
					<Sidebar spotify={spotify} />
					<Switch>
						<Route exact path="/">
							<Home spotify={spotify} />
						</Route>
						<Route exact path="/player">
							<Body />
						</Route>
					</Switch>
				</div>
				<Footer spotify={spotify}/>
			</div>
		</BrowserRouter>
	);
};

export default Player;
