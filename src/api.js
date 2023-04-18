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

export { fetchArticles, fetchArticleById };
