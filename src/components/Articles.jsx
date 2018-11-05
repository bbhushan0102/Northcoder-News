import React from "react";
import { Component } from "react";
import { Link, navigate } from "@reach/router";
import * as api from "../api";
import "../image.css";

import PostArticle from "./PostArticle";
import Voter from "./Voter";

class Articles extends Component {
  state = {
    articles: []
    // msg: ""
  };
  render() {
    const { articles } = this.state;

    return (
      <main>
        <PostArticle addArticle={this.addArticle} />
        <div className="div">
          {articles &&
            articles.map(article => {
              return (
                <div key={article._id}>
                  <div>
                    <div>
                      <Link to={`/articles/${article._id}`}>
                        <h3>{article.title}</h3>
                      </Link>
                    </div>
                    <div>
                      By:
                      {article.created_by.name}{" "}
                    </div>
                    Create at: {article.created_at}
                    <div>
                      <div>
                        <Voter id={article._id} vote={article.votes} />
                      </div>
                      <h3>
                        {" "}
                        comments:
                        {article.comments}
                      </h3>
                    </div>
                    <div>
                      Title:
                      {article.belongs_to}
                    </div>
                    <div className="text">{article.body}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    this.props.topic
      ? api
          .getArticlesByTopic(this.props.topic)
          .then(articles => {
            this.setState({
              articles
            });
          })
          .catch(error => {
            navigate("/error", { replace: true });
          })
      : api
          .getArticles()
          .then(articlesData => {
            this.setState({
              articles: articlesData
            });
          })
          .catch(error => {
            navigate("/error", { replace: true });
          });
  };
  addArticle = ({ body, title, belongs_to }) => {
    api
      .postArticle(belongs_to, {
        body,
        title,
        created_by: this.props.user._id
      })
      .then(article => {
        this.setState({
          articles: [article, ...this.state.articles]
        });
      });
  };
}
export default Articles;
