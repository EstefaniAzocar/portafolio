import React from 'react';
import './contactame.css';

const Contactame = () => {
  return (
    <>
      <div id="sectionContactame" className="sectionContactame">
      <h1 className="title">Contactame</h1>
        <div className="textoContactame">
          
          <section className="contacto" id="contacto">
            <h3>Trabajemos juntos!!</h3>
            <form action="https://formsubmit.co/estefanyazocar3@gmail.com" method="POST" className="formulario">
              <div className="campo">
                <label className="campo__label" htmlFor="email">Email</label>
                <input className="campo__field" type="email" name="email" id="email" placeholder="correo@correo.com" />
              </div>
              <div className="campo">
                <label className="campo__label" htmlFor="mensaje">Mensaje</label>
                <textarea className="campo__field campo__field--textarea" name="mensaje" placeholder="Me gustaria trabajar contigo..." id="mensaje"></textarea>
              </div>
              <div className="campo text-center">
                <input className="boton-contacto" type="submit" value="Enviar" />
                <input type="hidden" name="_next" value="http://localhost:3000/contactame" />
                <input type="hidden" name="_captcha" value="false" />
              </div>
            </form>
          </section>
          
        </div>
      </div>
    </>
  );
}

export default Contactame;
