import React from "react";
import Proyectos from "../../components/proyectos/proyectosCart";
import { proyectosData } from "../../components/proyectos/proyectosData";
import './portafolio.css';
import Carousel from "../../components/carousel/carousel"; // Cambiar la importación del componente Carousel

const Portafolio = () => {
  return (
    <>
      <div id="portafolio" className="sectionPortafolio">
        <div className="title">
        <h1 className="titleProyectos">Proyectos</h1>
        </div>
        <div className="textoPortafolio">
          <Carousel>
            {proyectosData.map((proyecto) => (
              <div key={proyecto.id}>
                <Proyectos
                  img={proyecto.img}
                  name={proyecto.name}
                  descripcion={proyecto.descripcion}
                  github={proyecto.github}
                  demo={proyecto.demo}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Portafolio;
