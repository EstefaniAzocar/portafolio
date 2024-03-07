
import React from "react";
// eslint-disable-next-line no-unused-vars
import { proyectosData } from "./proyectosData";

import './proyectosCart.css';

const Proyectos = (props) =>{
    const{img, name, descripcion, gitHub, demo}=props
  return (
    <div className="seccion">
        <div className="containerCard">
            <img className="imagen" src={img} alt={'img'+name}/>
            <h1 className="name">{name}</h1>
            <p>{descripcion}</p>
            <div class="button-wrapper"> 
                <button class="btn outline">{gitHub}GitHub</button>
                <button class="btn fill">{demo}Demo</button>
            </div>
        </div>
    </div>
  );
}

export default Proyectos;