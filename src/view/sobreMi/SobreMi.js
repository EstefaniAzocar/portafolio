import React from "react";
import './sobreMi.css';

const SobreMi = () =>{
    return (
      <>
          {/* <Header/> */}
          <div id="sobreMi" className="sectionSobreMi">
            
            <div className="description">
            <h1 className="titleSobreMi">Sobre mi</h1>
              <p>Hola! Mi nombre es Estefani Azocar, Desarrolladora Frontend.</p>

              <p>Comence mis estudios en el año 2013 estudiando ingeneria en informatica.
                Atravesé Venezuela hasta Colombia a pie buscando un mejor futuro para mis hijos. No rendirme y ser perseverante me caracteriza. 
              </p>

              <p>
                Busco siempre estar aprendiendo. Volvi a retomar mi formación de manera autónoma con diferentes cursos. En la busqueda consegui postular a cursos intensivos, como programate de 6 meses para Full Stack.
              </p>
              
              <p>Hoy me especializo en Front-End developer por el curso intensivo de Laboratoria, enfocado al desarrollo de habilidades técnicas y socioemocionales,
                 en la simulación de un ambiente laboral basado en el desarrollo de proyectos y trabajo colaborativo.
              </p>
            </div>
            <div className="tecnologias">
              <h1 className="titleSobreMi">Tecnologías</h1>
              {/* <img src="img\Estefani.png" alt="logo"/> */}
            </div>
          </div>
        
      </>
    );
  }
  
  export default SobreMi;