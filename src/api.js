import axios from "axios";

const fetchArticles = () => {
  return axios
    .get("https://nc-news-npk0.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default fetchArticles;
