import React from "react"

function handleClick() {
    console.log("I was clicked")
}

function AppEvent() {
    return (
        <div>
            <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100" alt="Bill Murray" />
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default AppEvent