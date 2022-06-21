import React from "react";
import { Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter.js";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/counter"
            element={<ClickCounter initialValue={0} incrementValue={1} />}
          />
        </Routes>
      </div>
    );
  }
}
