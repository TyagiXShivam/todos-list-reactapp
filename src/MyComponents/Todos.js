import React from 'react'
import { Tasks } from "./Tasks";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className=" my-3" >Todos List</h3>
            {props.todos.length === 0 ? "No tasks to display" :
                props.todos.map((todo) => {
                    return (
                        <>
                            <Tasks key={todo.sno} todo={todo} onDelete={props.onDelete} /><hr />
                        </>
                    )
                })
            }

        </div>
    )
}
