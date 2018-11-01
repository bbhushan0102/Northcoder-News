import React, { Component } from "react";

import { navigate } from "@reach/router";
// import "./App.css";
import * as api from "../api";
import Comments from "../components/Comments";
class Article extends Component {
  state = {
    article: {},
    loading: true
  };
  render() {
    let article = this.state.article;
    if (this.state.loading) return <h1>Loading....</h1>;

    return (
      <main>
        {" "}
        <div>
          <h1>{article.title}</h1>
        </div>
        <div>{article.body}</div>
        {this.state.article._id && (
          <Comments
            article_id={this.state.article._id}
            user={this.props.user}
          />
        )}
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
          article: article,
          loading: false
        });
      })
      .catch(error => {
        navigate("/error", { replace: true });
      });
  };
}
export default Article;
