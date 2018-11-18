import React from "react";
import { Component } from "react";
import { Link, navigate } from "@reach/router";
import * as api from "../api";
import "../image.css";
import coding from "../image/coding.jpeg";
import cooking from "../image/cooking.jpeg";
import football from "../image/football.jpeg";
class Topics extends Component {
  state = {
    topics: []
  };
  render() {
    const image = {
      coding: coding,
      football: football,
      cooking: cooking
    };
    let topics = this.state.topics;
    return (
      <div>
        {topics.map(topic => {
          return (
            <div key={topic._id} className="nav">
              <Link to={`/topics/${topic.slug}`} className="button">
                <img
                  src={
                    image[`${topic.slug}`] ||
                    "http://tccl.libnet.info/images/events/tccl/Movie_night.jpg"
                  }
                  alt={topic.title}
                  className="img"
                  height="300"
                  width="300"
                />
                {/* {topic.title} */}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    this.fetchTopics();
  }
  fetchTopics = () => {
    api
      .getTopics()
      .then(topicsData => {
        this.setState({
          topics: topicsData
        });
      })
      .catch(error => {
        navigate("/error", { replace: true });
      });
  };
}
export default Topics;
