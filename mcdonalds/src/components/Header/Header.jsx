import React from "react";
import { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

export function Header() {
    const [showMenu, setShowMenu] = useState(false)

    console.log("state value", showMenu);

    const handleClick = (event) => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <button onClick={handleClick} className="menu-btn">
                <img className="menu" src={menu} />
            </button>

            <img className="logo" src={logo} />

            <Menu showMenu={showMenu}/>
            
            <button className="header-btn">McDelivery</button>
        </header>
    );
}

function Menu({showMenu}) {
    return(
        <nav className={!showMenu ? 'hidden' : ''}>
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
    )
}