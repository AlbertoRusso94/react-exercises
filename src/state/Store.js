import { createStore } from "redux";
import { TodoReducer } from "./TodoState";
import { counterReducer } from "./CounterState";

// export const store = createStore(counterReducer);
export const store = createStore(TodoReducer);
