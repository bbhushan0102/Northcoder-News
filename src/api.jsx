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

export const postArticle = async topic => {
  const { data } = await axios.post(`${BASE_URL}/topics/${topic}/articles`);

  return data;
};
export const getArticle = article_id => {
  return axios
    .get(`${BASE_URL}/articles/${article_id}`)
    .then(({ data }) => data.article);
};
export const vote = (id, direction) => {
  return axios
    .patch(`${BASE_URL}/articles/${id}?vote=${direction}`)
    .then(() => console.log("voted!"));
};
export const getComments = article_id => {
  return axios
    .get(`${BASE_URL}/articles/${article_id}/comments`)
    .then(({ data }) => data.comments);
};
export const postComment = (id, body, created_by) => {
  return axios
    .post(`${BASE_URL}/articles/${id}/comments`, { body, created_by })
    .then(({ data }) => data.comment);
};
export const getUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);

  return data.users;
};
export const voteComment = (id, direction) => {
  return axios
    .patch(`${BASE_URL}/comments/${id}?vote=${direction}`)
    .then(() => console.log("voted!"));
};

export const deleteCommentById = id => {
  return axios.delete(`${BASE_URL}/comments/${id}`).then(({ data }) => {
    return data;
  });
};
export const getUser = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  console.log(username);
  return data.user;
};
