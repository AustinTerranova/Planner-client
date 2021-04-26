import React from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'

export class Login extends React.Component{
    constructor(props){
        super(props)

        this.loginFormSubmitClick = this.loginFormSubmitClick.bind(this)
      
    }



    loginFormSubmitClick(event) {
        var username = event.target.username.value
        var password = event.target.password.value

        this.props.handleUsername(username)
        this.props.handlePassword(password)
        
        event.preventDefault()
    }

   componentDidUpdate(){
    axios.post('http://localhost:8080/user/login',{
        username: this.props.username,
        password: this.props.password
      }).then(function (response){
        alert("the response",response.status)
      }).catch(function(err){
          alert(err.response.status)
        
        
      })
        
   }

    

    render(){
        return( 
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    <h2 class="active"> Sign In </h2>
                    <Link to='/user/signup'><h2 class="inactive underlineHover">Sign Up</h2></Link>
                    <form  onSubmit={this.loginFormSubmitClick}>
                        <input name="username"  type="text" id="login" placeholder="Username" class="fadeInSecond"></input>
                        <input name="password"  type="text" id="password" placeholder="Password" class="fadeInThird"></input>
                        <Link to='/user/todo'><input  type="submit" value="Log In" class="fadeIn Fourth"/></Link>
                    </form>

                    <div id="forumFooter">
                        <a class="underlineHover" href="#"> Forgot Password?</a>
                    </div>
                </div>
            </div>
        )
    }
}