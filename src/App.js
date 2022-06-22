import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter.js";
import { GithubUser } from "./GithubUser.js";
import { ShowGithubUser } from "./ShowGithubUser.js";

export class App extends React.Component {
  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="clickcounter">ClickCounter</Link>
        <Link to="githubuser">GithubUser</Link>

        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/clickcounter" element={<ClickCounter />} />
          <Route path="/gitubuser" element={<GithubUser />} />
          {/* <Route path="/:username" element={<ShowGithubUser />} /> */}
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </>
    );
  }
}
