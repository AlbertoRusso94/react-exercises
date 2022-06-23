// import ReactDOM from "react-dom";
// import { App } from "./App";
// import "./index.css";
import { store } from "./state/Store";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./state/CounterState";

// ReactDOM.render(<App />, document.getElementById("root"));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCounter(7));
store.dispatch(decrementCounter(5));
store.dispatch(resetCounter());
