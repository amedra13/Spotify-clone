import React from 'react';
import Header from './Header';
import './body.css';

const Body = ({ spotify }) => {
	return (
		<div className="body">
			<h1>Body Component</h1>
			<Header spotify={spotify} />
		</div>
	);
};

export default Body;
