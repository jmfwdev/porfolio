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
            <h2>WORKS/&gt;</h2>
            {portfolioData.works.map ((work) => (
              <article 
              className={`${work.name} works-link`}
              key={work.name}
              style={{position: "relative"}}>

              {work.available ? (
                <div>
              <Link 
                  to={`/works/${work.id}`}
              >
                    <ScrollAnimation animateIn='fadeIn'>
                      <img
                          src={`/assets/images/${work.id}.png`}
                          alt={work.name}
                          className={`work-image ${work.id}`}
                      />
                    </ScrollAnimation>

                <ScrollAnimation animateIn='fadeInLeft'>

                  <h3>{work.name}</h3>
                  <p>{work.overview}</p>
                  
                </ScrollAnimation>

                  </Link>
              
                    <Link to={`/works/${work.id}`}>
                      <ScrollAnimation animateIn='fadeIn'>

                          <p className='button read-more'>Read More</p>

                      </ScrollAnimation>
                    </Link>
                    </div>
                  ) : (
                    <div>
                      <Link 
                  to={`/works/${work.id}`}
              >
                    <ScrollAnimation animateIn='fadeIn'>
                      <img 
                          src="/assets/icons/logo.svg" 
                          alt="placeholder-background"
                          className='placeholder-background' 
                      />
                    </ScrollAnimation>

                <ScrollAnimation animateIn='fadeInLeft'>

                  <h3>{work.name}</h3>
                  <p>{work.overview}</p>
                  
                </ScrollAnimation>

                  </Link>
              
                    <Link to={`/works/${work.id}`}>
                      <ScrollAnimation animateIn='fadeIn'>

                      <p className='button'>Coming Soon!</p>

                      </ScrollAnimation>
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
