import React, { Component } from "react";
import * as api from "../api";
import "../App.css";
//import thumpsUP from "../image/thumpsUP.jpeg";

class Voter extends Component {
  state = {
    voteMod: 0
  };

  render() {
    const vote = this.props.vote;
    const { voteMod } = this.state;
    return (
      <div className="vote">
        <p>Votes: {vote + this.state.voteMod}</p>
        <button onClick={() => this.changeVote("up")} disabled={voteMod === 1}>
          UP
        </button>
        <button
          onClick={() => {
            this.changeVote("down");
          }}
          disabled={voteMod === -1}
        >
          DOWN
        </button>
      </div>
    );
  }

  changeVote = direction => {
    api.vote(this.props.id, direction);
    this.setState(state => ({
      voteMod: direction === "up" ? state.voteMod + 1 : state.voteMod - 1
    }));
  };
}
export default Voter;
