import getExibitions from "../API/getExibitions"
import { Link } from "react-router-dom"
import "../Components/Exibitions.css"

function Exibitions() {
  const exibitons = getExibitions()

  const exibitionsList = exibitons.map((exibiton, index) => {
    return (
      <div className="col-md-4 font-family p-0 " key={index}>
        <div className="card text-white border-0 p-1 ">
          <Link to={`/exibitions/${index}`}>
            <img
              className="card-img-top exibition-poster-images"
              src={exibiton.image}
              alt="article"
              // style={{ width: "35vh", height: "35vh", objectFit: "cover" }}
            />
          </Link>

          <Link className="linkDecoration" to={`/exibitions/${index}`}>
            <div className="card-body ">
              <h6 className="card-title text-center" style={{height: "1vh"}}>{exibiton.title}</h6>
            </div>
          </Link>
        </div>
      </div>
    )
  })
  return (
    <div className="container mt-5 my-0 pb-5">
      <div className="row row-cols-1 row-cols-md-3">{exibitionsList}</div>
    </div>
  )
}

export default Exibitions
