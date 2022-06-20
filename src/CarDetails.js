import { useEffect, useRef } from "react";

export function CarDetails({ InitialData }) {
  const formRef = useRef();

  useEffect(() => {
    formRef.current.reset();
  }, [InitialData]);

  return (
    <form ref={formRef}>
      <input name="model" defaultValue={InitialData.model}></input>
      <input name="year" type="number" defaultValue={InitialData.year}></input>
      <input name="color" defaultValue={InitialData.color}></input>
    </form>
  );
}
