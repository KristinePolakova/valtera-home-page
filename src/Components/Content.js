import { Route, Routes } from "react-router"
import Exibitions from "../Pages/Exibitions"
import Home from "../Pages/Home"
import Photo from "../Pages/Photo"
import Books from "../Pages/Books"
import Offers from "../Pages/Offers"
import PhotoSessions from "../Pages/PhotoSessions"
import AboutMe from "../Pages/AboutMe"
import Contacts from "../Pages/Contacts"

function Content() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/exibitions" element={<Exibitions /> } />
          <Route path="/photo" element={<Photo /> } />
          <Route path="/books" element={<Books /> } />
          <Route path="/offers" element={<Offers /> } />
          <Route path="/photoSessions" element={<PhotoSessions /> } />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    )
  }
  
  export default Content