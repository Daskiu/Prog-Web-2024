import React, {useState} from "react";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import './List.css'

export function List() {
    const [allTodos, setTodos] = useState([]);

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
        <div className="List">
            {allTodos.map((item, index) =>{
                return(
                    <div className="List-item" key={index}>
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>

                <div>
                    <AiOutlineDelete className="icon" />
                    <BsCheckLg className="check-icon" />
                </div>
            </div>
                )
            })}
        </div>
    )
}