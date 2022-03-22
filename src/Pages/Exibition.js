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
      {/* <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image}>
           <img src={exibition.image} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image1}>
           <img src={exibition.image1} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image2}>
           <img src={exibition.image2} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image3}>
           <img src={exibition.image3} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image4}>
           <img src={exibition.image4} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image5}>
           <img src={exibition.image5} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image6}>
           <img src={exibition.image6} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image7}>
           <img src={exibition.image7} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image8}>
           <img src={exibition.image8} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image9}>
           <img src={exibition.image9} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image10}>
           <img src={exibition.image10} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image11}>
           <img src={exibition.image11} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image12}>
           <img src={exibition.image12} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image13}>
           <img src={exibition.image13} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image14}>
           <img src={exibition.image14} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image15}>
           <img src={exibition.image15} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image16}>
           <img src={exibition.image16} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image17}>
           <img src={exibition.image17} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image18}>
           <img src={exibition.image18} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image19}>
           <img src={exibition.image19} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image20}>
           <img src={exibition.image20} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image21}>
           <img src={exibition.image21} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image22}>
           <img src={exibition.image22} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image23}>
           <img src={exibition.image23} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image24}>
           <img src={exibition.image24} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image25}>
           <img src={exibition.image25} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image26}>
           <img src={exibition.image26} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image27}>
           <img src={exibition.image27} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image28}>
           <img src={exibition.image28} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div>
      <div className="col-md-4 py-3" key={index}>
         <a data-fancybox href={exibition.image29}>
           <img src={exibition.image29} className="img-fluid" alt="" style={{width: "100%", height: "40vh", objectFit: "cover"}} />
         </a>
      </div> */}
    </div>
    </div>
  )
}

export default Exibition
