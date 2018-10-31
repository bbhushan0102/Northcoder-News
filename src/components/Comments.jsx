import React, { Component } from "react";
import * as api from "../api";
import "../App.css";
import { navigate } from "@reach/router";
import PostComment from "../components/PostComment";
import VoteComments from "../components/VoteComments";
import Delete from "../components/Delete";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    let comments = this.state.comments;

    return (
      <main>
        <div>
          <h1> Comments</h1>
          <div className="div">
            <PostComment addComment={this.addComment} />
            <p>Post your comment</p>
          </div>
          {comments.map(comment => {
            return (
              <div key={comment._id} className="div">
                <div>{comment.body} </div>
                <div>
                  <VoteComments id={comment._id} vote={comment.votes} />
                </div>
                <div>
                  Created By:
                  {comment.created_by.name}{" "}
                </div>
                <Delete id={comment._id} />
              </div>
            );
          })}
        </div>
      </main>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }
  fetchComments() {
    api
      .getComments(this.props.article_id)
      .then(data => {
        this.setState({
          comments: data
        });
      })
      .catch(error => {
        navigate("/error", { replace: true });
      });
  }
  addComment = body => {
    api
      .postComment(this.props.article_id, body, this.props.user._id)
      .then(comment => {
        this.setState({
          comments: [comment, ...this.state.comments]
        });
      });
    // .catch(error => {
    //   navigate("/error", { replace: true });
    // });
  };
}
export default Comments;
