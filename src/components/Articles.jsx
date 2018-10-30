import React from "react";
import { Component } from "react";
import { Link, navigate } from "@reach/router";
import * as api from "../api";
import "../image.css";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    console.log(this.state);
    const { articles } = this.state;
    return (
      <main>
        <div>
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
                      User Name:
                      {article.created_by.name}{" "}
                    </div>
                    Create at: {article.created_at}
                    <div>
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
  fetchArticles = () => {
    api.getArticles().then(articlesData => {
      console.log(articlesData);
      this.setState({
        articles: articlesData
      });
    });
  };
}
export default Articles;
