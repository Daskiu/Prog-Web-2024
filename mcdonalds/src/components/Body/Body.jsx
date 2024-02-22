import React from "react";
import {Cards} from "../Card/Card"
import {Slides} from "../Slide/Slide"
import { Download } from "../Download/Donwload";

export function Body(){
    return(
        <main>
            <Slides/>
            <Cards/>
            <Download/>
        </main>
    )
}