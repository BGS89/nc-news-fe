import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-npk0.onrender.com/api",
});

const fetchArticles = () => {
  return ncNewsApi.get("/articles").then((response) => {
    return response.data.articles;
  });
};

const fetchArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((respose) => {
    return respose.data.article;
  });
};

const fetchArticleComments = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

const patchArticleVotes = (article_id, voteType) => {
  const voteChange = voteType === "up" ? 1 : -1;
  return ncNewsApi
    .patch(`/articles/${article_id}`, {
      inc_votes: voteChange,
    })
    .then((response) => {
      return response.data;
    });
};

const postArticleComment = (article_id, newComment) => {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then((response) => {
      return response.data;
    });
};

export {
  fetchArticles,
  fetchArticleById,
  fetchArticleComments,
  patchArticleVotes,
  postArticleComment,
};
