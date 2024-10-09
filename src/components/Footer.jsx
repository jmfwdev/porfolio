import React, { useEffect, useState } from 'react';

import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';

function Footer () {

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
        <footer id="contact">
            <div className="footer-logo"></div>

            <h2>Contact Me</h2>

            <ul className='contact-list'>

            {portfolioData.contacts.map ((contact) => (
                <li>
                    {contact.content}
                </li>
            ))}

            </ul>
            <div className="socials-container">

                <a href="https://github.com/jmfwdev">
                    <img src={github} alt="" />
                </a>

                <a href="">
                    <img src={linkedin} alt="" />
                </a>

            </div>

        </footer>
            <p className="copyright">JM Hore FWD &copy; 2024</p>
        </>

    )
}

export default Footer;