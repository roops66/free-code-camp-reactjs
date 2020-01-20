import React from "react"

function Conditional(props) {

    // if (props.isLoading === true) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // } else {
    //     return (
    //         <h1>Some cool stuff about conditional rendering</h1>
    //     )
    // }

    // condition ? statement if true : statement if false
    // return (
    //     <div>
    //         {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
    //     </div>
    // )

    return <h1>Some cool stuff about conditional rendering</h1>
}

export default Conditional


// Conditional Rendering Pt.2

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             unreadMessages: ["a", "b"]
//         }
//     }
//     //&&
//     //false && false
//     render() {
//         return (
//             <div>
//                 {
//                     this.state.unreadMessages.length > 0 &&
//                     <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
//                 }
//             </div>
//         )
//         }
// }