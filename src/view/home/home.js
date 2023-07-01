import React from "react";
import logo from "../../img/EstefaniAzocar.png"
import './home.css';

const Home = () =>{
  return (
    <>
        {/* <Header/> */}
        <div id="sectionHome" className="sectionHome">
            <div className="box">
            <img className="logoImg" src={logo} alt='logo' />
            </div>
            <div className="textZone" >
                <h1>Hola, <br/> Soy Estefani, <br/> web developer
                </h1>
                <p className="textoGray">Front End Developer</p>
                <br/>
                
                <a href="https://drive.google.com/file/d/1OO52x0AkG2f-Cf6BTQ6i1MN6_9MEBCvK/view?usp=sharing" target="blank" class="contact-button">
                    <div>
                        <span class="bg"></span>
                        <span class="base"></span>
                        <span class="text">Descargar CV</span>
                    </div>
                </a>
            </div>
        </div>
      
    </>
  );
}

export default Home;