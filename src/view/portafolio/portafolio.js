import React from "react";
import Proyectos from "../../components/Proyectos/proyectosCart";
import { proyectosData } from "../../components/Proyectos/proyectosData";
import MyCarousel from "../../components/Slider/caurosel";

import './portafolio.css';

const Portafolio = () => {
  return (
    <>
      <div id="portafolio" className="sectionPortafolio">
        <h1 className="title">Proyectos</h1>

        <div className="textoPortafolio">
          <MyCarousel>
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
          </MyCarousel>
        </div>
      </div>
    </>
  );
};

export default Portafolio;
