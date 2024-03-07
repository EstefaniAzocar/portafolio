import React from "react";
import Proyectos from "../../components/proyectos/proyectosCart";
import { proyectosData } from "../../components/proyectos/proyectosData";

import './portafolio.css';

const Portafolio = () =>{
  return (
    <>
        <div id="portafolio" className="sectionPortafolio">
        <h1 className="title">Proyectos</h1>
        <div className="textoPortafolio">
          {proyectosData.map(
          (proyectos)=> (
            <Proyectos
              key={proyectos.id}
              img={proyectos.img}
              name={proyectos.name}
              descripcion={proyectos.descripcion}
              github={proyectos.github}
              // demo={proyectos.demo}
            />
          )
          )}
        </div>
        </div>
    </>
  );
}

export default Portafolio;