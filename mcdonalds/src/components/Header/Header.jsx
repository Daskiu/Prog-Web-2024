import React from "react";
import "./Header.css"
import logo from "../../assets/logo.png"
import menu from "../../assets/menu.png"

export function Header() {
    return (
        <header>
            <button className="menu-btn">
                <img className="menu" src={menu} />
            </button>

            <img className="logo" src={logo} />

            <nav className="header-nav">
                <ul className="header-list1">
                    <li>Trabaja con Nosotros</li>
                    <li>Contacto</li>
                </ul>

                <ul className="header-list2">
                    <li>Productos</li>
                    <li>Locales</li>
                    <li>En familia</li>
                    <li>Nosotros</li>
                </ul>
            </nav>
            <button className="header-btn">McDelivery</button>
        </header>
    )
}