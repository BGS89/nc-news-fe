import { useState } from "react";
import { postArticleComment } from "../api";

function PostComment({ article_id }) {
  const [userName, setUserName] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [posted, setPosted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      username: userName,
      body: commentBody,
    };

    postArticleComment(article_id, newComment).catch((error) => {
      console.log(error.message);
      setError(true);
      setPosted(false);
    });

    setPosted(true);
    setCommentBody("");
    setUserName("");
  };

  const postMessage = () => {
    return "Comment Posted!";
  };

  const errorMessage = () => {
    return "Comment failed to post. Please try again later";
  };

  return (
    <div>
      <form className="commentForm" onSubmit={handleSubmit}>
        <div className="selecter">
          <label htmlFor="userName">Post as: </label> <br></br>
          <select
            id="userName"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            required
          >
            <option value="">Select user...</option>
            <option value="tickle122">tickle122</option>
            <option value="grumpy19">grumpy19</option>
            <option value="happyamy2016">happyamy2016</option>
            <option value="cooljmessy">cooljmessy</option>
            <option value="weegembump">weegembump</option>
            <option value="jessjelly">jessjelly</option>
          </select>
        </div>
        <br></br>
        <textarea
          type="text"
          placeholder="Comment here..."
          value={commentBody}
          onChange={(event) => {
            setCommentBody(event.target.value);
          }}
          required
        ></textarea>{" "}
        <br></br>
        <button>Post Comment</button>
        <br></br>
        {error ? errorMessage() : null}
        {posted ? postMessage() : null}
      </form>
    </div>
  );
}

export default PostComment;
