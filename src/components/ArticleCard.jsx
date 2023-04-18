import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <li key={article.article_id}>
        <h3>{article.title}</h3>
        <img src={article.article_img_url} alt="article"></img>
        <h4>Author: {article.author}</h4>
        <p>Votes: {article.votes}</p>
        <p>Comment Count: {article.comment_count}</p>
      </li>
    </Link>
  );
}

export default ArticleCard;
