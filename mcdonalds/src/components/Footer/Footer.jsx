import React from "react";
import "./Footer.css"
import logo from "../../assets/logo.png"

import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import instagram from "../../assets/instagram.png"
import youtube from "../../assets/youtube.png"

import appstore from "../../assets/appstore.png"
import googleplay from "../../assets/googleplay.png"

export function Footer(){
    return(
        <footer>
            <nav className="social-media">
                <ul className="social-media-imgs">
                    <img src={facebook} className="facebook-img"/>
                    <img src={twitter} className="twitter-img"/>
                    <img src={instagram} className="instagram-img"/>
                    <img src={youtube} className="youtube-img"/>
                </ul>

                <nav className="get-it">
                    <img src={appstore} className="appstore"/>
                    <img src={googleplay} className="googleplay"/>
                </nav>
            </nav>

            <nav className="linea"></nav>

            <nav className="footer-list">
                <nav className="footer-list-text">
                <ul>
                    <li>Politica de Privacidad</li>
                    <li>Aviso de Fraude</li>
                </ul>
                
                <ul>
                    <li>Términos y Condiciones</li>
                    <li>Protección Datos Personales</li>
                </ul>
                </nav>
                <img src={logo} className="footer-logo"/>
                <p className="footer-text">© McDonald's 2024</p>
            </nav>       
        </footer>
    )
}