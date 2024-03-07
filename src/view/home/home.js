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
           
            <a href="https://drive.google.com/file/d/1rQ_DSVHpUVXS3ukhXKfQ603UBfnSDBt2/view?usp=sharing" target="_blank"  className="contact-button">
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