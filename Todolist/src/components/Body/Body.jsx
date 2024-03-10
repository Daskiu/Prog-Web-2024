import React from "react";
import {Form} from "../Form/Form"
import {List} from "../List/List"
import './Body.css'

export function Body() {
    return (
        <div className="Todo-wrapper">
            <Form/>
            <List/>
        </div>
    )
}