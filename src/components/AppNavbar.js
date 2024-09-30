import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useContext, useState } from "react";
import UserContext from "../UserContext";

export default function AppNavbar({ isSidebarOpen, isLoggedIn }) {
  const { user } = useContext(UserContext);
  const [expanded, setExpanded] = useState(false);

  if (user.id !== null) {
    isLoggedIn = true;
  }

  return (
    <>
      {/* Navbar for not authenticated users */}
      <Navbar
        expand="lg"
        expanded={expanded}
        className={isLoggedIn ? "nav-content shifted" : "navbar-bg"} // Conditionally apply 'navbar-bg' class
        // Hide when logged in, use default display otherwise
      >
        {!isLoggedIn ? (
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
        ) : (
          <div>
            <h1 className="h1-authencated">Home</h1>
          </div>
        )}

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {!isLoggedIn ? (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/about"
                  onClick={() => setExpanded(false)}
                >
                  <h5 className="font-white">About Us</h5>
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/find-care"
                  onClick={() => setExpanded(false)}
                >
                  <h5 className="font-white">Find Care</h5>
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/services"
                  onClick={() => setExpanded(false)}
                >
                  <h5 className="font-white">Services</h5>
                </Nav.Link>

                <Nav.Link
                  as={NavLink}
                  to="/login"
                  onClick={() => setExpanded(false)}
                >
                  <h5 className="font-white">Sign In</h5>
                </Nav.Link>
              </>
            ) : (
              <div className="ml-5 mt-2 d-flex navbar-authenticated">
                <div className="search-icon ml-auto mr-4">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                  />
                </div>

                <div>
                  <span className="material-symbols-outlined side-menu-color icon-size mr-2">
                    notifications
                  </span>
                </div>

                <div>
                  <span className="material-symbols-outlined side-menu-color icon-size mr-5">
                    account_circle
                  </span>
                </div>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
