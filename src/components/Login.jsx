import React, { Component } from "react";
class Login extends Component {
  state = {
    username: "tickle122"
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">User:</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <button>Login</button>
      </form>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username);
    this.setState({
      username: ""
    });
  };
  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };
}
export default Login;
