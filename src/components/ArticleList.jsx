import ArticleCard from "./ArticleCard";

function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </ul>
  );
}

export default ArticleList;
