import React, { useState } from "react";
import "./Todo.css";
export default function Todo(props) {
  const [toggle, setToggle] = useState(true);
  const { tittle, description } = props.data;
  const { id } = props;

  const handleDelete = (id) => {
    const choice = confirm("Are you sure?");
    if (choice) {
      props.onRemove(id);
      alert("yes");
    } else {
      alert("no");
    }
  };
  return (
    <div className="todo">
      <h2>{tittle}</h2>
      {toggle && <p>{description}</p>}

      <div className="btn">
        <button
          className="btns"
          onClick={() => {
            handleDelete(id);
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
