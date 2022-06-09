import React from "react";
import { Age } from "./Age";

export function Welcome(props) {
  return (
    <div>
      <p>Welcome, {props.name}! </p>
      <Age age={props.age} />
    </div>
  );
}

//se non viene passato nessuna prop da welcome, non verrà reindirizzato nulla
//possiamo attribuire delle props di default qual'ora non vengano passate props, come sotto riportato.

// Welcome.defaultProps = {
//   name: "Alberto",
// };
