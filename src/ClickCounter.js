import React from "react";

export class ClickCounter extends React.Component {
  state = {
    count: this.props.initialValue,
  };
  contatoreConBottone = () => {
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementValue,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count} </h1>
        <button onClick={this.contatoreConBottone}>Click here</button>
      </div>
    );
  }
}
