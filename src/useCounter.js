import { useCallback, useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const contatoreConBottoneUp = useCallback(function contatoreConBottoneUp() {
    setCount((count) => count + 1);
  }, []);

  const contatoreConBottoneDown = useCallback(
    function contatoreConBottoneDown() {
      setCount((count) => count - 1);
    },
    []
  );

  const resetContatore = useCallback(
    function resetContatore() {
      setCount(initialValue);
    },
    [initialValue]
  );
  return {
    counter: count,
    onIncrement: contatoreConBottoneUp,
    onDecrement: contatoreConBottoneDown,
    onReset: resetContatore,
  };
}
