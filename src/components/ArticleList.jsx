import "../component styling/articleList.css";
import ArticleCard from "./ArticleCard";

function ArticleList({ articles }) {
  return (
    <ul className="articleList">
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </ul>
  );
}

export default ArticleList;
