import React from "react";
import "./Card.css"
import { images } from "../../const/links";


export function Cards() {
    return (
        <div className="card-container">
            {
                images.map((images) =>
                    <div className="card-div" key={images.id}>
                        <img className="card-img" src={images.src} alt="stockImage" />
                        <div className="card-text">
                            <h2 className="card-title">
                                {images.title}
                            </h2>
                            <p className="card-desc">
                                {images.text}
                            </p>
                            <button className="card-button">{images.btn}</button>
                        </div>
                    </div>)
            }
        </div>
    )
}