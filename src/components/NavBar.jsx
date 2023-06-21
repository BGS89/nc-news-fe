import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Form, Button, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TopicSearch() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = (topic) => {
    navigate(`/articles?topic=${topic}`);
    setShowOffcanvas(false); // Close the offcanvas when an option is clicked
  };

  const handleHomeClick = () => {
    navigate("/");
    setShowOffcanvas(false); // Close the offcanvas when the Home button is clicked
  };

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowOffcanvas(true)} // Open the offcanvas when the toggle button is clicked
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form inline>
              <Button
                variant="outline-success"
                onClick={() => handleOptionClick("cooking")}
                className="d-none d-lg-block" // Hide the button on small screens
              >
                Cooking
              </Button>
              <Button
                variant="outline-success"
                onClick={() => handleOptionClick("coding")}
                className="d-none d-lg-block" // Hide the button on small screens
              >
                Coding
              </Button>
              <Button
                variant="outline-success"
                onClick={() => handleOptionClick("football")}
                className="d-none d-lg-block" // Hide the button on small screens
              >
                Football
              </Button>
              <Button
                variant="outline-primary"
                onClick={handleHomeClick}
                className="d-none d-lg-block" // Hide the button on small screens
              >
                Home
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end" // Set the offcanvas placement to "end" for right-side entry
        style={{ width: "50%" }} // Customize the width of the offcanvas
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Button
              variant="outline"
              onClick={handleHomeClick}
              className="d-block d-lg-none mb-2"
            >
              Home
            </Button>
            <Button
              variant="outline"
              onClick={() => handleOptionClick("cooking")}
              className="d-block d-lg-none mb-2" // Hide the button on larger screens
            >
              Cooking
            </Button>
            <Button
              variant="outline"
              onClick={() => handleOptionClick("coding")}
              className="d-block d-lg-none mb-2" // Hide the button on larger screens
            >
              Coding
            </Button>
            <Button
              variant="outline"
              onClick={() => handleOptionClick("football")}
              className="d-block d-lg-none mb-2" // Hide the button on larger screens
            >
              Football
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default TopicSearch;
