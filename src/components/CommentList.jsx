import { useEffect, useState } from "react";
import { fetchArticleComments } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

function CommentList() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleComments(article_id)
      .then((articleCommentsFromApi) => {
        setComments(articleCommentsFromApi);
        setIsLoading(false);
      })
      .catch((error) => {
        return <p>{error.message}</p>;
      });
  }, [article_id]);

  if (isLoading) return <p>Loading comments...</p>;
  if (comments.length < 1) return <p>No comments. Be the first to post!</p>;

  return (
    <section>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
}

export default CommentList;
