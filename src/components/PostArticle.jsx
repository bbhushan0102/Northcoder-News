import React from "react";
import { Component } from "react";
import "../App.css";
import "./input.css";
// import { Link, navigate } from "@reach/router";
// import * as api from "../api";
class PostArticle extends Component {
  state = {
    body: "",
    title: "",
    belongs_to: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="div">
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" onChange={this.handleChange} />
        <select id={"belongs_to"} onChange={this.handleChange}>
          {" "}
          <br />
          <option value="football"> Football </option>
          <option value="cooking"> Cooking </option>
          <option value="coding"> Coding </option>
        </select>
        <br />
        <label htmlFor="body">Post Article</label>
        <br />
        <textarea type="text" id="body" onChange={this.handleChange} />
        <br />
        <button>Post</button>
      </form>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.addArticle(this.state);
  };
  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };
}
export default PostArticle;
