import { Link } from "react-router-dom";
import TopicSearch from "./TopicSearch";

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
