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
        <div className="card-container">
            {
                images.map((images) =>
                <div className="card-div" key={images}>
                    <img className="card-img" src={images} alt="stockImage"/>
                    <div className="card-text">
                        <h2 className="card-title">
                            Title
                        </h2>
                        <p className="card-desc">
                            Description of the card
                        </p>
                        <button className="card-button">Ver más</button>
                    </div>
                </div>)
            }
        </div>
    )
}