
import React from "react";
import logo2 from '../../img/logo2.png'
import "./navBar.css"



const NavBar = () => {
    return (
        <>
        <div className="aside">
            <div className="containerNavBar">
                <div className="fondoLogo">
                    <a className="logo" href="#">
                    <img className="logoImg" src={logo2} alt='logo' />
                    </a>
                </div>

                <nav className="navLink">
                        {/* <span className="fa-solid fa-house"></span> */}
                        <a href="sectionHome">Inicio</a>
                        {/* <span className="fa-solid fa-briefcase"></span> */}
                        <a href="sectionPortafolio">Portafolio</a>
                        {/* <span className="fa-solid fa-address-card"></span> */}
                        <a href="#">Contactame</a>
                </nav>

                <div className="redes">
                    <span className="fa fa-brands fa-linkedin"></span>
                    <span className="fa fa-brands fa-github"></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar