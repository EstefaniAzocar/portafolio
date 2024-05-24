import React from "react";
import estefani from "../../img/estefani.png"
import './home.css';

const Home = () =>{
  return (
    <>
        {/* <Header/> */}
        <div id="sectionHome" className="sectionHome">
            <div className="box">
            <img className="logoImg" src={estefani} alt="Estefani" />
            </div>
            <div className="textZone" >
                <h1>Hola, <br/><span> Soy Estefani, </span><br/> web developer
                </h1>
                <p className="textoGray">Front End Developer</p>
                <br/>
           
            <a href="https://drive.google.com/file/d/1rDlxluDxI2nNsH7LsZVvuvqOeN0-QQZr/view?usp=sharing" target="_blank" rel="noreferrer"  className="contact-button .slide_right">
                    {/* <div>
                        <span className="bg"></span>
                        <span className="base"></span>
                        <span className="text">Descargar CV</span>
                    </div> */} Descargar CV
                </a>
            </div>
        </div>
      
    </>
  );
}

export default Home;