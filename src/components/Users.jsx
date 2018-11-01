import React, { Component } from "react";
import * as api from "../api";
import { navigate } from "@reach/router";

import "../App.css";

class Users extends Component {
  state = {
    users: []
  };

  render() {
    let { users } = this.state;
    console.log(users);
    return (
      <main>
        {users &&
          users.map(user => {
            return (
              <div key={user._id}>
                <div>user name: {user.name}</div>
                User {user.username}
                <div>{user.avatar_url}</div>
              </div>
            );
          })}{" "}
      </main>
    );
  }
  componentDidMount() {
    api
      .getUsers()
      .then(users => {
        console.log(users);
        this.setState({
          users
        });
      })
      .catch(error => {
        navigate("/error", { replace: true });
      });
  }
}
export default Users;
