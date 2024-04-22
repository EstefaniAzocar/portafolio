import React, {useState} from "react";
import NavBar from "../../components/navBar/navBar";

import './header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    
    return (
        <>
        <div className="header" >
                <div className={`btns-container ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
                {
                    isOpen ?  <span className=" fas nav-close-btnfas fa-solid fa-xmark"></span> : 
                    <span className=" fas fa-solid fa-bars" ></span>
                }
                    {/* <span className=" nav-btn fas fa-solid fa-bars" ></span> */}
                    {/* <span className=" nav-btn nav-close-btnfas fa-solid fa-xmark"></span> */}
                </div>
                <div className="modo">
                    <span className="noche fa-solid fa-sun"></span>
                    <span className="dia fa-solid fa-moon"></span>
                </div>
            
        </div>

        <div className={`container ${isOpen && "open"}`}>
            <NavBar/>
        </div>

        {/* <div>
          <Outlet />
        </div> */}
        </>
    )
}

export default Header