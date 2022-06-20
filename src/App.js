import React from "react";
import { CarDetails } from "./CarDetails.js";
import { ClickCounter } from "./ClickCounter.js";
import { GithubUser } from "./GithubUser.js";
import { GithubUserList } from "./GithubUserList.js";

export function App() {
  return (
    <div>
      <CarDetails
        InitialData={{ model: "Mercedes", year: "2000", color: "black" }}
      />
      {/* <ClickCounter initialValue={0} incrementValue={1} /> */}
      {/* <GithubUser username="AlbertoRusso94" /> */}
      {/* <GithubUserList /> */}
    </div>
  );
}
