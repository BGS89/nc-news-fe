import { useEffect, useState } from "react";
import { fetchArticleById, patchArticleVotes } from "../api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [localVote, setlocalVote] = useState(0);
  const [disableUpVote, setDisableUpVote] = useState(false);
  const [disableDownVote, setDisableDownVote] = useState(false);
  const [error, setError] = useState(false);
  const { article_id } = useParams();

  const handleVote = (voteType) => {
    voteType === "up" ? setDisableUpVote(true) : setDisableDownVote(true);
    setlocalVote((currentVote) => {
      return voteType === "up" ? currentVote + 1 : currentVote - 1;
    });
    patchArticleVotes(article_id, voteType).catch(() => {
      setlocalVote((currentVote) => {
        return voteType === "up" ? currentVote - 1 : currentVote + 1;
      });
      setError(true);
    });
  };

  const errorMessage = () => {
    return "Vote not registered. Please try again later";
  };

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
    <main className="singleArticle">
      <section>
        <h2>{article.title}</h2>
        <h3>Author: {article.author}</h3>
        <img src={article.article_img_url} alt="single article"></img>
        <p>{article.body}</p>
        <p>
          Votes:{" "}
          <button
            disabled={disableDownVote}
            onClick={() => {
              handleVote("down");
            }}
          >
            -
          </button>{" "}
          {article.votes + localVote}{" "}
          <button
            disabled={disableUpVote}
            onClick={() => {
              handleVote("up");
            }}
          >
            +
          </button>
        </p>
        {error ? errorMessage() : null}
      </section>

      <section>
        <CommentList />
      </section>
    </main>
  );
}

export default SingleArticle;
