import React from "react";
import NavBar from "../../components/navBar/navBar";

import './header.css'

const Header = () => {
 const barraNav=()=>{
    
 }
    
    return (
        <>
        <div className="header" >
                <div className="btns-container" onClick={barraNav}>
                    <span className="fas fa-solid fa-bars"></span>
                    <span className="fas fa-solid fa-xmark"></span>
                </div>
                <div className="modo">
                    <span className="noche fa-solid fa-sun"></span>
                    <span className="dia fa-solid fa-moon"></span>
                </div>
            
        </div>

        <div className="container">
            <NavBar/>
        </div>
        </>
    )
}

export default Header