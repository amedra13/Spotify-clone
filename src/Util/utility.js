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
