import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import CardList from '../components/CardList';
import Card from '../components/Card';
import './Home.css';

const Home = ({ spotify }) => {
	const [categories, setCategories] = useState(null);
	const [featuredPlaylists, setFeaturedPlaylists] = useState(null);
	const [newReleases, setNewReleases] = useState(null);

	useEffect(() => {
		spotify.getCategories().then((response) => {
			console.log(response);
			setCategories(response.categories.items);
		});
		spotify.getFeaturedPlaylists().then((response) => {
			setFeaturedPlaylists(response.playlists.items);
		});
		spotify.getNewReleases().then((response) => {
			setNewReleases(response.albums.items);
		});
	}, [spotify]);

	return (
		<div className="home">
			<Header />
			<h1>Featured Playlists</h1>
			<div className="home__cardContainer">
				{featuredPlaylists?.map((playlist) => {
					return <Card key={playlist.id} playlist={playlist} />;
				})}
			</div>
			<h1>New Album Releases</h1>
			<div className="home__cardContainer">
				{newReleases?.map((album) => {
					if (album.album_type === 'album') {
						return <Card key={album.id} playlist={album} />;
					} else {
						return null;
					}
				})}
			</div>
			{categories?.map((category) => (
				<div key={category.id}>
					<h1>{category.name}</h1>
					<div className="home__cardContainer">
						<CardList spotify={spotify} category={category.id} />
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
