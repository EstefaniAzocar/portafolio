import React from "react";
import './proyectosCart.css';

const Proyectos = (props) => {
  const { img, name, descripcion, github, demo } = props;

  return (
    <div className="seccion">
      <div className="containerCard">
        <div className="containerImg"><img className="imagen" src={img} alt={'img' + name} /></div>
        <h1 className="name">{name}</h1>
        <p>{descripcion}</p>
        {(github || demo) && (
          <div className="button-wrapper">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <button className="btn outline">GitHub</button>
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <button className="btn fill">Demo</button>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Proyectos;


