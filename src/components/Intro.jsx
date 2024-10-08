import React, { useEffect, useState } from 'react';

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
          <div className='intro' id='#'>
            <h1>{portfolioData.about.name}</h1>
            <p className='about'>{portfolioData.about.title}</p>
          </div>

        </>
    )
}

export default Intro;