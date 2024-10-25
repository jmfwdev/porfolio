import React, { useEffect, useState } from 'react';

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
            <img className="footer-logo" src='/assets/icons/logo.svg' alt="" />

            <h2>Contact Me/&gt;</h2>

            <ul className='contact-list'>

            {portfolioData.contacts.map ((contact) => (
                <li key={contact.content}>
                    {contact.content}
                </li>
            ))}

            </ul>
            <div className="socials-container">

                <a href="https://github.com/jmfwdev">
                    <img src='/assets/icons/github.svg' alt="" />
                </a>

                <a href="https://www.linkedin.com/in/jan-marc-hore-724335332">
                    <img src='/assets/icons/linkedin.svg' alt="" />
                </a>

            </div>

        </footer>
            <p className="copyright">JM Hore FWD &copy; 2024</p>
        </>

    )
}

export default Footer;