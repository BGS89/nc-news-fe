import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Articles from "./Articles";
import SingleArticle from "./SingleArticle";
import Topic from "./Topic";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route path="/articles" element={<Topic />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
