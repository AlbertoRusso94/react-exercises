import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}! </p>
        <p>Your age is {this.props.age} </p>
      </div>
    );
  }
}

//se non viene passato nessuna prop da welcome, non verrà reindirizzato nulla
//possiamo attribuire delle props di default qual'ora non vengano passate props, come sotto riportato.

// Welcome.defaultProps = {
//   name: "Alberto",
// };
