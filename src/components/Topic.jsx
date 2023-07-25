import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../api";
import TopicArticleList from "./TopicArticleList";
import { motion } from "framer-motion";

function Topic() {
  const [searchParams] = useSearchParams();
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const topicQuery = searchParams.get("topic");

  useEffect(() => {
    fetchArticlesByTopic(topicQuery)
      .then((articlesByTopicFromApi) => {
        setArticlesByTopic(articlesByTopicFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [topicQuery]);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main>
      <motion.div
        key={topicQuery}
        initial={{ opacity: 0, x: "-100%" }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5, duration: 1 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <section className="page-description">
          <h1>{topicQuery}</h1>
        </section>

        <TopicArticleList articlesByTopic={articlesByTopic} />
      </motion.div>
    </main>
  );
}

export default Topic;
