import React from "react";
import axios from "axios";

export default class Form extends React.Component {
  //   userNameInput = React.createRef();

  state = { userName: "" };
  handleSubmit = async event => {
    event.preventDefault();
    // console.log(this.userNameInput.current.value);
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GH username"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          //   ref={this.userNameInput}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}
