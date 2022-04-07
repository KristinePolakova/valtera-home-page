import { useParams } from "react-router"
import getAlbumByIndex from "../API/getAlbumByIndex"


function PhotoAlbum() {
  const {index} = useParams()
  const album = getAlbumByIndex(index)
  const albumImages = album.albumImages.map((album, index) => {
    return (
      <div
      className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 p-1"
      key={index}
    >
      <a data-fancybox href={album}>
        <img src={album} className="img-fluid exibition-images" alt="" />
      </a>
    </div>
  
    )
  })


  return (
    <div className="container exibition-container">
      <div className="row justify-content-center">{albumImages}</div>
    </div>
  )
}

export default PhotoAlbum