import VSCODEimage from "../../public/assets/icons/vscode.svg";
import html5 from "../../public/assets/icons/html5.svg";
import css3 from "../../public/assets/icons/css3.svg";
import sass from "../../public/assets/icons/sass.svg";
import javascript from "../../public/assets/icons/javascript.svg";
import react from "../../public/assets/icons/react.svg";
import php from "../../public/assets/icons/php.svg";
import wordpress from "../../public/assets/icons/wordpress.svg";
import shopify from "../../public/assets/icons/shopify.svg";
import photoshop from "../../public/assets/icons/photoshop.svg";
import illustrator from "../../public/assets/icons/illustrator.svg";
import xd from "../../public/assets/icons/xd.svg";
import figma from "../../public/assets/icons/figma.svg";

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