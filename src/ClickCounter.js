import { useEffect, useState } from "react";

export function ClickCounter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  function onCounterChange() {
    console.log(`counter value ${count}`);
  }
  useEffect(() => {
    onCounterChange();
  }, [count]);

  function contatoreConBottone() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={contatoreConBottone}>Click here</button>
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
