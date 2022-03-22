import { useParams } from "react-router"
import getExibitionByIndex from "../API/getExibitionByIndex"
import "../Components/Exibitions.css"

function Exibition() {
  const { index } = useParams()
  const exibition = getExibitionByIndex(index)
  const exibitionImages = exibition.images.map((exibition, index) => {
        return (
          <div className="col-md-4 py-3" key={index}>
            <a data-fancybox href={exibition}>
              <img src={exibition} className="img-fluid exibition-images" alt="" />
            </a>
          </div>
        )
      })


  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-md-3">
          {exibitionImages}
     
         
    </div>
    </div>
  )
}

export default Exibition
