import './App.css';
import React from "react";
import {Login} from './components/login-form';
import {SignUp} from './components/sign-up-form';
import axios from "axios";
import {ToDo} from './components/to-do'
import {BrowserRouter as Router,Route} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      switchForm: true,
      username: '',
      password: ""
    }
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    
  }


  
  handleUsername = (username) => {
    this.setState({username: username})
  }

  handlePassword = (password) => {
    this.setState({password: password})
  }

  

  


  render(){
    //if(this.state.switchForm){
      return (
        <Router>
          <Route exact path = '/user/login'>
            <Login 
              username = {this.state.username}
              password = {this.state.password}
              handleForm={this.handleForm} 
              handlePassword={this.handlePassword} 
              handleUsername={this.handleUsername} 
            />
          </Route>
          <Route exact path ='/user/todo'>
            <ToDo/>
          </Route>
          <Route exact path = '/user/signup'>
            <SignUp 
              username = {this.state.username}
              password = {this.state.password}
              handleForm={this.handleForm}
              handlePassword={this.handlePassword} 
              handleUsername={this.handleUsername}
            />
          </Route>
        </Router>
      )

    //}
  }
}

export default App;
