import { useParams } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
  const { username } = useParams();
  return (
    <div>
      <GithubUser username={username} />
    </div>
  );
}
