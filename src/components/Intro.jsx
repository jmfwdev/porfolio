import React, { useEffect, useState, useRef } from 'react';
import arrowDown from "/assets/icons/arrow-down.svg";
import VantaEffect from './VantaEffect';
import ScrollAnimation from 'react-animate-on-scroll';



    function Intro() {
        const [portfolioData, setPortfolioData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/portfolioData.json');
          const data = await response.json();
          setPortfolioData(data);
        };
    
        fetchData();
      }, []);
    
      if (!portfolioData) {
        return <div>Loading...</div>;
      }

    return (
        
        <>
          <div className='intro' id='home'>
            < VantaEffect />
            <h1
              data-text={portfolioData.about.name}
            >
              {portfolioData.about.name}
            </h1>
            <p className='about'>{portfolioData.about.title}</p>
            <img className="arrow-down" src={arrowDown} alt="arrow down" />
          </div>

        </>
    )
}

export default Intro;