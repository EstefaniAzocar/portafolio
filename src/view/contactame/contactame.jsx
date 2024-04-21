import React from 'react';
import './contactame.css'; // Importa los estilos CSS

const Contactame = () => {
  return (
    <>
      <div id="sectionContactame" className="sectionContactame">
        <h1 className="titleContactame">Contactame</h1>
        <section className="contactame" id="contactame">
          <p className="textContactame" >  Actualmente estoy en busca de una oportunidad 
          <br></br> Te invito a enviar un mensaje para ponernos en contacto. </p>
          
          <a href="mailto:estefanyazocar3@gmail.com" className="btnContactame">
                    <div>
                        <span class="bg"></span>
                        <span class="base"></span>
                        <span class="text">Contáctame</span>
                    </div>
          </a>

        </section>
        <footer>Develop by Estefani Azocar</footer>
      </div>
    </>
  );
}

export default Contactame;
