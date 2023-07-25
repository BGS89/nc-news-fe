import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navigation() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOptionClick = (topic) => {
    navigate(`/articles?topic=${topic}`);
    setShowOffcanvas(false);
  };

  const handleHomeClick = () => {
    navigate("/");
    setShowOffcanvas(false);
  };

  const renderButtons = () => {
    return (
      <>
        <Button variant="outline" onClick={handleHomeClick}>
          Home
        </Button>
        <Button variant="outline" onClick={() => handleOptionClick("cooking")}>
          Cooking
        </Button>
        <Button variant="outline" onClick={() => handleOptionClick("coding")}>
          Coding
        </Button>
        <Button variant="outline" onClick={() => handleOptionClick("football")}>
          Football
        </Button>
      </>
    );
  };

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowOffcanvas(!showOffcanvas)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">{isMobileView ? null : renderButtons()}</Nav>
        </Navbar.Collapse>
      </Navbar>
      {isMobileView && (
        <Offcanvas
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
          placement="end"
          style={{ width: "50%" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">{renderButtons()}</Nav>{" "}
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
}

export default Navigation;
