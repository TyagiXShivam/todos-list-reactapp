import React, { useState } from 'react';
export const AddTodo = (props)=> {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e)=> {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank")
        }
        else{

             {props.addTodo(title,desc)};
             settitle("");
             setdesc("");
    }
}
    return (
        <div className="container my-3" >
            <h3>Add a new task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task Title</label>
                    <input type="text"  onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Task Description</label>
                    <input type="text"  onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Task</button>
            </form>
        </div>
    )
}
