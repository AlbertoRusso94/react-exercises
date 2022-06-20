import { useMemo } from "react";

export function FilteredList(props) {
  const filteredList = useMemo(
    () =>
      props.list
        .filter((element) => element.age > 18)
        .map((element) => (
          <div key={element.id}>
            <p>Name: {element.name}</p>
            <p>Age: {element.age}</p>
            <p>Id: {element.id}</p>
            <hr></hr>
          </div>
        )),
    [props]
  );

  return <div>{filteredList}</div>;
}
