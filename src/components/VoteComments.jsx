import React, { Component } from "react";
import * as api from "../api";
class VoteComments extends Component {
  state = {
    voteMod: 0
  };
  render() {
    const vote = this.props.vote;
    const { voteMod } = this.state;
    return (
      <div>
        <p>
          Vote:
          {vote + this.state.voteMod}
        </p>
        <button onClick={() => this.changeVote("up")} disabled={voteMod === 1}>
          up
        </button>
        <button
          onClick={() => {
            this.changeVote("down");
          }}
          disabled={voteMod === -1}
        >
          {" "}
          down
        </button>
      </div>
    );
  }
  changeVote = direction => {
    api.voteComment(this.props.id, direction);
    this.setState(state => ({
      voteMod: direction === "up" ? state.voteMod + 1 : state.voteMod - 1
    }));
  };
}
export default VoteComments;
