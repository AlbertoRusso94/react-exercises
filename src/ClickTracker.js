import React from "react";

export class ClickTracker extends React.Component {
  state = {
    tracker: 0,
  };

  renderBottom = (event) => {
    this.setState({
      tracker: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Ultimo bottone cliccato: {this.state.tracker} </h1>
        <button onClick={this.renderBottom} value={1}>
          bottone 1
        </button>
        <button onClick={this.renderBottom} value={2}>
          bottone 2
        </button>
        <button onClick={this.renderBottom} value={3}>
          bottone 3
        </button>
      </div>
    );
  }
}
