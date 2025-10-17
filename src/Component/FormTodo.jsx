import React, { useState } from "react";
import "./FormTodo.css";

export default function FormTodo(props) {
  const [user, setUser] = useState({ tittle: "", description: "" });
  const handelChange = (e) => {
    // const name = e.target.name;
    const { name, value } = e.target;
    setUser((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    props.dataSend(user);
    setUser({ tittle: "", description: "" });
  };
  return (
    <form onSubmit={handelSubmit}>
      <div className="tittleArea">
        <label htmlFor="tittle">Add tittle :</label>
        <input
          placeholder="your tittle"
          id="tittle"
          onChange={handelChange}
          name="tittle"
          value={user.tittle}
        />
      </div>

      <div className="desArea">
        <label htmlFor="description">Add description:</label>
        <textarea
          placeholder="description"
          id="description"
          onChange={handelChange}
          name="description"
          value={user.description}
          rows={5}
        />
      </div>
      <div className="buttonArea">
        <button type="submit">Add list</button>
      </div>
    </form>
  );
}
