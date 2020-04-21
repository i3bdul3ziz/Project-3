import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './Component/home/Home.jsx';
import {Switch , Route} from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";
import Nave from './Component/navbar/Nav.jsx';
import { SingUp } from './Component/user/Signup.jsx';
import { Signin } from './Component/user/Signin.jsx';
import { CreateItem } from './Component/home/CreateItem';
import Item, { item } from './Component/item/Item';
import jwt_decode from 'jwt-decode'

export default class App extends Component {

  state = {
    user : null , 
    isLogin : false
  }
  
  componentDidMount (){
  
    this.userLogin()
    
  }
  
  
  
  userLogin = () =>{
  
    if (localStorage.token){
      let token = localStorage.token
      let user = jwt_decode(token , "SECRET").user
      this.setState({
        user : user , 
        isLogin:true
      })
      }else {
  
        this.setState({
          user : null , 
          isLogin:false
        })
      }
  
  }
    render() {
  console.log(this.state.user)
  
  
  
    return (
    <div>
      <Nave isLogin ={this.state.isLogin} userLogin = {this.userLogin}/>
      
      <Switch>
        <Route exact path="/home" render={()=> <Home />} />
        <Route exact path="/home/create" component={CreateItem}/>
        <Route path= '/signin' render ={ (props) => <Signin  {...props} userLogin = {this.userLogin}/>} />
        <Route path= '/signup' component ={SingUp} />
        <Route path= '/home/:id' component ={Item} />
      </Switch>

      <Navbar className="mt-5" fixed="bottom" bg="dark" variant="light" sticky="bottom">
        <Nav >
        copyrights
        </Nav>
        </Navbar>
    </div>
    )
  }
}
