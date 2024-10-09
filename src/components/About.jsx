import VSCODEimage from "../assets/icons/vscode.svg";
import html5 from "../assets/icons/html5.svg";
import css3 from "../assets/icons/css3.svg";
import sass from "../assets/icons/sass.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import php from "../assets/icons/php.svg";
import wordpress from "../assets/icons/wordpress.svg";
import shopify from "../assets/icons/shopify.svg";
import photoshop from "../assets/icons/photoshop.svg";
import illustrator from "../assets/icons/illustrator.svg";
import xd from "../assets/icons/xd.svg";
import figma from "../assets/icons/figma.svg";



function About () {

return (
    
    <>
    
    <section className="about-container" id="about">
        <h2>About me</h2>

        <div className="img"></div>

        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga nostrum quod sed consequatur commodi culpa mollitia, expedita corporis illo.</p>

        <div className="skills">

            <h2>Developer</h2>

                <div className="skill-container developer-container">

                    <img src={VSCODEimage} alt="" />
                    <img src={html5} alt="" />
                    <img src={css3} alt="" />
                    <img src={sass} alt="" />
                    <img src={javascript} alt="" />
                    <img src={react} alt="" />
                    <img src={php} alt="" />
                    <img src={wordpress} alt="" />
                    <img src={shopify} alt="" />

                </div>

            <h2>Designer</h2>

                <div className="skill-container designer-container">

                    <img src={photoshop} alt="" />
                    <img src={illustrator} alt="" />
                    <img src={xd} alt="" />
                    <img src={figma} alt="" />

                </div>

        </div>
    </section>

    </>

)
}


export default About;