import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import AllItems from './Component/item/AllItems.jsx';
import Home from './Component/home/Home.jsx'
import {Switch , Route, Redirect} from 'react-router-dom'
import Nave from './Component/navbar/Nav.jsx';
import { SingUp } from './Component/user/Signup.jsx';
import { Signin } from './Component/user/Signin.jsx';
import  Profile  from './Component/user/Profile';
import { CreateItem } from './Component/item/CreateItem';
import About from './Component/home/About';
import jwt_decode from 'jwt-decode'
import { decode } from "jsonwebtoken";
import Item from './Component/item/Item';



export default class App extends Component {

  state = {
    user : null , 
    isLogin : false,
    loading: false
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
      isLogin : false,
    });
  };
  
  
  
  userLogin = () =>{
    if (localStorage.token){
      let token = localStorage.token
      let user = jwt_decode(token , "SECRET").user
      this.setState({
        user : user , 
        isLogin:true,
        loading: true
      })
       } //else {
  
      //   this.setState({
      //     user : null , 
      //     isLogin:false
      //   })
      //  }
  }
    render() {
      console.log(this.state.loading)
    return (
    <div>
      <Nave user={this.state.user} isLogin ={this.state.isLogin} userLogin = {this.userLogin} logOut={this.logoutHandler}/>
      
      <Switch>
        {this.state.loading && <>

          <Route exact path="/" render={(props)=> <Home {...props} isLogin ={this.state.isLogin}/>} />
          <Route exact path="/items" render={(props)=> <AllItems {...props} isLogin ={this.state.isLogin}/>} />
          <Route path="/about" component={About}/>
          <Route path= '/signin' render ={ (props) => <Signin  {...props} userLogin = {this.userLogin}/>} />
          <Route path= '/signup' component ={SingUp} />
          {this.state.isLogin ?<>  
          <Route exact path="/items/create" render={(props)=> <CreateItem {...props} user ={this.state.user} />} /> 
          <Route path="/profile/:id" component={Profile}/>
          <Route path='/items/:id' component ={Item} /> </> 
          :<>
          <Redirect to="/signin" /> </>
          }

          </>
        }
      </Switch>

      <footer id="footer" > © 2020 , Made with <span>&#128420;</span> by Venus Team .</footer>
    </div>
    )
  }
}
