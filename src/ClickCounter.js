import { useCounter } from "./useCounter";

export function ClickCounter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button onClick={onIncrement}>Add 1</button>
      <button onClick={onDecrement}>Remove 1</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

// import React from "react";

// export class ClickCounter extends React.Component {
//   state = {
//     count: this.props.initialValue,
//   };
//   contatoreConBottone = () => {
//     this.setState((state) => {
//       return {
//         count: state.count + this.props.incrementValue,
//       };
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.count} </h1>
//         <button onClick={this.contatoreConBottone}>Click here</button>
//       </div>
//     );
//   }
// }
