import React, { Component } from "react";

import { navigate } from "@reach/router";
// import "./App.css";
import * as api from "../api";
class Article extends Component {
  state = {
    article: {}
  };
  render() {
    let article = this.state.article;
    return (
      <main>
        {" "}
        <div>
          <h1>{article.title}</h1>
        </div>
        <div>{article.body}</div>
      </main>
    );
  }
  componentDidMount = () => {
    this.fetchArticle();
  };
  fetchArticle = () => {
    api
      .getArticle(this.props.article_id)
      .then(article => {
        this.setState({
          article
        });
      })
      .catch(error => {
        navigate("/error", { replace: true });
      });
  };
}
export default Article;
