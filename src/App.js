import React from "react";
import { Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter.js";
import { GithubUser } from "./GithubUser.js";
import { GithubUserList } from "./GithubUserList.js";
import { ShowGithubUser } from "./ShowGithubUser.js";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <ClickCounter initialValue={0} incrementValue={1} /> */}
        {/* <GithubUser username="AlbertoRusso94" /> */}
        <Routes>
          <Route path="/users" element={<GithubUserList />}>
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
        </Routes>
      </div>
    );
  }
}
