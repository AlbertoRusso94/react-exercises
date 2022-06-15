import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  function contatoreConBottoneUp() {
    setCount(count + 1);
  }

  function contatoreConBottoneDown() {
    setCount(count - 1);
  }

  function resetContatore() {
    setCount(initialValue);
  }
  return {
    counter: count,
    onIncrement: contatoreConBottoneUp,
    onDecrement: contatoreConBottoneDown,
    onReset: resetContatore,
  };
}
