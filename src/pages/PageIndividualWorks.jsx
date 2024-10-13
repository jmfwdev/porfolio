import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function WorksPage() {
    const { id } = useParams(); // Get the id from the URL
    const [portfolioData, setPortfolioData] = useState(null);
    const [work, setWork] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/portfolioData.json');
            const data = await response.json();
            setPortfolioData(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (portfolioData) {
            const foundWork = portfolioData.works.find(work => work.id === id);
            setWork(foundWork);
        }
    }, [portfolioData, id]);

    if (!work) {
        return <div>Loading...</div>;
    }

    return (
        <main className='indiv-works'>

        <Link to="/">
            <p className='home-nav'>Home</p>
        </Link>
        <div className="work-details">
            <h1>{work.name}</h1>
        </div>

        <div className="tabs-container">
            <ul className='tab-nav'>
                <li className="tabs">Overview</li>
                <li className="tabs">Techs</li>
                <li className="tabs"><a href={work.url}>Visit the site!</a></li>
                <li className="tabs">Github</li>
            </ul>

            <section className="overview hide">
                <p>{work.overview}</p>
            </section>

            <section className="technology hide">

                {work.coding.map ((tech) => (
                    <p key={tech.name}>{tech.name}</p>
                ))}

            </section>
        </div>

        </main>
    );
}

export default WorksPage;
