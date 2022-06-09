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
      username: "",
    });
  };
  resetList = () => {
    this.setState({
      items: [],
    });
  };

  removeItem = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <div>
        {this.props.render(this.state.items, this.removeItem)}
        {/* <ul>
          {this.state.items.map((names, index) => (
            <li key={names + index}>
              {names}
              <button onClick={() => this.removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul> */}
        <input
          name="username"
          value={this.state.username}
          onChange={this.inputAdd}
        ></input>
        <button onClick={this.addOnlist}>Add</button>
        <button onClick={this.resetList}>Reset</button>
      </div>
    );
  }
}
