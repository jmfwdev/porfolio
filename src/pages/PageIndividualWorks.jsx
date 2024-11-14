import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from "../../public/assets/icons/logo.svg";
import VantaWorks from "../components/VantaEffectWorks";

function WorksPage() {
    const { id } = useParams(); // Get the id from the URL
    const [portfolioData, setPortfolioData] = useState(null);
    const [work, setWork] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    function handleTabClick (index) {
        setActiveTab(index);
    };

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
        <div className='work-container'>

            <div className="work-details">
                <h1>{work.name}</h1>
            </div>

        <div className="tabs-container">
            <div className='tab-nav'>

                <div className='tab-buttons-container'>
                    <ul>
                        <li className={`tab-button ${activeTab === 0 ? 'active' : ''}`} 
                            onClick={() => handleTabClick(0)}>
                                Overview
                        </li>
                        <li className={`tab-button ${activeTab === 1 ? 'active' : ''}`} 
                            onClick={() => handleTabClick(1)}>
                                Features
                        </li>
                        <li className={`tab-button ${activeTab === 2 ? 'active' : ''}`} 
                            onClick={() => handleTabClick(2)}>
                                Techs
                        </li>
                    </ul>
                </div>

                <div className='tab-content'>
                    { activeTab === 0 && (
                        <div className='overview content-container'>
                            <h2 className="tabs">Overview</h2>
                            <section className='content'>
                                <p>{work.overview}</p>
                            </section>
                        </div>
                    )}

                    { activeTab === 1 && (
                        <div className='feat content-container'>
                            <h2 className="tabs">Features</h2>
                            <section className='content'>
                                    {work.features.map ((feat) => (
                                        <div className='indiv-content'>
                                            <h3 className='feat-name'>{feat.name}</h3>
                                            <h4>About</h4>
                                            <p className='feat-about'>{feat.about}</p>
                                            <h4>Reflection</h4>
                                            <p className='feat-reflect'>{feat.reflection}</p>
                                        </div>
                                    ))}
                            </section>
                        </div>
                    )}

                    { activeTab === 2 && (
                        <div className='tech content-container'>
                            <h2 className="tabs">Techs</h2>
                            <section className='content'>
                                    {work.coding && (
                                        <div className='indiv-content'>
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
                                        <div className='indiv-content'>
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
                    )}


                </div>


            </div>

            <div className="works-image">
                <img src={`/assets/images/${work.id}.png`} alt="" />
            </div>
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
        ) : (
            <div className='coming-soon-container'>

            <img
                aria-label='Logo'
                src="{logo}"
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
        )}

        </main>
    );
}

export default WorksPage;
