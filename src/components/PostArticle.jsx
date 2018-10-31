import React from "react";
import { Component } from "react";
// import { Link, navigate } from "@reach/router";
// import * as api from "../api";
class PostArticle extends Component {
  state = {
    article: "",
    title: "",
    topic: ""
  };
  render() {
    console.log(this.state.article);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="article">Post Article</label>
        <input type="text" id="article" onChange={this.handleChange} />
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={this.handleChange} />
        <select id={"topic"} onChange={this.handleChange}>
          <option selected value="football">
            {" "}
            Football{" "}
          </option>
          <option value="cooking"> Cooking </option>
          <option value="coding"> Coding </option>
        </select>
        <button>Post</button>
      </form>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    // this.props.addArticle(this.state);
  };
  handleChange = event => {
    console.log(this.state);
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };
}
export default PostArticle;
