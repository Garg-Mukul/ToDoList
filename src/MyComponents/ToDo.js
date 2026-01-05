//todo.js

import React from "react";

export const ToDo = ({ todo, onDelete }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button className="btn btn-danger" onClick={() => onDelete(todo)}>Delete</button>

    </div>
  );
};
