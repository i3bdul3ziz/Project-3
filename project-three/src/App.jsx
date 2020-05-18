import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import AllItems from './Component/item/AllItems.jsx';
import Home from './Component/home/Home.jsx'
import {Switch , Route, Redirect, withRouter} from 'react-router-dom'
import Nave from './Component/navbar/Nav.jsx';
import { SingUp } from './Component/user/Signup.jsx';
import { Signin } from './Component/user/Signin.jsx';
import  Profile  from './Component/user/Profile';
import CreateItem from './Component/item/CreateItem.jsx';
import jwt_decode from 'jwt-decode'
import Item from './Component/item/Item.jsx';



class App extends Component {
  constructor(props){
    super(props);
  }
  state = {
    user : null , 
    isLogin : false,
    loading: false,
  }
  
  componentDidMount (){
    this.setState({
      loading: true
    });
    this.userLogin()
    
  }

  logoutHandler = (e) => {
    e.preventDefault();
    //delete tokem and reset state
    localStorage.removeItem("token");
    this.setState({
      user : null , 
      isLogin : false,
      loading: true,
    });
    this.props.history.push("/")
  };
  
  
  
  userLogin = () =>{
    if (localStorage.token){
      let token = localStorage.token
      let user = jwt_decode(token , "SECRET").user
      this.setState({
        user : user , 
        isLogin:true,
        loading: true,
      })
       }else {
        this.setState({
          user : null , 
          isLogin:false,
          loading: true,
        })
       }
  }
    render() {
      console.log(this.state.isLogin)
    return (
    <div>
      <Nave user={this.state.user} isLogin ={this.state.isLogin} userLogin = {this.userLogin} logOut={this.logoutHandler}/>
      
      <Switch>
        {this.state.loading ? <>
          <Route exact path="/" render={(props)=> <Home {...props} isLogin ={this.state.isLogin}/>} />
          <Route exact path="/items" render={(props)=> <AllItems {...props} isLogin ={this.state.isLogin}/>} />
          <Route path= '/signin' render ={ (props) => <Signin  {...props} userLogin = {this.userLogin}/>} />
          <Route path= '/signup' component ={SingUp} />
          {this.state.isLogin ? <>
          <Route exact path="/items/create" component ={CreateItem} /> 
          <Route exact path='/item/:id' component={Item} /> 
          <Route path="/profile/:id" component={Profile}/></> 
          :
          <Redirect to="/signin" />
          }
          }
          </>
          :
          <h1>LOADING...</h1>
        }
          

      </Switch>

      <footer id="footer" > © 2020 , Made with <span>&#128420;</span> by Venus Team .</footer>
    </div>
    )
  }
}

export default withRouter(App)