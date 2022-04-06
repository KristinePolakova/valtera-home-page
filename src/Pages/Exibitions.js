import getExibitions from "../API/getExibitions"
import { Link } from "react-router-dom"
import "../Components/Exibitions.css"

function Exibitions() {
  const exibitons = getExibitions()
  const exibitionsList = exibitons.map((exibiton, index) => {
    return (
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 font-family px-5 " key={index}>
        <div className="card text-white border-0 p-1 d-flex" >
          <Link to={`/exibitions/${index}`}>
            <img
              className="card-img-top exibition-poster-images"
              src={exibiton.image}
              alt="article"
              style={{ width: "35vh", height: "35vh", objectFit: "cover" }}
            />
          </Link>

          <Link className="linkDecoration" to={`/exibitions/${index}`}>
            <div className="card-body ">
              <h6 className="card-title text-center">{exibiton.title}</h6>
            </div>
          </Link>
        </div>
      </div>
    )
  })
  return (
    <div className="container exibitions-container mt-5 my-0 pb-5">
      <div className="row justify-content-center">{exibitionsList}</div>
    </div>
  )
}

export default Exibitions
