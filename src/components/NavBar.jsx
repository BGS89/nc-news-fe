import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleOptionClick = (topic) => {
    navigate(`/articles?topic=${topic}`);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand href="#">Navbar</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Form inline>
            <Button
              variant="outline-success"
              onClick={() => handleOptionClick("cooking")}
            >
              Cooking
            </Button>
            <Button
              variant="outline-success"
              onClick={() => handleOptionClick("coding")}
            >
              Coding
            </Button>
            <Button
              variant="outline-success"
              onClick={() => handleOptionClick("football")}
            >
              Football
            </Button>
            <Button variant="outline-primary" onClick={handleHomeClick}>
              Home
            </Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
