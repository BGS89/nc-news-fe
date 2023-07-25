import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import ArticleList from "../components/ArticleList";
import { motion } from "framer-motion";

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
        console.log(error);
      });
  }, []);

  if (isLoading)
    return (
      <div>
        <p>Loading articles...</p>
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, duration: 1 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <main>
        <ArticleList articles={articles} />
      </main>
    </motion.div>
  );
}

export default Articles;
