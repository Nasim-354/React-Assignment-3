import React, { useState } from "react";
import "./Todo.css";
export default function Todo(props) {
  const [toggle, setToggle] = useState(true);
  const { tittle, description } = props.data;
  const { id } = props;

  const handelDelete = (id) => {
    props.onRemove(id);
    alert("Are you sure?");
  };
  return (
    <div className="todo">
      <h2>{tittle}</h2>
      {toggle && <p>{description}</p>}

      <div className="btn">
        <button
          className="btns"
          onClick={() => {
            handelDelete(id);
          }}
        >
          Delete
        </button>

        <div className="toggleBtn">
          <button
            type="button"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? "-" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
}
