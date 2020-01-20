import React from "react"

class AppStateChange extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.downClick = this.downClick.bind(this)
        this.resetClick = this.resetClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    downClick() {
        this.setState(prevState => {
            return {
                count: prevState.count / 2
            }
        })
    }

    resetClick() {
        this.setState(
            { count: 0 }
        )
    }

    render() {
        return (
            <div className="app-state-change">
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <button onClick={this.downClick}>Change down!</button>
                <button onClick={this.resetClick}>Reset!</button>
            </div>
        )
    }
}

export default AppStateChange

