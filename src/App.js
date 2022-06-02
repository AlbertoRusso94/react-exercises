import React from "react";
// import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";

export class App extends React.Component {
  eventoLogin = (state) => {
    console.log(state);
  };
  render() {
    return (
      <div>
        {/* <InteractiveWelcome /> */}
        <Login onLogin={this.eventoLogin} />
      </div>
    );
  }
}

// se la prop name è un espressione JSX per far si che possa funzionare deve essere inserita
// all'interno di parentesi graffe
