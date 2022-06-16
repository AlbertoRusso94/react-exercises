import { useEffect, useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data } = useGithubUser(username);
  return (
    <div>
      {data && data.name}
      <hr></hr>
      {data && data.type}
      <hr></hr>
      {data && data.bio}
      <hr></hr>
    </div>
  );
}
