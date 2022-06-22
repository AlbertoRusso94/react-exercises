import { useEffect, useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, loading, error } = useGithubUser(username);
  console.log(data);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {data && <p> {data.name} </p>}
      <hr></hr>
      {data && data.type}
      <hr></hr>
      {data && data.bio}
      <hr></hr>
    </div>
  );
}
