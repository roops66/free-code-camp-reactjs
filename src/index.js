import React from "react"
import ReactDOM from "react-dom"
import AppMeme from "./AppMeme"
import './App.css'

// //import * as serviceWorker from "./serviceWorker";

// //ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// //serviceWorker.unregister();

// function App() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
//     const styles = {
//         fontSize: 30
//     }

//     if (hours < 12) {
//         timeOfDay = "morning"
//         styles.color = "#04756F"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//         styles.color = "#2E0927"
//     } else {
//         timeOfDay = "night"
//         styles.color = "#0D90000"
//     }

//     return (
//         <h1 style={styles}>Good {timeOfDay}!</h1>
//     )
// }

// class App extends React.Component {
//     yourMethodHere() {

//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.props.whatever}</h1>
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header username="Roops" />
//                 <Greeting />
//             </div>
//         )
//     }
// }

// class Header extends React.Component {
//     render() {
//         return (
//             <header>
//                 <p>Welcome, {this.props.username}!</p>
//             </header>
//         )
//     }
// }

// class Greeting extends Component {
//     render() {
//         const date = new Date()
//         const hours = date.getHours()
//         let timeOfDay

//         if (hours < 12) {
//             timeOfDay = "morning"
//         } else if (hours >= 12 && hours < 17) {
//             timeOfDay = "night"
//         } else {
//             timeOfDay = "night"
//         }

//         return (
//             <div>
//                 <h1>Good {timeOfDay} to you, sir or madam!</h1>
//             </div>
//         )
//     }
// }


ReactDOM.render(<AppMeme />, document.getElementById("root"))