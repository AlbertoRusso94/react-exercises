import { GithubUser } from "./GithubUser";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
        <Link key={chiave} to={un}>
          {un}
        </Link>
      ))}
      <Outlet />
    </div>
  );
}
