import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const slice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    SET_TODOS: (state, action) => {
      state.todos = action.payload.todos;
    },
    ADD_TODOS: (state, action) => {
      state.todos.push(action.payload.newTodo);
    },
    DELETE_TODO: (state, action) => {
      // state.todoF = action.payload;
    },
  },
});

const { reducer, actions } = slice;

export const { SET_TODOS, ADD_TODOS, DELETE_TODO } = actions;

export default reducer;
