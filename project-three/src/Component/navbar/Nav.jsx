import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import '../../index.css'

const Nave = (props) => {
    return (
      <div>
        <Navbar className="color-nav" sticky="top">
          <Nav className="mr-auto">
            <Navbar.Brand className="color-nav" >! Waste</Navbar.Brand>
            <Nav.Link className="color-nav" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="color-nav" as={Link} to="/items">
              All Items
            </Nav.Link>
            <Nav.Link className="color-nav" as={Link} to="/about">
              Contact
            </Nav.Link>
          </Nav>
          <Nav> {!props.user ?
           <>
            <Nav.Link className="color-nav" as={Link} to="/signin">
              Login
            </Nav.Link>
            <Nav.Link className="color-nav" as={Link} to="/signup">
              Signup
            </Nav.Link>
            </>:<> <Nav.Link className="color-nav" as={Link} to= {`/profile/${props.user._id}`}>
              {props.user.name}
            </Nav.Link>
            <Nav.Link className="color-nav" as={Link} to={'/logout'} onClick={props.logOut}>
              Log out
            </Nav.Link>
            </>}
          </Nav>
        </Navbar>
      </div>
    );
}

export default Nave