import React, {Component, Profiler} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './Component/home/Home.jsx';
import {Switch , Route} from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";
import Nave from './Component/navbar/Nav.jsx';
import { SingUp } from './Component/user/Signup.jsx';
import { Signin } from './Component/user/Signin.jsx';
import  Profile  from './Component/user/Profile';
import { CreateItem } from './Component/home/CreateItem';
import jwt_decode from 'jwt-decode'
import storage from "./firebase/firebase"

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
      <Nave user={this.state.user} isLogin ={this.state.isLogin} userLogin = {this.userLogin}/>
      
      <Switch>
        <Route exact path="/home" render={()=> <Home />} />
        <Route path="/home/create" component={CreateItem}/>
        <Route path="/profile/:id" component={Profile}/>
        <Route path= '/signin' render ={ (props) => <Signin  {...props} userLogin = {this.userLogin}/>} />
        <Route path= '/signup' component ={SingUp} />
      </Switch>

      <Navbar className="mt-5" bg="dark" variant="light" sticky="bottom">
        <Nav >
        copyrights
        </Nav>
        </Navbar>
    </div>
    )
  }
}
