import React, { useState, useEffect } from 'react';
import { useDataLayerValue } from '../context/DataLayer';
import './Songbar.css';

const Songbar = ({ spotify }) => {
	const [startSeconds, setStartSeconds] = useState(0);
	const [endSeconds, setEndSeconds] = useState(0);
	const [songBar, setSongBar] = useState(0);
	// eslint-disable-next-line
	const [{ footerPlaying }, dispatch] = useDataLayerValue();

	useEffect(() => {
		if (footerPlaying) {
			spotify.getMyCurrentPlayingTrack().then((response) => {
				console.log(response);
				let ms = response.item.duration_ms;
				let msToSeconds = (ms / 1000).toFixed(0);
				setSongBar(msToSeconds);
				setEndSeconds(msToSeconds);
			});
			setStartSeconds(0);
			const interval = setInterval(() => {
				setStartSeconds((seconds) => seconds + 1);
				setEndSeconds((seconds) => seconds - 1);
			}, 1000);
			console.log(interval);
			return () => clearInterval(interval);
		}
	}, [footerPlaying, spotify]);

	const formatSeconds = (sec) => {
		let minutes = Math.floor(sec / 60);
		let seconds = sec % 60;
		return minutes.toString() + ':' + seconds.toString().padStart(2, '0');
	};

	return (
		<div className="songbar">
			{formatSeconds(startSeconds)}
			<div className="songbar__bar">
				<span
					style={{
						width: `${Math.floor((startSeconds / songBar) * 100)}%`,
					}}
					className="songbar__barStatus"
				></span>
			</div>
			{formatSeconds(endSeconds)}
		</div>
	);
};

export default Songbar;
