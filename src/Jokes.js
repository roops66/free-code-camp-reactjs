import React from "react"

function Jokes(props) {
    return (
        <div className="joke">
            <p style={{ display: !props.question && "none" }}>Question: {props.question}</p>
            <p style={{ color: !props.question && "#B2D6FF" }}>Answer: {props.punchLine}</p>
            <hr></hr>
        </div >
    )
}

export default Jokes