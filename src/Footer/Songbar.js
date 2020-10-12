import React, { useState, useEffect } from 'react';
import './Songbar.css';

const Songbar = ({ playing, spotify }) => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		if (playing) {
			spotify
				.getMyCurrentPlayingTrack()
				.then((response) => console.log(response));
			setSeconds(0);
		}
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [playing, spotify]);

	const formatSeconds = (sec) => {
		let minutes = Math.floor(sec / 60);
		let seconds = sec % 60;
		return (
			minutes.toString().padStart(2, '0') +
			':' +
			seconds.toString().padStart(2, '0')
		);
	};

	return (
		<div className="songbar">
			{formatSeconds(seconds)}
			<div className="songbar__bar">
				<span style={{ width: '70%' }} className="songbar__barStatus"></span>
			</div>
			2:50
		</div>
	);
};

export default Songbar;
