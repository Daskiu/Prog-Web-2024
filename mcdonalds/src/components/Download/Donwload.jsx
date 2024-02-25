import React from "react";
import "./Donwload.css"

import logo2 from "../../assets/logo2.png"

export function Download() {
    return (
        <div className="download-container">
            <img className="logo2-img" src={logo2} />
            <div className="textos">
            <h1>Descárgate nuestra app</h1>
            <p>Descárgate nuestra app y no te pierdas nuestras novedades</p>
            </div>
            <button className="download-btn">Descargar ahora</button>
            
        </div>
    )
}