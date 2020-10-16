import React, { useState } from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import Songbar from './Songbar';
import { useDataLayerValue } from '../../context/DataLayer';

const FooterCenter = ({ song, playing, spotify }) => {
	// eslint-disable-next-line
	const [{ placeholder }, dispatch] = useDataLayerValue();
	const [shuffle, setShuffle] = useState(false);
	const [repeat, setRepeat] = useState(false);

	const clickHandler = () => {
		console.log(song);
		if (playing) {
			dispatch({
				type: 'SET_SONG_PAUSED',
			});
			spotify.pause();
		} else {
			if (song) {
				if (song.type === 'playlist' || song.type === 'album') {
					spotify.play({ context_uri: song.uri });
				} else {
					spotify.play({ uris: [song.uri] });
				}
				dispatch({
					type: 'SET_SONG_PLAYING',
				});
			}
			console.log(song);
		}
	};

	const onRepeat = () => {
		if (repeat) {
			setRepeat(false);
			spotify.setRepeat('off');
		} else {
			if (song.type === 'playlist') {
				spotify.setRepeat('context');
			} else {
				spotify.setRepeat('track');
			}
			setRepeat(true);
		}
	};
	const onShuffle = () => {
		spotify.setShuffle(!shuffle);
		setShuffle(!shuffle);
	};

	const skipToNext = async () => {
		dispatch({ type: 'SET_SONG_PAUSED' });
		await spotify.skipToNext();
		dispatch({ type: 'SET_SONG_PLAYING' });
	};
	const skipToPrevious = async () => {
		dispatch({ type: 'SET_SONG_PAUSED' });
		await spotify.skipToPrevious();
		dispatch({ type: 'SET_SONG_PLAYING' });
	};

	return (
		<>
			<ShuffleIcon
				className={`footer__icon ${shuffle ? 'footer__green' : null}`}
				onClick={onShuffle}
			/>
			<SkipPreviousIcon
				className="footer__icon"
				onClick={() => skipToPrevious()}
			/>
			{playing ? (
				<PauseCircleOutlineIcon
					fontSize="large"
					className="footer__icon"
					onClick={clickHandler}
				/>
			) : (
				<PlayCircleOutlineIcon
					fontSize="large"
					className="footer__icon"
					onClick={clickHandler}
				/>
			)}
			<SkipNextIcon className="footer__icon" onClick={() => skipToNext()} />
			<RepeatIcon
				className={`footer__icon ${repeat ? 'footer__green' : null}`}
				onClick={onRepeat}
			/>
			<Songbar spotify={spotify} />
		</>
	);
};

export default FooterCenter;
