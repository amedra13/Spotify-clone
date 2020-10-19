export const setImage = (item, temp) => {
	return !item
		? temp
		: item.type === 'playlist' ||
		  item.type === 'album' ||
		  item.type === 'artist'
		? item.images[0].url
		: item.album
		? item.album.images[0].url
		: null;
};

export const getImage = (playlist, temp) => {
	switch (playlist.type) {
		case 'album':
			return playlist.images[0].url || temp;
		case 'playlist':
			return playlist.images[0].url || temp;
		case 'track':
			return playlist.album.images[0].url;
		case 'artist':
			return playlist.images.length ? playlist.images[0].url : temp;
		default:
			return;
	}
};

export const msToMinutes = (ms) => {
	let seconds = Math.floor((ms / 1000) % 60);
	let minutes = Math.floor(ms / 1000 / 60).toFixed(0);
	return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const dateAdded = (date) => {
	let day = new Date(date);
	let today = new Date();

	let setDays = today.getTime() - day.getTime();
	let released = Math.floor(setDays / (24 * 60 * 60 * 1000));
	return released;
};
