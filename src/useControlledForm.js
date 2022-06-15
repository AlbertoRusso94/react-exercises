import { useState } from "react";

export function useControlledForm({ onLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const resetInput = () => {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  };

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const loginButton = () => {
    onLogin(data);
  };
  return {
    data,
    onReset: resetInput,
    onHandleInput: handleInput,
    onLog: loginButton,
  };
}
