import React from "react"
import axios from "axios";
import {Link} from 'react-router-dom'

export class SignUp extends React.Component{
    constructor(props){
        super(props)

        this.signUpClick = this.signUpClick.bind(this)
       
        
    }



    signUpClick(event){
        var username = event.target.username.value
        var password = event.target.password.value

        this.props.handleUsername(username)
        this.props.handlePassword(password)
          
        event.preventDefault()
    }

    componentDidUpdate(){
        axios.post('http://localhost:8080/user/signup',{
       username: this.props.username,
       password: this.props.password
     }).then(function (response){
       alert("the response",response.status)
     }).catch(function(err){
         alert(err.response.status)
         if(err.response.status === 401){
            this.props.handleAuthentication(false)
        } else {
          this.props.handleAuthentication(true)
        }
       
       
     })
       }


    render(){
        return( 
            <div class="wrapper fadeInDown">
                <div id="formContent">
                <Link to='/user/login'> <h2  class="inactive underlineHover"> Sign In </h2></Link>
                    <h2  class="active underlineHover">Sign Up</h2>
                    <form onSubmit={this.signUpClick}>
                        <input name="username" type="text" id="signUp" placeholder="New username" class="fadeInSecond"></input>
                        <input name="password" type="text" id="password" placeholder="Password" class="fadeInThird"></input>
                        <input type="submit" value="Sign Up" class="fadeIn Fourth"></input>
                    </form>     
                </div>
            </div>
        )
    }
}