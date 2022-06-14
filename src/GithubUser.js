import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, [username]);
  return (
    <div>
      {data && data.name}
      <hr></hr>
      {data && data.type}
      <hr></hr>
      {data && data.bio}
    </div>
  );
}
