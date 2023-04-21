import { Link } from "react-router-dom";
import TopicSearch from "./TopicSearch";
import "../component styling/navbar.css";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <button>Users</button>
      <TopicSearch />
    </nav>
  );
}

export default NavBar;
