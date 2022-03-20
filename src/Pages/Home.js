import "../Components/Home.css"

function Home() {
  return (
    <div className="container home-container pb-5">
      <div className="row">
        <div className="col-md-12">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
           
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/girl-horse.jpg"
                  className="d-block w-100 carousel-container"
                  alt="white horse and albin girl"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/sea.jpg"
                  className="d-block w-100"
                  alt="girl in sea"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/gundega.jpg"
                  className="d-block w-100"
                  alt="girl in sand"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/sand.jpg"
                  className="d-block w-100"
                  alt="bird feather in sand"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/eve.jpg"
                  className="d-block w-100"
                  alt="red haired girl with apple"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Home
