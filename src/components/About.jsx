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

        <img    src="/assets/images/portfolio-image.jpeg" 
                alt="JM's picture"
                className="img"
        />

        <p>{portfolioData.about.description}</p>

        <div className="skills">

            <h2>Developing Tools</h2>

                <div className="skill-container developer-container">

                    <img src="/assets/icons/vscode.svg" alt="" />
                    <img src="/assets/icons/html5.svg" alt="" />
                    <img src="/assets/icons/css3.svg" alt="" />
                    <img src="/assets/icons/sass.svg" alt="" />
                    <img src="/assets/icons/javascript.svg" alt="" />
                    <img src="assets/icons/react.svg" alt="" />
                    <img src="/assets/icons/php.svg" alt="" />
                    <img src="/assets/icons/wordpress.svg" alt="" />
                    <img src="/assets/icons/shopify.svg" alt="" />

                </div>

            <h2>Designing Tools</h2>

                <div className="skill-container designer-container">

                    <img src="/assets/icons/photoshop.svg" alt="" />
                    <img src="/assets/icons/illustrator.svg" alt="" />
                    <img src= "/assets/icons/xd.svg" alt="" />
                    <img src="/assets/icons/figma.svg" alt="" />

                </div>

        </div>
    </section>

    </>

)
}


export default About;