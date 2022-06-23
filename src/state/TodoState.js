import { createSlice } from "@reduxjs/toolkit";

export const todoState = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) =>
      state.filter((element) => element.id !== action.payload),
    editTodo: (state, action) => {
      const { id, data } = action.payload;
      const todo = state.find((td) => td.id === id);
      for (let key in data) {
        todo[key] = data[key];
      }
    },
    resetTodos: (state, action) => [],
  },
});

// const defaultState = [];

// const ADD = "ADD@TODO";
// const REMOVE = "REMOVE@TODO";
// const RESET = "RESET@TODO";

// export const addTodo = (todo) => {
//   return {
//     type: ADD,
//     payload: todo,
//   };
// };

// export const removeTodo = (id) => {
//   return {
//     type: REMOVE,
//     payload: id,
//   };
// };

// export const resetTodos = () => {
//   return {
//     type: RESET,
//   };
// };

// export const TodoReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case ADD: {
//       return [...state, action.payload];
//     }
//     case REMOVE: {
//       return state.filter((element) => element.id !== action.payload);
//     }
//     case RESET: {
//       return defaultState;
//     }
//     default: {
//       return state;
//     }
//   }
// };
