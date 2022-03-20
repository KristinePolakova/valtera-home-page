import "../Components/AboutMe.css"
import AboutMeContact from "../Components/AboutMeContact"
import AboutMeCv from "../Components/AboutMeCv"
import AboutMeInfo from "../Components/AboutMeInfo"

function AboutMe() {
  return (
    <div className="container aboutMe-container">
      <div className="row">
        <div className="col-md-12 p-3 font-family">
          <h1>Par mani</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <nav>
            <div
              className="nav nav-tabs font-family"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link about-me-tab active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Info
              </button>
              <button
                className="nav-link about-me-tab"
                id="nav-address-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-address"
                type="button"
                role="tab"
                aria-controls="nav-address"
                aria-selected="false"
              >
                CV
              </button>
              <button
                className="nav-link about-me-tab"
                id="nav-summary-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-summary"
                type="button"
                role="tab"
                aria-controls="nav-summary"
                aria-selected="false"
              >
                Kontakti
              </button>
            </div>
          </nav>
          <div className="tab-content pb-4 px-2" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <AboutMeInfo />
            </div>
            <div
              className="tab-pane fade"
              id="nav-address"
              role="tabpanel"
              aria-labelledby="nav-address-tab"
            >
              <AboutMeCv />
            </div>
            <div
              className="tab-pane fade"
              id="nav-summary"
              role="tabpanel"
              aria-labelledby="nav-summary-tab"
            >
              <AboutMeContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
