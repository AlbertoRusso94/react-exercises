import { GithubUser } from "./GithubUser";
import { useState } from "react";

export function GithubUserList() {
  const [user, setUsername] = useState("");
  const [userNames, setUsernames] = useState([]);

  const inputUsername = (event) => {
    setUsername(event.target.value);
  };

  const addUsers = () => {
    setUsernames((users) => [...users, user]);
  };

  return (
    <div>
      <input name="user" onChange={inputUsername}></input>
      <button onClick={addUsers}>Add here</button>
      {userNames.map((un, chiave) => (
        <GithubUser key={chiave} username={un} />
      ))}
    </div>
  );
}
