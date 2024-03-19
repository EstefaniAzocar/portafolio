import React from 'react';
import './contactame.css'; // Importa los estilos CSS

const Contactame = () => {
  return (
    <>
      <div id="sectionContactame" className="sectionContactame">
        <h1 className="title">Contactame</h1>
        <div className="textoContactame">
          <section className="contacto" id="contacto">
            <h3 className="subTitle" >Actualmente estoy buscando nuevas oportunidades</h3>
            <p className="text" >¡Envíame un mensaje y comencemos a crear juntos!</p>
            <a
              href="mailto:estefanyazocar3@gmail.com"
              className="btn"
            >
              Contáctame
            </a>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contactame;
