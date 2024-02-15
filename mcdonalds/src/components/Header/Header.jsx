import React from "react";
import "./Header.css"
import logo from "../../assets/logo.png"
import menu from "../../assets/menu.png"

export function Header(){
    return(
        <header>
            <button className="menu-btn">
                <img className="menu" src={menu}/>
            </button>

            <nav className="nav1">
                <ul className="uluno">
                    <li>Trabaja con Nosotros</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <nav className="nav2">
                <ul className="uldos">
                    <li>Productos</li>
                    <li>Locales</li>
                    <li>En familia</li>
                    <li>Nosotros</li>
                </ul>
            </nav>
                
            <img className="logo" src={logo}/>

            <button className="mcdelivery">McDelivery</button>
        </header>
    )
}