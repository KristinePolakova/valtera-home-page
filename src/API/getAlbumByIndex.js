import getAlbums from "./getAlbums"

function getAlbumByIndex(index) {
  const albums = getAlbums()
  return albums[index]
}

export default getAlbumByIndex
