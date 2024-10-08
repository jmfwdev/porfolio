import { useState } from 'react';

// components
import Intro from './components/Intro';
import Nav from './components/Nav';
import Works from './components/Works';
import About from './components/About';
import Footer from './components/Footer';

// styles & scripts
import "./styles/styles.css";
import ParticlesComponent from "./components/Particles";

function App() {

  return (
    <>

      {/* < ParticlesComponent id="particles" /> */}
      < Nav />
      < Intro />
      < Works />
      < About />
      < Footer />
      
    </>
  )
}

export default App;
