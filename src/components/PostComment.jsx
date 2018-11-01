import React, { Component } from "react";
class PostComment extends Component {
  state = {
    body: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="comment" type="text" onChange={this.handleChange} />
        <button>Post Comment</button>
      </form>
    );
  }
  handleSubmit = event => {
    event.preventDefault();

    this.props.addComment(this.state.body);
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState({
      body: value
    });
  };
}
export default PostComment;
