import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from "../../public/assets/icons/logo.svg";
import VantaWorks from "../components/VantaEffectWorks";

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

        <VantaWorks />

        <Link to="/">
            <img
                className='indiv-works-logo'
                src={Logo} 
                alt="Logo" 
            />
        </Link>
        {work.available ? (
        <div>

        {/* <img
            src={`/assets/images/${work.id}.png`}
            alt={work.name}
            className={`indiv-work-image ${work.id}`}
        /> */}

        <div className="work-details">
            <h1>{work.name}</h1>
        </div>

        <div className="tabs-container">
            <div className='tab-nav'>
                <section>
                    <h2 className="tabs">Overview</h2>
                    <p>{work.overview}</p>
                </section>

                <div className='feat-tech'>

                <section>
                    <h2 className="tabs">Features</h2>
                        {work.features.map ((feat) => (
                            <div>
                                <h3 className='feat-name'>{feat.name}</h3>
                                <h4>About</h4>
                                <p className='feat-about'>{feat.about}</p>
                                <h4>Reflection</h4>
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

                </div>

                <div className='links-container'>
                    <div className='link'>
                    {work.url && (
                        <a aria-label={`Link to the website of ${work.name}`} href={work.url}>
                            <img src="/assets/icons/web.svg" alt="web icon" />
                        </a>
                    )}
                    {work.github && (
                        <a aria-label={`Link to the GitHub repository of ${work.name}`} href={work.github}>
                            <img src="/assets/icons/github.svg" alt="github icon" />
                        </a>
                    )}
                    </div>
                </div>
            </div>
        </div>
        </div>
        ) : (
            <div className='coming-soon-container'>

            <img
                aria-label='Logo'
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
