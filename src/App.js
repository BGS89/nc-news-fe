import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import { Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
      </Routes>
    </div>
  );
}

export default App;
