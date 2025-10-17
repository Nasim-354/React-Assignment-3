import React, { useState } from "react";
import Todos from "./Todos.jsx";
import FormTodo from "./FormTodo.jsx";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [todoData, setTodoData] = useState([]);

  const dataReceive = (data) => {
    const { tittle, description } = data;
    if (!tittle || tittle.trim() === "") return;
    if (!description || description.trim() === "") return;

    setTodoData((previous) => {
      return [
        ...previous,

        {
          id: uuidv4(),
          tittle,
          description,
        },
      ];
    });
  };
  const onHandelDelete = (id) => {
    setTodoData((pre) => {
      const filterData = pre.filter((todo) => todo.id !== id);
      return filterData;
    });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todo List App</h1>
      <FormTodo dataSend={dataReceive} />
      <Todos todoData={todoData} onRemove={onHandelDelete} />
    </div>
  );
}
