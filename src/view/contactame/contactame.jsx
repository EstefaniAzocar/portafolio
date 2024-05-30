import React from 'react';
import './contactame.css'; // Importa los estilos CSS

const Contactame = () => {
  return (
    <div className='sectionContainer'>
      <div id="sectionContactame" className="sectionContactame">
        <div className='titleContainer'><h1 className="titleContactame">Contactame</h1></div>
        <section className="contactame">
        <h5 className="textContactame"> Actualmente estoy en busca de oportunidad laboral </h5>
          <p className='texto'>Te invito a enviar un mensaje para ponernos en contacto. </p>
          
          <div className='boton'><a href="mailto:estefanyazocar3@gmail.com" className="btnContactame">
            Contáctame
          </a></div>

        </section>
        
      </div>
      <footer>Develop by Estefani Azocar</footer>
    </div>
  );
}

export default Contactame;
