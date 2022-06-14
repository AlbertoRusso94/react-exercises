import React from "react";
import { ClickCounter } from "./ClickCounter.js";
import { GithubUser } from "./GithubUser.js";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <ClickCounter initialValue={0} incrementValue={1} /> */}
        <GithubUser username="AlbertoRusso94" />
      </div>
    );
  }
}
