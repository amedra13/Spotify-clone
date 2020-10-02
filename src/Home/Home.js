import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import CardList from '../components/CardList';
import './Home.css';

const Home = ({ spotify }) => {
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		spotify.getCategories().then((response) => {
			setCategories(response.categories.items);
		});
	}, [spotify]);

	return (
		<div className="home">
			<Header />
			<h1>Featured Playlists</h1>
			<div className="home__cardContainer">
				<CardList type="Featured Playlist" spotify={spotify} />
			</div>
			<h1>New Album Releases</h1>
			<div className="home__cardContainer">
				<CardList type="New Releases" spotify={spotify} />
			</div>
			{categories?.map((category) => (
				<div key={category.id} className="home__categories">
					<h1>{category.name}</h1>
					<div className="home__cardContainer">
						<CardList
							type="Categories"
							spotify={spotify}
							category={category.id}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
