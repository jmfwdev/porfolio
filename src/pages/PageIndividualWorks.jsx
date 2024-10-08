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

        </main>
    );
}

export default WorksPage;
