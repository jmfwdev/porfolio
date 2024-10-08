import React, { useEffect, useState } from 'react';

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
            <h2>WORKS</h2>
            {portfolioData.works.map ((work) => (
                <article className={work.name} key={work.name}>
                    <h3>{work.name}</h3>
                </article>
            ))}
        </div>
        
        </>

    )
}

export default Works;
