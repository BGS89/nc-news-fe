import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import ArticleList from "../components/ArticleList";
import Loading from "./Loading";

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

  if (isLoading)
    return (
      <div>
        <Loading />
        <p>Loading articles...</p>
      </div>
    );

  return (
    <main>
      <ArticleList articles={articles} />
    </main>
  );
}

export default Articles;
