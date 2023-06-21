import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Topic from "./components/Topic";
import { Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route path="/articles" element={<Topic />} />
      </Routes>
    </div>
  );
}

export default App;
