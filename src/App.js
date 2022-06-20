import { FilteredList } from "./FilteredList";

export function App() {
  const lista = [
    { name: "Alberto", id: 1, age: 28 },
    { name: "Giovanni", id: 2, age: 26 },
    { name: "Gatto", id: 3, age: 4 },
  ];

  return (
    <div>
      <FilteredList list={lista} />
    </div>
  );
}
