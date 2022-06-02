import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <InteractiveWelcome />
      </div>
    );
  }
}

// se la prop name è un espressione JSX per far si che possa funzionare deve essere inserita
// all'interno di parentesi graffe
