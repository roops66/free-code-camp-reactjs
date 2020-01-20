import React from 'react'

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }


    return (
        <div className="todo-item">
            <input type="checkbox"
                checked={props.task.completed}
                //onChange={() => console.log("It works?")}
                onChange={() => props.handleChange(props.task.id)}
                id="scales"
                name="scales">
            </input>
            <label></label>
            <p style={props.task.completed ? completedStyle : null}>{props.task.text}</p>
        </div >
    )
}

export default TodoItem