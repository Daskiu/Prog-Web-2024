import React, { useState } from "react";
import './Form.css'

export function Form() {
    const [isCompleteScreen, setIsCompleteScreen] = useState(false);
    const [allTodos, setTodos] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const handleAddTodo = () =>{
        let newTodoItem = {
            title:newTitle,
            description:newDescription
        }

        let updatedTodoArr = [...allTodos];
        updatedTodoArr.push(newTodoItem);
        setTodos(updatedTodoArr);
    }

    return (
        <div>
            <div className="Form">
                <div className="Form-input-items">
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="Type your task"/>
                </div>

                <div className="Form-input-items">
                    <label>Description</label>
                    <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="Type your description"/>
                </div>

                <div className="Form-input-items">
                    <button type="button" onClick={handleAddTodo} className="Form-btn">Add</button>
                </div>
            </div>
            <div className="Btn-area">
                <button className={`Task-btn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>To Do</button>
                <button className={`Task-btn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
            </div>
        </div>
    )
}