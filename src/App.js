import React from "react";
import { useState, useEffect } from "react";
import useTodo from "./Hook/useTodo";

function App() {
  const [addTodoText, setAddTodoText] = useState("");

  const { todos, getTodo, addTodo } = useTodo();

  const createToDoList = () => {
    addTodo(addTodoText);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="app">
      <button onClick={createToDoList}>create</button>

      <input
        type="text"
        onChange={(e) => setAddTodoText(e.target.value)}
        value={addTodoText}
      />
      <ul>
        {todos &&
          todos.map((todo, index) => (
            <li key={index}>
              {todo.id} - {todo.description}
              {/* <button onClick={() => deleteTodo(todo.id)}>Delete</button> */}
              {/* <button onClick={() => updateTodoFuct(todo.id)}>Update</button> */}
            </li>
          ))}
        <from>Update line:</from>
        <input
          type="text"
          // onChange={(e) => setUpdateTodo(e.target.value)}
          // value={updateTodo}
        />
      </ul>
    </div>
  );
}

export default App;
