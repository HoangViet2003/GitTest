import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const[addTodo,setAddTodo] =useState("")
  const [updateTodo,setUpdateTodo] = useState("")

  useEffect(() => {
    getAllTodosList();
    // console.log(todos);
    // setTodos(todos);
  }, []);

  const createToDoList = async () => {
    const result = await axios.post(
      "http://todo-list-app.us-east-1.elasticbeanstalk.com/todos",addNewTodo
      // { description: {updateTodos}, completed: false }
    );
    console.log(setAddTodo)
    getAllTodosList();
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
    getAllTodosList();
  };

  const addNewTodo = {
    description: addTodo,
    completed: false,
  }

  const updateTodoFuct = async (id) => {
    const result = await axios.put(
      `http://todo-list-app.us-east-1.elasticbeanstalk.com/todos/${id}`,updateTodoList
    );
    getAllTodosList();
  };

  const updateTodoList ={
    description: updateTodo,
    completed: false
  }

 


  return (
    <div className="app">
      <button onClick={createToDoList}>create</button>
      <button onClick={getAllTodosList}>get all</button>
      <input
        type="text"
        onChange={(e) => setAddTodo(e.target.value)}
        value={addTodo}
      />
      <ul>
        {todos &&
          todos.map((todo, index) => (
            <li key={index}>
              {todo.id} - {todo.description}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => updateTodoFuct(todo.id)}>Update</button>
            </li>
          ))}
          <from>Update line:</from>
          <input
          type="text"
          onChange={(e) => setUpdateTodo(e.target.value)}
          value={updateTodo}
        />
      </ul>
    </div>
  );
}

export default App;
