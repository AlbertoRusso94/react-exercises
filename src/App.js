import React from "react";
import { ToDoList } from "./ToDoList";

export class App extends React.Component {
  render() {
    return (
      <div>
        <ToDoList
          render={(items, removeItem) => (
            <ul>
              {items.map((names, index) => (
                <li key={names + index}>
                  {names}
                  <button onClick={removeItem.bind(this, index)}>Remove</button>
                  {/* <button onClick={() => this.removeItem(index)}>Remove</button> */}
                </li>
              ))}
            </ul>
          )}
        />
      </div>
    );
  }
}
