import { useEffect, useState } from "react";
import { fetchArticleById } from "../api";
import { useParams } from "react-router-dom";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id)
      .then((singleArticleFromApi) => {
        setArticle(singleArticleFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        return <p>{error.message}</p>;
      });
  }, [article_id]);

  if (isLoading) return <p>Loading article....</p>;
  return (
    <main>
      <section>
        <h2>{article.title}</h2>
        <h3>Author: {article.author}</h3>
        <img src={article.article_img_url}></img>
        <p>{article.body}</p>
      </section>
      <section>
        <form>Post Comment Form</form>
      </section>
      <section>
        <ul>
          <li>Comment</li>
          <li>Comment</li>
          <li>Comment</li>
        </ul>
      </section>
    </main>
  );
}

export default SingleArticle;
