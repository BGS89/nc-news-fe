import { useEffect, useState } from "react";
import { fetchArticleById, patchArticleVotes } from "../api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import { motion } from "framer-motion";

function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [localVote, setLocalVote] = useState(0);
  const [disableUpVote, setDisableUpVote] = useState(false);
  const [disableDownVote, setDisableDownVote] = useState(false);
  const [error, setError] = useState(false);
  const { article_id } = useParams();

  const handleVote = (voteType) => {
    voteType === "up" ? setDisableUpVote(true) : setDisableDownVote(true);
    setLocalVote((currentVote) => {
      return voteType === "up" ? currentVote + 1 : currentVote - 1;
    });
    patchArticleVotes(article_id, voteType).catch(() => {
      setLocalVote((currentVote) => {
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
        window.scrollTo(0, 400);
      })
      .catch((error) => {
        return <p>{error.message}</p>;
      });
  }, [article_id]);

  if (isLoading) {
    return (
      <div className="loading">
        {/* <Loading /> */}
        <p>Loading article....</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, duration: 1 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <main className="singleArticle">
        <section>
          <h2 className="article-header">{article.title}</h2>
          <div className="article-section">
            <img src={article.article_img_url} alt="single article"></img>
            <h3>Author: {article.author}</h3>
            <p className="article-body">{article.body}</p>
          </div>
          <div className="votes">
            <button
              disabled={disableDownVote}
              onClick={() => {
                handleVote("down");
              }}
            >
              <i className="fa-solid fa-thumbs-down"></i>
            </button>{" "}
            {article.votes + localVote}{" "}
            <button
              disabled={disableUpVote}
              onClick={() => {
                handleVote("up");
              }}
            >
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
          </div>
          {error ? errorMessage() : null}
        </section>

        <section className="comments">
          <CommentList />
        </section>
      </main>
    </motion.div>
  );
}

export default SingleArticle;
