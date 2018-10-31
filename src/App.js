import React, { Component } from "react";
import Nav from "./components/Nav";
import { navigate } from "@reach/router";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Comments from "./components/Comments";
import Login from "./components/Login";
import { Router } from "@reach/router";
import * as api from "./api";

import "./App.css";

class App extends Component {
  state = {
    user: ""
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>
          {" "}
          <h1>NC News</h1>
        </header>

        <Nav />

      
        <Login login={this.login} user={this.state.user} />
        {this.state.user && (
          <Router className="main">
            <Topics path="/topics" />
            <Articles path="/topics/:topic" />
            <Article path="/articles/:article_id" user={this.state.user} />
            <Comments
              path="/articles/:article_id/comments"
              user={this.state.user}
            />
            {/* <Users path="/users" /> */}
            <Articles path="/" />
          </Router>
        )}
      </div>
    );
  }
  login = username => {
    api
      .getUser(username)
      .then(user => {
        this.setState({
          user
        });
      })
      .catch(error => {
        navigate("/error", { replace: true });
      });
  };
}

export default App;
