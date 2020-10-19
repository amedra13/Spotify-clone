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
