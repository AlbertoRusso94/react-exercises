// import ReactDOM from "react-dom";
// import { App } from "./App";
// import "./index.css";
import { store } from "./state/Store";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./state/CounterState";
import { addTodo, removeTodo, resetTodos } from "./state/TodoState";

// ReactDOM.render(<App />, document.getElementById("root"));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo({ id: 1, title: "Buy phone", completed: true }));
store.dispatch(addTodo({ id: 2, title: "Buy cover", completed: true }));
store.dispatch(addTodo({ id: 3, title: "Buy tabacco", completed: false }));
store.dispatch(removeTodo(1));
store.dispatch(removeTodo(2));
store.dispatch(resetTodos());
// store.dispatch(incrementCounter(7));
// store.dispatch(decrementCounter(5));
// store.dispatch(resetCounter());
