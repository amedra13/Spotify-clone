import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import Body from '../Body/Body';
import Search from '../Search/Search';
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
						<Route exact path="/search">
							<Search spotify={spotify} />
						</Route>
					</Switch>
				</div>
				<Footer spotify={spotify} />
			</div>
		</BrowserRouter>
	);
};

export default Player;
