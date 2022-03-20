import "../Components/Contacts.css"

function Contacts() {
  return (
    <div className="container contacts-container">
      <div className="row font-family pb-4">
        <div className="col-md-12 p-3">
          <h2>Kontakti</h2>
        </div>
        <div className="col-sm-12 col-md-6 map-responsive">
          <iframe
            title="address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.46711347028!2d24.072661351462024!3d56.940797907114536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eed0228fde9aaf%3A0x4cb0a4284facef3a!2zTm9tZXTFhnUgaWVsYSAyOSwgWmVtZ2FsZXMgcHJpZWvFoXBpbHPEk3RhLCBSxKtnYSwgTFYtMTAwMg!5e0!3m2!1slv!2slv!4v1637695031819!5m2!1slv!2slv"
            width="600"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-sm-12 col-md-6 p-5">
          <ul className="list-unstyled">
            <li>
              <strong>Adrese:</strong>
            </li>
            <li>
              <small>Nometņu iela 29, Āgenskalns, Rīga.</small>
            </li>
            <li>
              <strong>E-pasts:</strong>
            </li>
            <li>
              <small>
                <a
                  className="email-link-decoration"
                  href="foto-valters@inbox.lv"
                >
                  foto-valters@inbox.lv
                </a>
              </small>
            </li>
            <li>
              <strong>Telefons:</strong>
            </li>
            <li>
              <small>+371 26671517</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contacts
