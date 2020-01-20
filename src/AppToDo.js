//1.Create an event handler in the App component for when the checkbox is clicked (which is an 'onChange' event)
//a. This method will be the trickiest part. Check the comments in the stubbed out method below for some pseudocode
//to help guide you through this part.
//2. Pass the method down to the ToDoItem component.
//3.In the ToDoItem component, make it so that when the onChange event happens, it calls the 'handleChange' method
// and passes the id of the todo into the function


import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"

class AppToDo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        //Update state so that the item with the given id flips 'completed' from false to true (or vice versa)
        //Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in 
        //that update. (Think how you might use the .map method to do this).
        //console.log("Changed!", id)
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} task={item} handleChange={this.handleChange} />)
        return (
            <div className="todo-list">
                {todoComponents}
            </div>

        )
    }
}

export default AppToDo 