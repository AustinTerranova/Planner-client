import React from "react"

export class SignUp extends React.Component{
    constructor(props){
        super(props)

        this.signUpClick = this.signUpClick.bind(this)
        this.signInFormClick = this.signInFormClick.bind(this)
        
    }



    signUpClick(event){
        var username = event.target.username.value
        var password = event.target.password.value

        this.props.handleUsername(username)
        this.props.handlePassword(password)
          
        event.preventDefault()
    }

    signInFormClick() {
        this.props.handleForm(true) //when the h2 Sign In is clicked then it will pass true to the switchform function and change the state to true
    }



    render(){
        return( 
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    <h2 onClick={this.signInFormClick} class="inactive underlineHover"> Sign In </h2>
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