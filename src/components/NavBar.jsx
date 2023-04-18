import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <button>Topics</button>
      <button>Users</button>
    </nav>
  );
}

export default NavBar;
