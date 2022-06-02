import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    username: "",
  };

  handleInput = (event) => {
    const value = event.target.value;
    this.setState({
      username: value,
    });
  };

  render() {
    return (
      <div>
        <Welcome name={this.state.username} />
        <input name="username" onChange={this.handleInput}></input>
      </div>
    );
  }
}
