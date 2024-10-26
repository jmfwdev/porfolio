import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from "../../public/assets/icons/logo.svg";

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
            <img
                className='indiv-works-logo'
                src={Logo} 
                alt="Logo" 
            />
        </Link>
        {work.available ? (
        <div>

        <img
            src={`/assets/images/${work.id}.png`}
            alt={work.name}
            className={`indiv-work-image ${work.id}`}
        />

        <div className="work-details">
            <h1>{work.name}</h1>
        </div>

        <div className="tabs-container">
            <div className='tab-nav'>
                <section>
                    <h2 className="tabs">Overview</h2>
                    <p>{work.overview}</p>
                </section>

                <section>
                    <h2 className="tabs">Features</h2>
                        {work.features.map ((feat) => (
                            <div>
                                <p className='feat-name'>{feat.name}</p>
                                <p className='feat-about'>{feat.about}</p>
                                <p className='feat-reflect'>{feat.reflection}</p>
                            </div>
                        ))}
                </section>

                <section>
                    <h2 className="tabs">Techs</h2>
                        {work.coding && (
                            <div>
                                <h3 className='coding-tech-title'>Coding</h3>
                                <ul>
                                    {work.coding.map ((codeTech) => (
                                        <li 
                                            key={codeTech.name}
                                            className='techs'
                                        >{codeTech.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                            {work.designing && (
                            <div>
                                <h3 className='design-tech-title'>Designing</h3>
                                <ul>
                                        {work.designing.map ((designTech) => (
                                            <li
                                                key={designTech.name}
                                                className='techs'
                                            >{designTech.name}</li>
                                        ))}
                                </ul>
                            </div>
                            )}
                </section>

                <section className='links'>
                    {work.url && (
                        <h2 className="tabs">
                            <a href={work.url}>Visit the site!</a>
                        </h2>
                    )}
                    <h2 className="tabs">
                        <a href={work.github}>Github</a>
                    </h2>
                </section>
            </div>
        </div>
        </div>
        ) : (
            <div className='coming-soon-container'>

            <img
                src="/assets/icons/logo.svg"
                alt={work.name}
                className={`indiv-work-image`}
            />

                <div    
                    className="work-details"       
                >
                    <h1>{work.name}</h1>
                </div>
                
                <p
                    className='comingSoon'
                    style={{color: "white", textAlign: "center"}}

                >COMING SOON!</p>
            </div>
        )};

        </main>
    );
}

export default WorksPage;
