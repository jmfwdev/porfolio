import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';


function Works() {

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
        <div className="works-container" id="works">
            <div className='works-header'>
              <h2>WORKS/&gt;</h2>
            </div>
            {portfolioData.works.map ((work) => (
              <article 
              className={`${work.name} works-link`}
              key={work.name}
              style={{position: "relative"}}
              >

              {work.available ? (
                <div>
              <Link 
                  to={`/works/${work.id}`}
              >
                    <div className='work-image-container'>

                      <img
                          src={`/assets/images/${work.id}.png`}
                          alt={work.name}
                          className={`work-image ${work.id}`}
                      />
                      <div className='work-image-overlay'></div>

                    </div>


                  <h3>{work.name}</h3>
                  

                  </Link>
                    </div>
                  ) : (
                    <div>
                      <Link 
                  to={`/works/${work.id}`}
              >

                    <div className='work-image-container'>

                      <img 
                          src="/assets/icons/logo.svg?url" 
                          alt="placeholder-background"
                          className='placeholder-background' 
                      />
                      <div className='work-image-overlay'></div>
                    </div>



                  <h3>{work.name}</h3>
                  

                  </Link>
                    </div>
                )}
                </article>
            ))}
        </div>
        
        </>

    )
}

export default Works;
