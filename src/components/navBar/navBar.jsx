
import React from "react";
// import { Link } from 'react-router-dom';
import logo2 from '../../img/logo2.png'
import "./navBar.css"



const NavBar = () => {
    return (
        <>
        <div className="aside">
            <div className="containerNavBar">
                <div className="fondoLogo">
                    <a className="logo" href="/home">
                    <img className="logoImg" src={logo2} alt='logo' />
                    </a>
                </div>

                <nav className="navLink">
          
                        {/* <span className="fa-solid fa-house"></span> */}
                        <a href="/home">Inicio</a>   
                        {/* <span className="fa-solid fa-briefcase"></span> */}
                        <a href="/sobreMi">Sobre mi</a>

                        <a href="/portafolio">Proyectos</a>
                        {/* <span className="fa-solid fa-address-card"></span> */}
                        <a href="/contactame">Contactame</a>


                    {/* <span className="fa-solid fa-house"></span> */}
                    {/* <Link to='/home'>Inicio</Link> */}
                    {/* <span className="fa-solid fa-briefcase"></span> */}
                     {/* <Link to='/portafolio'>Portafolio</Link> */}
                     {/* <span className="fa-solid fa-address-card"></span> */}
                     {/* <Link to='/contacteme'>Contactame</Link> */}
                
                </nav>

                <ul class="social-icons">
                    <li>
                        <a href="https://www.linkedin.com/in/estefani-azocar/" target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/EstefaniAzocar" target="_blank">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default NavBar