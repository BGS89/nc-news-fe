import ArticleCard from "./ArticleCard";

function TopicArticleList({ articlesByTopic }) {
  return (
    <ul className="articleList">
      {articlesByTopic.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
}

export default TopicArticleList;
