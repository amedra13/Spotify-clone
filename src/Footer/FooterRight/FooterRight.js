import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';

const FooterRight = ({ spotify }) => {
	const [volume, setVolume] = useState(50);

	const handleVolume = (e, newValue) => {
		e.preventDefault();
		spotify.setVolume(newValue);
		setVolume(newValue);
	};

	return (
		<div className="footer__right">
			<Grid container spacing={2}>
				<Grid item>
					<VolumeDownIcon />
				</Grid>
				<Grid item xs>
					<Slider
						value={volume}
						onChange={handleVolume}
						aria-labelledby="continuous-slider"
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default FooterRight;
