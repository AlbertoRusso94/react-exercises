import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Welcome name="John" age={19} />} />
        </Routes>
      </div>
    );
  }
}

// se la prop name è un espressione JSX per far si che possa funzionare deve essere inserita
// all'interno di parentesi graffe
