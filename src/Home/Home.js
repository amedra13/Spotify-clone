import React from 'react';
import Header from '../Header/Header';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
	return (
		<div className="home">
			<Header />
			<h1>ShortCuts</h1>
			<div className="home__cardContainer">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;
