import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        // non bisogna mai modificare lo state originale perchè non verrebbe vista da react
        // state.count += this.props.initialValue

        return {
          count: state.count + this.props.incrementValue,
        };
      });
    }, this.props.timeSet);
  }

  // constructor(props) {
  //   super(props);
  //   setInterval(() => {
  //     this.setState((state) => {
  //       return {
  //         count: state.count + this.props.incrementValue,
  //       };
  //     });
  //   }, this.props.timeSet);
  // }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}
