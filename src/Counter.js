import { useEffect, useState } from "react";

import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue, incrementValue, timeSet }) {
  const [count, setCount] = useState(initialValue);
  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount((count) => count + incrementValue);
    }, timeSet);
    return function cleanup() {
      clearInterval(myInterval);
    };
  }, [count, incrementValue, timeSet]);

  // state = {
  //   count: this.props.initialValue,
  // };

  // constructor(props) {
  //   super(props);
  //   setInterval(() => {
  //     this.setState((state) => {
  //       return {
  //         count: state.count + this.props.incrementValue,
  //       };
  //     });
  //   }, this.props.timeSet);
  // }

  return (
    <div>
      <CounterDisplay count={count} />
    </div>
  );
}
