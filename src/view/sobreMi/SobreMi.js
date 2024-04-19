import React from "react";
import './sobreMi.css';
import css from "../../img/css.png"
import sass from "../../img/sass.png"
import html from "../../img/html.png";
import gitHub from "../../img/github.png";
import git from "../../img/git.png";
import js from "../../img/js.png";
import react from "../../img/react.png";
import nodeJS from "../../img/nodeJS.png";
import java from "../../img/java.png";
import visualStudeCode from "../../img/visualStudeCode.png";


const SobreMi = () =>{
    return (
      <>
          {/* <Header/> */}
          <div id="sobreMi" className="sectionSobreMi">
            
            <div className="description">
            <h1 className="titleSobreMi">Sobre mi</h1>
              
              <p>¡Hola! Soy Estefani Azocar, Desarrolladora con una travesía que me llevó desde Venezuela hasta Colombia, 
              enfrentando desafíos con resiliencia. Ingeniera en Informática, me destaco en el desarrollo Frontend con habilidades
              en JavaScript, React JS, y tecnologías del lado del cliente. He completado con éxito un curso de Frontend Developer, 
              abordando tecnologías esenciales como HTML, CSS, Sass, JavaScript, React, Node.js, Express y Firebase. Recientemente,
              amplié mis habilidades hacia el Backend, centrándome en Java, ofreciendo una perspectiva integral del desarrollo de software.
              </p>

            </div>
            <div className="tecnologias">
              <h1 className="titleSobreMi">Tecnologías</h1>
              <div className="slider">
                <div className="slide-track">
                  <div className="slide">
                  <div><img src={html} alt="Html" /></div>
                  <div><img src={css} alt="Css" /></div>
                  <div><img src={sass} alt="Sass" /></div>
                  <div><img src={js} alt="JavaScript" /></div>
                  <div><img src={react} alt="React" /></div>
                  <div><img src={nodeJS} alt="Node" /></div>
                  <div><img src={java} alt="Java" /></div>
                  <div><img src={git} alt="Git" /></div>
                  <div><img src={gitHub} alt="Github" /></div>
                  <div><img src={visualStudeCode} alt="Visual code" /></div>

                  <div><img src={html} alt="Html" /></div>
                  <div><img src={css} alt="css" /></div>
                  <div><img src={sass} alt="Sass" /></div>
                  <div><img src={js} alt="JavaScript" /></div>
                  <div><img src={react} alt="React" /></div>
                  <div><img src={nodeJS} alt="Node" /></div>
                  <div><img src={java} alt="Java" /></div>
                  <div><img src={git} alt="Git" /></div>
                  <div><img src={gitHub} alt="Github" /></div>
                  <div><img src={visualStudeCode} alt="Visual code" /></div>
                </div>
            
        </div>
    </div>
            </div>
          </div>
        
      </>
    );
  }
  
  export default SobreMi;