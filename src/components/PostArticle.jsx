import React from "react";
import { Component } from "react";
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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="body">Post Article</label>
        <input type="text" id="body" onChange={this.handleChange} />
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={this.handleChange} />
        <select id={"belongs_to"} onChange={this.handleChange}>
          <option value="football"> Football </option>
          <option value="cooking"> Cooking </option>
          <option value="coding"> Coding </option>
        </select>
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
