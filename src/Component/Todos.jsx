import React from "react";
import Todo from "./Todo.jsx";
import "./Todos.css";

export default function Todos(props) {
  return (
    <div className="todos">
      {props.todoData.map((data, index) => (
        <Todo data={data} key={index} id={data.id} onRemove={props.onRemove} />
      ))}
    </div>
  );
}
