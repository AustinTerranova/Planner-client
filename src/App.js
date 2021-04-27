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
      password: "",
      dialogBox: false,
      authenticated: false
    }


    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClickClose = this.handleClickClose.bind(this)
    this.handleAuthentication = this.handleAuthentication(this)
    
  }


  
  handleUsername = (username) => {
    this.setState({username: username})
  }

  handlePassword = (password) => {
    this.setState({password: password})
  }
  handleClickOpen = (openDialog) => {     //openDialogue is a boolean
    this.setState({dialogBox: openDialog})
  }
  handleClickClose = (closeDialog) => {      //closeDialogue is a boolean
    this.setState({dialogBox: closeDialog})
  }
  handleAuthentication = (auth) => {
    this.setState({authenticated: auth})
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
              handleAuthentication = {this.handleAuthentication}
              handlePassword={this.handlePassword} 
              handleUsername={this.handleUsername} 
            />
          </Route>
          <Route exact path ='/user/todo'>
            <ToDo 
              open={this.state.dialogBox}
              handleClickOpen={this.handleClickOpen}
              handleClickClose={this.handleClickClose}
            />
          </Route>
          <Route exact path = '/user/signup'>
            <SignUp
              handleAuthentication = {this.handleAuthentication} 
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
