import React from "react";
import "./Slide.css"

import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
import slide4 from "../../assets/slide4.jpg"
import slide5 from "../../assets/slide5.jpg"
import slide6 from "../../assets/slide6.jpg"
import slide7 from "../../assets/slide7.jpg"
import slide8 from "../../assets/slide8.jpg"
import slide9 from "../../assets/slide9.jpg"
import slide10 from "../../assets/slide10.jpg"

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10]

export function Slides (){
    return(
        <div className="slide-container">
            {
                slides.map((slides) =>
                <div className="main-div2" key={slides}>
                    <img className="slide-img" src={slides} alt="stockSlides"/>
                </div>)
            }
        </div>
    )
}