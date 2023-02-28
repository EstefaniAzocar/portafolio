import React from "react";
import Header from "../header/header";
import logo from "../../img/logo.png"
import './home.css';

const Home = () =>{
  return (
    <>
        <Header/>
        <div id="sectionHome" className="sectionHome">
            <div className="box">
            <img className="logoImg" src={logo} alt='logo' />
            </div>
            <div className="textZone" >
                <h1>Hola, <br/> Soy Estefani, <br/> web developer
                </h1>
                <p className="textoGray">Front End Developer</p>
                <br/>
                
                <a href="https://drive.google.com/file/d/1EIt6iA6qMH7SpofEojUTJxkMQajG8AzI/view?usp=share_link" className="cv">
                    <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="textCv"> Descargar cv</span>
                    </div>
                </a>
            </div>
        </div>
      
    </>
  );
}

export default Home;