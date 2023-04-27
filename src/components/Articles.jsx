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
      <ArticleList articles={articles} />
    </main>
  );
}

export default Articles;
