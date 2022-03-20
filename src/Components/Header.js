import { Link } from "react-router-dom"
import "../Components/Header.css"

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light font-family d-flex flex-wrap header-container mt-0">
        <div className="container  mt-3 py-4 d-flex justify-content-center">
          <div className="row">
            <div className="col-md-12 text-center">
            <Link className="navbar-brand logo" to="/">
            VALTERS POĻAKOVS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
            </div>
          </div>
         
          
          
          </div>
          <div className="container d-flex justify-content-center pb-4">
            <div className="row">
              <div className="col-md-12">
              <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link header-nav-link" to="/">
                  SĀKUMS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-nav-link" to="/exibitions">
                  IZSTĀDES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-nav-link" to="/photo">
                  FOTO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-nav-link" to="/books">
                  GRĀMATAS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-nav-link" to="/offers">
                  PIEDĀVĀJUMI
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-nav-link" to="/photoSessions">
                  FOTO SESIJAS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-nav-link" to="/aboutMe">
                  PAR MANI
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-nav-link" to="/contacts">
                  KONTAKTI
                </Link>
              </li>
            </ul>
          </div>
              </div>
            </div>
        
        
          </div>
          
      </nav>
    </div>
  )
}

export default Header
