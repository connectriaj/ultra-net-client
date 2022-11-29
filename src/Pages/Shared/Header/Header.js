import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link className="text-decoration-none" to="/">
            <Navbar.Brand className="fw-bold fs-2">
              ultra<span className="text-primary">Net</span>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="text-decoration-none fw-bold me-4" to="/">
                Home
              </Link>
              <Link
                className="text-decoration-none fw-bold me-4"
                to="/services"
              >
                Services
              </Link>
              <Link className="text-decoration-none fw-bold me-4" to="/blog">
                Blog
              </Link>
              <Link className="text-decoration-none fw-bold me-4" to="/about">
                About Us
              </Link>
            </Nav>
            <Nav className="me-auto">
              <Link className="text-decoration-none fw-bold me-4" to="/login">
                Login
              </Link>
              <Link className="text-decoration-none fw-bold me-4" to="/signup">
                Sign Up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
