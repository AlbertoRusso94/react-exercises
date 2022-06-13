import { useState } from "react";

export function Login({ onLogin }) {
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const { username, password, remember } = inputData;

  function handleInput(event) {
    const { name, value, type, checked } = event.target;

    setInputData({
      ...inputData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  const loginButton = () => {
    onLogin(inputData);
  };

  //   loginButton = () => {
  //     this.props.onLogin(this.state);
  //   };

  return (
    <form>
      <input onChange={handleInput} value={username} name="username"></input>
      <input
        onChange={handleInput}
        type="password"
        value={password}
        name="password"
      ></input>
      <input
        onChange={handleInput}
        value={remember}
        name="remember"
        type="checkbox"
      ></input>
      <button
        type="button"
        onClick={loginButton}
        disabled={!inputData.username || !inputData.password}
      >
        Login
      </button>
    </form>
  );
}

// import React from "react";

// export class Login extends React.Component {
//   state = {
//     username: "",
//     password: "",
//     remember: true,
//   };

//   handleInput = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;
//     const type = event.target.type;
//     const checked = event.target.checked;
//     this.setState({
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   loginButton = () => {
//     this.props.onLogin(this.state);
//   };

//   render() {
//     return (
//       <div>
//         <input
//           name="username"
//           value={this.state.username}
//           onChange={this.handleInput}
//         ></input>
//         <input
//           name="password"
//           type="password"
//           value={this.state.password}
//           onChange={this.handleInput}
//         ></input>
//         <input
//           name="remember"
//           type="checkbox"
//           checked={this.state.remember}
//           onChange={this.handleInput}
//         ></input>
//         <button
//           type="button"
//           onClick={this.loginButton}
//           disabled={!this.state.username || !this.state.password}
//         >
//           Login
//         </button>
//       </div>
//     );
//   }
// }
