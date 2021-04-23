import './App.css';
import React from "react";
import {Login} from './components/login-form';
import {SignUp} from './components/sign-up-form';
import axios from "axios";

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
    this.handleForm = this.handleForm.bind(this)
  }


  
  handleUsername = (username) => {
    this.setState({username: username})
  }

  handlePassword = (password) => {
    this.setState({password: password})
  }

  handleForm = (signUp) => {
    this.setState({switchForm: signUp})
  }

  componentDidUpdate() {
    if(this.state.switchForm === false){  
    await axios.post('http://localhost:8080/user/signup',{
       username: this.state.username,
       password: this.state.password
     }).then(function (response){
       alert("the response",response.status)
     }).catch(function(err){
         alert(err.response.status)
       
       
     })
    } else {
     await axios.post('http://localhost:8080/user/login',{
        username: this.state.username,
        password: this.state.password
      }).then(function (response){
        alert("the response",response.status)
      }).catch(function(err){
          alert(err.response.status)
        
        
      })

    }
   }
  

  

  render(){
    if(this.state.switchForm){
      return (
        <Login 
          handleForm={this.handleForm} 
          handlePassword={this.handlePassword} 
          handleUsername={this.handleUsername} 
        />
      )
    }else {
      return (
        <SignUp 
          handleForm={this.handleForm}
          handlePassword={this.handlePassword} 
          handleUsername={this.handleUsername}
        />
      )

    }
  }
}

export default App;
