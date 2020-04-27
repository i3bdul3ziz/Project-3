import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import '../../index.css'

const Nave = (props) => {
    return (
      <div>
        <Navbar className="color-nav" variant="light" sticky="top">
          <Nav className="mr-auto">
            <Navbar.Brand >! Waste</Navbar.Brand>
            <Nav.Link as={Link} to="/items">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Contact
            </Nav.Link>
          </Nav>
          <Nav> {!props.user ?
           <>
            <Nav.Link as={Link} to="/signin">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
            </>:<> <Nav.Link as={Link} to= {`/profile/${props.user._id}`}>
              {props.user.name}
            </Nav.Link>
            <Nav.Link as={Link} to={'/logout'} onClick={props.logOut}>
              Log out
            </Nav.Link>
            </>}
          </Nav>
        </Navbar>
      </div>
    );
}

export default Nave