function CommentCard({ comment }) {
  return (
    <li key={comment.comment_id}>
      <h4>{comment.author}</h4>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </li>
  );
}

export default CommentCard;
