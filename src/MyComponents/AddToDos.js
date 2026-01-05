//addtodos.js

import React, { useState } from 'react'

export const AddToDos = ({addtodo}) => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const submit = (e) =>{
    e.preventDefault()
    if(!title || !desc){
      alert("title or description can not be blank")
    }
    else{
      addtodo(title,desc);
    settitle("")
setdesc("")
    }
    


  }
  return (
    <div className = "container my-3">
      <h3> Add a ToDo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="Title" className="form-label">ToDo Title</label>
    <input type="text" value = {title} onChange={(e) =>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">ToDo description</label>
    <input type="text" value = {desc} onChange ={(e) =>{setdesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Add ToDo</button>
</form>

    </div>
  )
}
