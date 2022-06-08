import React from "react";
import { Login } from "./Login";
// import { Welcome } from "./Welcome";

export class App extends React.Component {
  ù;
  eventoLogin = (state) => {
    console.log(state);
  };
  render() {
    return (
      <div>
        {/* <Welcome name="Alberto" age={28} /> */}
        <Login onLogin={this.eventoLogin} />
      </div>
    );
  }
}
