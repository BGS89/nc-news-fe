import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../api";
import TopicArticleList from "./TopicArticleList";
import Loading from "./Loading";

function Topic() {
  const [searchParams] = useSearchParams();
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [coverImagePath, setCoverImagePath] = useState("");

  const topicQuery = searchParams.get("topic");

  useEffect(() => {
    setCoverImagePath(() => {
      switch (topicQuery) {
        case "cooking":
          return "../assets/cooking.jpg";
        case "coding":
          return "../assets/coding.jpg";
        case "football":
          return "../assets/football.jpg";
        default:
          return "";
      }
    });
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
      <img src={coverImagePath} className="coverimage"></img>
      <h1>Topic: {topicQuery}</h1>
      <TopicArticleList articlesByTopic={articlesByTopic} />
    </main>
  );
}

export default Topic;
