import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";



export default function AppNavbar({ isSidebarOpen }) {
    return (
        <>
           {/* <Navbar expand="lg" expanded={expanded}>

                <Navbar.Brand as={Link} to="/">
                    <div className="d-flex align-items-center">
                        <img src="./wecare_logo.png" alt="We Care" width="100px" height="auto" />
                        <h1 className='font-weight-bold font-white'>WeCare</h1>
                    </div>
                </Navbar.Brand>

                
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                />
                
                <Navbar.Collapse id="basic-navbar-nav gap-3">
                    <Nav className="ml-auto">
                        <Nav.Link as={NavLink} to="/about" className="px-3 mx-3" onClick={() => setExpanded(false)}>
                            <h5 className="font-white">About Us</h5>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/find-care" className="px-3 mx-3" onClick={() => setExpanded(false)}>
                            <h5 className="font-white">Find Care</h5>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/services" className="px-3 mr-4" onClick={() => setExpanded(false)}>
                            <h5 className="font-white">Services</h5>
                        </Nav.Link>

                        
                        <Nav.Link as={NavLink} to="/sign-in" className="px-3 btn-sign-in px-5 mr-5" onClick={() => setExpanded(false)}>
                            <h5 className="font-white">Sign In</h5>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}


        <div className='ml-5 mt-2 d-flex'>
            <div className=''>
                <h1 className='h1-authencated'>Home</h1>
            </div>
            
            <div className="search-icon ml-auto mr-4">
                <input type="text" className="search-input" placeholder="Search" />
            </div>
            <div >
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
        </>
    );

}







