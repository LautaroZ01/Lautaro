import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './assets/Style/normalize.css'
import './assets/Style/dark.css'
import './assets/Style/style.css'
import './assets/Style/responsive.css'



import { Nav } from './Components/Nav'
import { Home } from "./Components/Home";
import { AboutMe } from "./Components/AboutMe";
import { Portfolio } from "./Components/Portfolio";
import { Skills } from "./Components/Skills";
import { Services } from "./Components/Services";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {

  return (
    <>
      <Nav/>

      <Home/>

      <AboutMe/>

      <Portfolio/>

      <Skills/>

      <Services/>

      <Contact/>

      <Footer/>

    </>
  )
}

export default App
