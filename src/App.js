import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodosList();
    // console.log(todos);
    // setTodos(todos);
  }, []);

  const createToDoList = async () => {
    const result = await axios.post(
      "http://todo-list-app.us-east-1.elasticbeanstalk.com/todos",
      { description: "new todo list", completed: false }
    );
  };

  const getAllTodosList = async () => {
    const result = await axios.get(
      "http://todo-list-app.us-east-1.elasticbeanstalk.com/todos"
    );

    if (result) {
      setTodos(result.data);
    }

    return result;
  };

  const deleteTodo = async (id) => {
    const result = await axios.delete(
      `http://todo-list-app.us-east-1.elasticbeanstalk.com/todos/${id}`
    );
  };

  return (
    <div className="app">
      <button onClick={createToDoList}>create</button>
      <button onClick={getAllTodosList}>get all</button>
      <ul>
        {todos &&
          todos.map((todo, index) => (
            <li key={index}>
              {todo.id} - {todo.description}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
