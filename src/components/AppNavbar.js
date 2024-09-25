import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

export default function AppNavbar() {
  // Optional state to handle collapsed navbar (React useState hook)
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="navbar-bg display-none-smartphone">
      <Navbar expand="lg" expanded={expanded}>
        <Navbar.Brand as={Link} to="/">
          <div className="d-flex align-items-center">
            <img
              src="./wecare_logo.png"
              alt="We Care"
              width="100px"
              height="auto"
            />
            <h1 className="font-weight-bold font-white">WeCare</h1>
          </div>
        </Navbar.Brand>

        {/* This toggle button appears on small screens */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={NavLink}
              to="/about"
              className="px-3"
              onClick={() => setExpanded(false)}
            >
              <h5 className="font-white">About Us</h5>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/find-care"
              className="px-3"
              onClick={() => setExpanded(false)}
            >
              <h5 className="font-white">Find Care</h5>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/services"
              className="px-3"
              onClick={() => setExpanded(false)}
            >
              <h5 className="font-white">Services</h5>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/login"
              className="px-3"
              onClick={() => setExpanded(false)}
            >
              <h5 className="font-white">Sign In</h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
