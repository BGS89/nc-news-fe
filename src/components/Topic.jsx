import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../api";
import TopicArticleList from "./TopicArticleList";

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
        return <p>{error.message}</p>;
      });
  }, [topicQuery]);

  if (isLoading) return <p>Loading articles...</p>;
  return (
    <main>
      <h1>Topic: {topicQuery}</h1>
      <TopicArticleList articlesByTopic={articlesByTopic} />
    </main>
  );
}

export default Topic;
