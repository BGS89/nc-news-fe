function ArticleCard({ article }) {
  return (
    <li key={article.article_id}>
      <h3>{article.title}</h3>
      <img src={article.article_img_url} alt="article"></img>
      <h4>Author: {article.author}</h4>
      <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
      <p>Comment Count: {article.comment_count}</p>
    </li>
  );
}

export default ArticleCard;
