import React from "react"

// class AppState extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "Roops",
//             age: 39
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h3>{this.state.age} years old</h3>
//             </div>
//         )
//     }
// }

// export default AppState


// class AppState extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoggedIn: true
//         }
//     }

//     render() {
//         const isLoggedIn = this.state.isLoggedIn
//         let logged = "in"
//         if (isLoggedIn) {
//             logged = "out"
//         }
//         return (
//             <div>
//                 <h1>You are currently logged {logged}</h1>
//             </div>
//         )
//     }
// }

// export default AppState


import React from "react"

class AppState extends Component.React {
    constructor() {
        super()
        this.state = {
            isLoggedIn = true
        }
    }

    render() {
        let logStatus
        if (this.state.isLoggedIn) {
            logStatus = "in"
        } else {
            loggedStatus = "out"
        }

        return (
            <div>
                <h1></h1>
                <h3>You are logged {logStatus}</h3>
            </div>
        )
    }
}

export default AppState 