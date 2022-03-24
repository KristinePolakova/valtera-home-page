import { useParams } from "react-router"
import getExibitionByIndex from "../API/getExibitionByIndex"
import "../Components/Exibitions.css"

function Exibition() {
  const { index } = useParams()
  const exibition = getExibitionByIndex(index)
  const exibitionImages = exibition.images.map((exibition, index) => {
        return (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 py-3" key={index}>
            <a data-fancybox href={exibition}>
              <img src={exibition} className="img-fluid exibition-images" alt=""/>
            </a>
          </div>
        )
      })


  return (
    <div className="container exibition-container">
      <div className="row justify-content-center">
          {exibitionImages}
     
         
    </div>
    </div>
  )
}

export default Exibition
