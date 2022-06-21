import React from "react";
import { Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter.js";
import { GithubUser } from "./GithubUser.js";
import { ShowGithubUser } from "./ShowGithubUser.js";

export class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/:username" element={<ShowGithubUser />} />
      </Routes>
    );
  }
}
