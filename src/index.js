// import ReactDOM from "react-dom";
// import { App } from "./App";
// import "./index.css";
import { store } from "./state/Store";
import { counterState } from "./state/CounterState";
import { todoState } from "./state/TodoState";

// ReactDOM.render(<App />, document.getElementById("root"));

//--->feature/Redux-05

store.subscribe(() => {
  console.log(store.getState());
});
//--->fine feature/Redux-05

store.dispatch(
  todoState.actions.addTodo({ id: 1, title: "Buy phone", completed: true })
);
store.dispatch(
  todoState.actions.addTodo({ id: 2, title: "Buy cover", completed: true })
);
store.dispatch(
  todoState.actions.addTodo({ id: 3, title: "Buy tabacco", completed: false })
);
store.dispatch(todoState.actions.removeTodo(1));
store.dispatch(todoState.actions.removeTodo(2));
store.dispatch(
  todoState.actions.editTodo({ id: 3, data: { completed: true } })
);
store.dispatch(todoState.actions.resetTodos());
store.dispatch(counterState.actions.increment(7));
store.dispatch(counterState.actions.decrement(5));
store.dispatch(counterState.actions.reset());
