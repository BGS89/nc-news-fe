import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../api";
import TopicArticleList from "./TopicArticleList";
import Loading from "./Loading";

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

  if (isLoading)
    return (
      <div className="loading">
        <Loading />
        <p>Loading articles...</p>
      </div>
    );

  return (
    <main>
      <section className="page-description">
        <h1>{topicQuery}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam non
          tenetur praesentium voluptate facere fugiat, aut consequatur rerum,
          magnam nostrum facilis aliquid illum ratione doloremque iste.
        </p>
      </section>

      <TopicArticleList articlesByTopic={articlesByTopic} />
    </main>
  );
}

export default Topic;
