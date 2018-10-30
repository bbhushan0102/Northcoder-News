import React, { Component } from "react";
import Nav from "./components/Nav";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import { Router } from "@reach/router";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {" "}
          <h1>NC News</h1>
        </header>

        <Nav />

        <sidebar>sidebar</sidebar>
        <footer>footer</footer>
        <Router className="main">
          <Topics path="/topics" />
          <Articles path="/topics/:topic" />
          <Articles path="/articles/:id" />
          <Articles path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
