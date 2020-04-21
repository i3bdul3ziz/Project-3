import React, { Component } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom"
import '../../index.css'
import logo from '../../logo.png'

const Nave = (props) => {
  console.log(props.user)
    return (
      <div>
        <Navbar className="color-nav" variant="light" sticky="top">
          <Nav className="mr-auto">
            <Image width={120} height={100} src={logo}/>
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
           <Nav> {!props.user  ?
           <>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
            </>:<Nav.Link as={Link} to= {`/profile/${props.user._id}`}>
              Profile
            </Nav.Link>}
          </Nav>
        </Navbar>
      </div>
    );
}

export default Nave