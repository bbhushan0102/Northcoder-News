import axios from "axios";
const BASE_URL = "https://northcodernews.herokuapp.com/api";

export const getTopics = () => {
  let path = "/topics";
  return axios.get(`${BASE_URL}${path}`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = () => {
  let path = "/articles";
  return axios.get(`${BASE_URL}${path}`).then(({ data }) => {
    return data.articles;
  });
};
export const getArticlesByTopic = slug => {
  return axios.get(`${BASE_URL}/topics/${slug}/articles`).then(({ data }) => {
    return data.topicArticles;
  });
};