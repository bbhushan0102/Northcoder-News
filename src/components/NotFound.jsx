import React, { Component } from "react";
import error404 from "../image/error404.jpg";
class NotFound extends Component {
  state = {};
  render() {
    return (
      <main>
        <h1> 404 error</h1>
        <img src={error404} alt="check your url" />
      </main>
    );
  }
}
export default NotFound;
