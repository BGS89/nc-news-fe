import axios from "axios";

const fetchArticles = () => {
  return axios
    .get("https://nc-news-npk0.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
};

const fetchArticleById = (article_id) => {
  return axios
    .get(`https://nc-news-npk0.onrender.com/api/articles/${article_id}`)
    .then((respose) => {
      return respose.data.article;
    });
};

const fetchArticleComments = (article_id) => {
  return axios
    .get(
      `https://nc-news-npk0.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      return response.data.comments;
    });
};

const patchArticleVotes = (article_id, voteType) => {
  const voteChange = voteType === "up" ? 1 : -1;
  return axios
    .patch(`https://nc-news-npk0.onrender.com/api/articles/${article_id}`, {
      inc_votes: voteChange,
    })
    .then((response) => {
      return response.data;
    });
};

export {
  fetchArticles,
  fetchArticleById,
  fetchArticleComments,
  patchArticleVotes,
};
