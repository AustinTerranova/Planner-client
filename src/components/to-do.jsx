import React from "react"

export class ToDo extends React.Component{
    constructor(props){
        super(props)

       
        
    }

    render(){
        return( 
            <div class="wrapper fadeInDown">
                <div id='formContent'>
                    <h2>My List</h2>

                    <ul>
                        <li>go to the gym</li>
                    </ul>
                    <input type='submit' value="add" name="+"/>
                </div>
            </div> 
        )
    }
}