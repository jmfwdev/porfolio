import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

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
        <div className='about-header'>
            <h2>ABOUT ME/&gt;</h2>
        </div>

        <div className="about-desc-container">
            
            <img    src="/assets/images/portfolio-image.jpeg" 
                    alt="JM's picture"
                    className="portfolio-img"
            />

            <p className='about-description'>{portfolioData.about.description}</p>

            <div className="skills">

                <div className="skill-container developer-container">

                    <h3>Developing Tools</h3>

                        <div className="indiv-container">

                            <div className='indiv-skill-container'>
                                <img src="/assets/icons/vscode.svg" alt="vscode icon" />
                                <p>VS Code</p>
                            </div>

                            <div className='indiv-skill-container'>
                                <img src="/assets/icons/html5.svg" alt="html icon" />
                                <p>HTML</p>
                            </div>

                            <div className="indiv-skill-container">
                                <img src="/assets/icons/css3.svg" alt="css icon" />
                                <p>CSS</p>
                            </div>

                            <div className="indiv-skill-container">
                                <img src="/assets/icons/sass.svg" alt="sass icon" />
                                <p>SASS</p>
                            </div>

                            <div className="indiv-skill-container">
                                <img src="/assets/icons/javascript.svg" alt="javascript icon" />
                                <p>Javascript</p>
                            </div>

                            <div className="indiv-skill-container">
                                <img src="assets/icons/react.svg" alt="react icon" />
                                <p>React JS</p>
                            </div>

                            <div className="indiv-skill-container">
                                <img src="/assets/icons/php.svg" alt="php icon" />
                                <p>PhP</p>
                            </div>

                            <div className="indiv-skill-container">
                                <img src="/assets/icons/wordpress.svg" alt="Wordpress icon" />
                                <p>Wordpress</p>
                            </div>

                            <div className="indiv-skill-container">
                                <img src="/assets/icons/shopify.svg" alt="shopify icon" />
                                <p>Shopify</p>
                            </div>

                        </div>
                        
                    </div>

                <div className="skill-container designer-container">

                    <h3>Designing Tools</h3>
                        <div className='indiv-container'>

                            <div className="indiv-skill-container">
                                <img src="/assets/icons/photoshop.svg" alt="adobe-photoshop-icon" />
                                <p>Adobe Photoshop</p>
                            </div>
                            <div className="indiv-skill-container">
                                <img src="/assets/icons/illustrator.svg" alt="adobe-illustrator-icon" />
                                <p>Adobe Illustrator</p>
                            </div>
                            <div className="indiv-skill-container">
                                <img src= "/assets/icons/xd.svg" alt="adobe xd icon" />
                                <p>Adobe XD</p>
                            </div>
                            <div className="indiv-skill-container">
                                <img src="/assets/icons/figma.svg" alt="figma icon" />
                                <p>Figma</p>
                            </div>

                        </div>

                </div>
            </div>
        </div>

    </section>

    </>

)
}


export default About;