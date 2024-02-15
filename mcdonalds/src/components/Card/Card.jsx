import React from "react";
import "./Card.css"

import img1 from "../../assets/image1.jpg"
import img2 from "../../assets/image2.jpg"
import img3 from "../../assets/image3.png"
import img4 from "../../assets/image4.jpg"
import img5 from "../../assets/image5.jpg"

const images = [img1, img2, img3, img4, img5]

export function Cards (){
    return(
        <div className="cardContainer">
            {
                images.map((images) =>
                <div className="mainDiv" key={images}>
                    <img className="cardImg" src={images} alt="stockImage"/>
                    <div className="textDiv">
                        <h2 className="cardTitle">
                            Title
                        </h2>
                        <p className="cardDesc">
                            Description of the card
                        </p>
                        <button className="buttonCard">Ver más</button>
                    </div>
                </div>)
            }
        </div>
    )
}