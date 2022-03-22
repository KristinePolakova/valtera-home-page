import getExibitions from "../API/getExibitions"
import { Link } from "react-router-dom"
import "../Components/Exibitions.css"

function Exibitions() {
  const exibitons = getExibitions()

  const exibitionsList = exibitons.map((exibiton, index) => {
    return (
      <div className="col-md-4 font-family p-0" key={index}>
        <div className="card text-white border-0 p-3" >
          <Link to={`/exibitions/${index}`}>
            <img className="card-img-top" src={exibiton.image} alt="article" style={{width: "40vh", height: "40vh", objectFit: "cover"}} />
          </Link>
          <div className="card-body ">
            <h5 className="card-title text-center">
              <Link className="linkDecoration" to={`/exibitions/${index}`}>
                {exibiton.title}
              </Link>
            </h5>
          </div>
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
