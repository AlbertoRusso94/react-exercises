import React from "react";

export class LoginUncontrolled extends React.Component {
  formSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <input name="username" required autoFocus></input>
          <input name="password" type="password" required></input>
          <input name="remember" type="checkbox"></input>
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
