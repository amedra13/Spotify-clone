import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Card from '../components/Card';
import './Home.css';

const Home = ({ spotify }) => {
	const [tracks, setTracks] = useState(null);

	useEffect(() => {
		spotify.getMyRecentlyPlayedTracks().then((response) => {
			console.log(response);
			setTracks(response.items);
		});
	}, [spotify]);

	return (
		<div className="home">
			<Header />
			<h1>recently Played</h1>
			<div className="home__cardContainer">
				{tracks?.map((item) => {
					return <Card key={item.track.id} track={item.track} />;
				})}
			</div>
		</div>
	);
};

export default Home;
