import Intro from "../components/Intro";
import Works from "../components/Works";
import About from "../components/About";
import Nav from "../components/Nav";

import React, { useState } from "react";


function PageHome () {

    
    
return (

    <main>
      <Nav />
      <Intro />
      <Works />
      <About />
    </main>
  )
  
}

export default PageHome;