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
                    <div className='image'></div>
                    <h3>{work.name}</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, hic quisquam. Animi perferendis, quidem quasi et odio reprehenderit quam. Rem.</p>
                </article>
            ))}
        </div>
        
        </>

    )
}

export default Works;
