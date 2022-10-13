import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SET_TODOS, ADD_TODOS, DELETE_TODO } from "../features/todoSlice";

const useTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const getTodo = async () => {
    const result = await axios.get(
      "http://todo-list-app.us-east-1.elasticbeanstalk.com/todos"
    );

    dispatch(SET_TODOS({ todos: result.data }));
  };

  const addTodo = async (description) => {
    const result = await axios.post(
      "http://todo-list-app.us-east-1.elasticbeanstalk.com/todos",
      {
        description: description,
        completed: false,
      }
    );

    const newTodo = result.data;

    dispatch(ADD_TODOS({ newTodo: newTodo }));
  };

  const deleteTodo = async (id) => {
    const result = await axios.delete(
      `http://todo-list-app.us-east-1.elasticbeanstalk.com/todos/${id}`
    );
  };

  return { todos, getTodo, addTodo, deleteTodo };
};

export default useTodo;
