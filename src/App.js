import { useEffect } from "react"
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Services from "./components/services/Services";

import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import './app.scss';
import { useState } from "react";
//aos
import AOS from "aos"
import "aos/dist/aos.css"


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
    //aos
    useEffect(() => {
      AOS.init()
      AOS.refresh()
    }, [])
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Services />
        <About />
        {/* <Portfolio />
        <Works />
        <Testimonials />
        <Contact /> */}
      </div>
    </div>
  );
}

export default App;
