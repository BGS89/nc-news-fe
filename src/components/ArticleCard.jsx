import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <li key={article.article_id}>
        <img src={article.article_img_url} alt="article"></img>
        <div id="card-text">
          <h3>{article.title}</h3>
          <p>{article.author}</p>
        </div>
      </li>
    </Link>
  );
}

export default ArticleCard;
