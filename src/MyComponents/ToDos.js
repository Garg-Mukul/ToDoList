//todos.js

import React from "react";
import { ToDo } from "./ToDo";

export const ToDos = (props) => {
  return (
    <div className="container">
      <h3> ToDosList</h3>
      {props.todos.length === 0 ? (
        <p>No ToDos to display</p>
      ) : (
        props.todos.map((todo) => <ToDo todo={todo} key={todo.Sno} 
        onDelete={props.onDelete}/>)
      )}
    </div>
  );
};
