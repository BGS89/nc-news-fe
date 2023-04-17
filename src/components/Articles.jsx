import { useEffect, useState } from "react";
import fetchArticles from "../api";

function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <main>
      <h2>Articles</h2>
      <form action="">
        <label htmlFor="sort">Sort By </label>
        <select id="sort">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </select>
      </form>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <h3>{article.title}</h3>
              <img src={article.article_img_url} alt="article"></img>
              <h4>Author: {article.author}</h4>
              <p>{article.body}</p>
              <p>Votes: {article.votes}</p>
              <p>Comment Count: {article.comment_count}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Articles;
