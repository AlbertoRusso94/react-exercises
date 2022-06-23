import { combineReducers, createStore } from "redux";
import { todoState } from "./TodoState";
import { counterState } from "./CounterState";

const rootReducer = combineReducers({
  counter: counterState.reducer,
  todo: todoState.reducer,
});

export const store = createStore(rootReducer);
