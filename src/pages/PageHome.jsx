import Intro from "../components/Intro";
import Works from "../components/Works";
import About from "../components/About";
import Nav from "../components/Nav";
import ScrollTop from "../components/ScrollToTopButton";

import React, { useState } from "react";


function PageHome () {

    
    
return (

    <main>
        <Nav />
        <Intro />
        <Works />
        <About />
        < ScrollTop />
    </main>
  )
  
}

export default PageHome;