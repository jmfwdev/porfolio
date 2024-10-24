import VSCODEimage from "/assets/icons/vscode.svg";
import html5 from "/assets/icons/html5.svg";
import css3 from "/assets/icons/css3.svg";
import sass from "/assets/icons/sass.svg";
import javascript from "/assets/icons/javascript.svg";
import react from "assets/icons/react.svg";
import php from "/assets/icons/php.svg";
import wordpress from "/assets/icons/wordpress.svg";
import shopify from "/assets/icons/shopify.svg";
import photoshop from "/assets/icons/photoshop.svg";
import illustrator from "/assets/icons/illustrator.svg";
import xd from "/assets/icons/xd.svg";
import figma from "/assets/icons/figma.svg";

import React, { useEffect, useState } from 'react';




function About () {
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
    
    <section className="about-container" id="about">
        <h2>About me</h2>

        <img    src="../../src/assets/images/portfolio-image.jpeg" 
                alt="JM's picture"
                className="img"
        />

        <p>{portfolioData.about.description}</p>

        <div className="skills">

            <h2>Developing Tools</h2>

                <div className="skill-container developer-container">

                    <img src={VSCODEimage} alt="" />
                    <img src={html5} alt="" />
                    <img src={css3} alt="" />
                    <img src={sass} alt="" />
                    <img src={javascript} alt="" />
                    <img src={react} alt="" />
                    <img src={php} alt="" />
                    <img src={wordpress} alt="" />
                    <img src={shopify} alt="" />

                </div>

            <h2>Designing Tools</h2>

                <div className="skill-container designer-container">

                    <img src={photoshop} alt="" />
                    <img src={illustrator} alt="" />
                    <img src={xd} alt="" />
                    <img src={figma} alt="" />

                </div>

        </div>
    </section>

    </>

)
}


export default About;