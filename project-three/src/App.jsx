import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './home/Home.jsx';
import {Switch , Route} from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";
import Nave from './navbar/Nav.jsx';

function App() {
  return (
    <div>
      <Nave />
      
      <Switch>
        <Route path="/home" render={()=> <Home />} />
      </Switch>

      <Navbar className="mt-5" bg="dark" variant="light" sticky="bottom">
        <Nav >
        copyrights
        </Nav>
        </Navbar>
    </div>
  )
}

export default App;
