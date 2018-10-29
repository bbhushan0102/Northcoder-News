import React, { Component } from "react";
import Nav from "./Components/Nav";
import Topics from "./components/Topics";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {" "}
          <h1>NC News</h1>
        </header>

        <nav>
          <Nav />
        </nav>

        <sidebar>sidebar</sidebar>
        <main>main</main>
        <footer>footer</footer>
        <Router>
          <Topics />
        </Router>
      </div>
    );
  }
}

export default App;
