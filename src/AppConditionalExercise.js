import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if
    they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.


onClick/handleClick event attached to button
props.this.
boolean for logged in
Conditional to determine output

Test for 'true' 
shouldComponentUpdate () - if state is true, change button to display 'Log out'. If state false, change button to display 'Log in'.
When button clicked - update state. Then test if true. if true, button outputs Logged in. if false, button outputs Logged out.

*/

class AppConditionalExercise extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }


    /*
        render() {
            return (
                <div>
                    {
                        this.state.isLoggedIn ?
                            <h1>Logged in</h1> :
                            <h1>Logged out</h1>
                    }
                    {
                        this.state.isLoggedIn ?
                            <button onClick={this.handleClick}>Log out</button> :
                            <button onClick={this.handleClick}>Log in</button>
                    }
                </div>
            )
        }
    }
    */

    render() {
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        )
    }
}
export default AppConditionalExercise
