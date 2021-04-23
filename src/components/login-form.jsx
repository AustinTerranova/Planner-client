import React from 'react'
import axios from "axios";

export class Login extends React.Component{
    constructor(props){
        super(props)

        this.loginFormSubmitClick = this.loginFormSubmitClick.bind(this)
        this.switchToSignUpClick = this.switchToSignUpClick.bind(this)
    }



    loginFormSubmitClick(event) {
        var username = event.target.username.value
        var password = event.target.password.value

        this.props.handleUsername(username)
        this.props.handlePassword(password)
        
        event.preventDefault()
    }

    switchToSignUpClick(){
        this.props.handleForm(false) //when the h2 Sign Up is clicked it will send false to the switchform function which will set the state to false
    }

    

    render(){
        return( 
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    <h2 class="active"> Sign In </h2>
                    <h2 onClick = {this.switchToSignUpClick} class="inactive underlineHover">Sign Up</h2>
                    <form  onSubmit={this.loginFormSubmitClick}>
                        <input name="username"  type="text" id="login" placeholder="Username" class="fadeInSecond"></input>
                        <input name="password"  type="text" id="password" placeholder="Password" class="fadeInThird"></input>
                        <input  type="submit" value="Log In" class="fadeIn Fourth"></input>
                    </form>

                    <div id="forumFooter">
                        <a class="underlineHover" href="#"> Forgot Password?</a>
                    </div>
                </div>
            </div>
        )
    }
}