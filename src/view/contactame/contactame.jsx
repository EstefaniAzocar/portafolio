import React from 'react';
import './contactame.css'; // Importa los estilos CSS

const Contactame = () => {
  return (
    <>
      <div id="sectionContactame" className="sectionContactame">
        <h1 className="titleContactame">Contactame</h1>
        <section className="contactame">
        <h5 className="textContactame"> Actualmente estoy en busca de oportunidad laboral </h5>
          <p>Te invito a enviar un mensaje para ponernos en contacto. </p>
          
          <a href="mailto:estefanyazocar3@gmail.com" className="btnContactame">
            Contáctame
          </a>

        </section>
        <footer>Develop by Estefani Azocar</footer>
      </div>
    </>
  );
}

export default Contactame;
