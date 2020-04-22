import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './Component/home/Home.jsx';
import {Switch , Route, Redirect} from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";
import Nave from './Component/navbar/Nav.jsx';
import { SingUp } from './Component/user/Signup.jsx';
import { Signin } from './Component/user/Signin.jsx';
import  Profile  from './Component/user/Profile';
import { CreateItem } from './Component/home/CreateItem';
import About from './Component/home/About';
import jwt_decode from 'jwt-decode'
import Item from './Component/item/Item';
// import storage from "./firebase/firebase"


export default class App extends Component {

  state = {
    user : null , 
    isLogin : false
  }
  
  componentDidMount (){
  
    this.userLogin()
    
  }

  logoutHandler = (e) => {
    e.preventDefault();
    //delete tokem and reset state
    localStorage.removeItem("token");
    this.setState({
      user : null , 
      isLogin : false
    });
  };
  
  
  
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
      <Nave user={this.state.user} isLogin ={this.state.isLogin} userLogin = {this.userLogin} logOut={this.logoutHandler}/>
      
      <Switch>
        <Route exact path="/items" render={(props)=> <Home {...props} isLogin ={this.state.isLogin}/>} />
        <Route path="/about" component={About}/>
        <Route exact path="/home/create" component={CreateItem}/>
        <Route path="/profile/:id" component={Profile}/>
        <Route path= '/signin' render ={ (props) => <Signin  {...props} userLogin = {this.userLogin}/>} />
        <Route path= '/signup' component ={SingUp} />
        {this.state.isLogin ?<>  
        <Route exact path="/items/create" render={(props)=> <CreateItem {...props} user ={this.state.user} />} /> 
        <Route path="/profile/:id" component={Profile}/>
        <Route path='/items/:id' component ={Item} /> </> 
        :<>
        <Redirect to="/signin" /> </>
      }
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
