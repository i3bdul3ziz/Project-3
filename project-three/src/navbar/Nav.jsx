import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import '../index.css'

const Nave = () => {
  
    return (
      <div>
        <Navbar className="color-nav mb-5" variant="light" fixed="top">
          <Nav className="mr-auto">
            <Navbar.Brand>Title</Navbar.Brand>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
}

export default Nave