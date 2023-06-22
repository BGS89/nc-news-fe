import ArticleCard from "./ArticleCard";

function ArticleList({ articles }) {
  return (
    <main>
      <section className="page-description">
        <h1>Welcome to NC News</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam non
          tenetur praesentium voluptate facere fugiat, aut consequatur rerum,
          magnam nostrum facilis aliquid illum ratione doloremque iste. Quam,
          quis temporibus! Eaque! Mollitia et voluptate error, libero ad nisi
          neque ipsam sequi officiis unde rem officia non eos doloribus. Culpa
          doloribus doloremque impedit a! Aut autem voluptatum accusamus veniam,
          aliquam vel cum.
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
