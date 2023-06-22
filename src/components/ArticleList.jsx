import ArticleCard from "./ArticleCard";

function ArticleList({ articles }) {
  return (
    <section>
      <div id="cover">
        {/* <img src="../assets/news.jpg" alt="" className="coverimage" /> */}
      </div>
      <ul className="articleList">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </section>
  );
}

export default ArticleList;
