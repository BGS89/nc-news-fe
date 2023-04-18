import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import ArticleList from "../components/ArticleList";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        return <p>{error.message}</p>;
      });
  }, []);

  if (isLoading) return <p>Loading articles...</p>;
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
      <ArticleList articles={articles} />
    </main>
  );
}

export default Articles;
