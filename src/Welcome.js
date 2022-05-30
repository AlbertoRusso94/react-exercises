import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}! </p>
        {this.props.age > 18 && <Age age={this.props.age} />}
      </div>
    );
  }
}

//se non viene passato nessuna prop da welcome, non verrà reindirizzato nulla
//possiamo attribuire delle props di default qual'ora non vengano passate props, come sotto riportato.

// Welcome.defaultProps = {
//   name: "Alberto",
// };
