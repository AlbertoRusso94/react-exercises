import React from "react";

export class ToDoList extends React.Component {
  state = {
    username: "",
    items: [],
  };

  inputAdd = (event) => {
    const value = event.target.value;
    this.setState({
      username: value,
    });
  };

  addOnlist = () => {
    const { username, items } = this.state;
    username && items.push(username);

    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((names, index) => (
            <li key={names + index}> {names} </li>
          ))}
        </ul>
        <input
          name="username"
          value={this.state.username}
          onChange={this.inputAdd}
        ></input>
        <button onClick={this.addOnlist}>Add</button>
      </div>
    );
  }
}
