import { Link } from "react-router-dom";
import TopicSearch from "./TopicSearch";
import "../component styling/navbar.css";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <TopicSearch />
    </nav>
  );
}

export default NavBar;
