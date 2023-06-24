import ArticleCard from "./ArticleCard";

function ArticleList({ articles }) {
  return (
    <main>
      <section className="page-description">
        <h1>Welcome to NC News</h1>
        <p>
          Welcome to NC News, the ultimate platform for engaging discussions and
          thought-provoking articles. Our full stack application is designed to
          emulate the popular Reddit-style experience, allowing users to delve
          into a wide range of topics, read captivating articles, and actively
          participate in the community through comments and reactions. Discover
          diverse perspectives, share your thoughts, and engage in lively
          debates. With the ability to like and dislike articles, you can shape
          the narrative and highlight the most intriguing content. Join our
          vibrant community, explore the vast collection of articles, and let
          your voice be heard on NC News!
        </p>
      </section>
      <ul className="articleList">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </main>
  );
}

export default ArticleList;
