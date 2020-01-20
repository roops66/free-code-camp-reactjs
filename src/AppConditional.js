import React from "react"
import Conditional from "./Conditional"

class AppConditional extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return (
            <div>
                {this.state.isLoading ?
                    <h1>Loading...</h1> :
                    // <Conditional isLoading={this.state.isLoading} />
                    <Conditional />}
            </div>
        )
    }
}

export default AppConditional