import React from "react";
import { Sum } from "./Sum";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Welcome name="John" age={19} /> */}

        <Sum numbers={[1, 2, 3, 4].reduce((somma, i) => somma + i, 0)} />
      </div>
    );
  }
}

// se la prop name è un espressione JSX per far si che possa funzionare deve essere inserita
// all'interno di parentesi graffe
