import React, { useEffect, useState } from 'react';
import arrowDown from "../assets/icons/arrow-down.svg";

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
                <div className="socials"></div>
                <div className="socials"></div>
                <div className="socials"></div>
            </div>

        </footer>
            <p className="copyright">JM Hore FWD &copy; 2024</p>
        </>

    )
}

export default Footer;