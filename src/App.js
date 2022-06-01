import React from "react";
import { ClickCounter } from "./ClickCounter.js";

export class App extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter initialValue={0} incrementValue={1} />
      </div>
    );
  }
}
