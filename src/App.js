import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="John" age={19} />
      </div>
    );
  }
}

// se la prop name è un espressione JSX per far si che possa funzionare deve essere inserita
// all'interno di parentesi graffe
