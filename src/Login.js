import React from "react";
import { useControlledForm } from "./useControlledForm";

export function Login({ onLogin }) {
  const { data, onReset, onHandleInput, onLog } = useControlledForm({
    onLogin,
  });

  return (
    <div>
      <input
        name="username"
        value={data.username}
        onChange={onHandleInput}
      ></input>
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={onHandleInput}
      ></input>
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={onHandleInput}
      ></input>
      <button
        type="button"
        onClick={onLog}
        disabled={!data.username || !data.password}
      >
        Login
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
