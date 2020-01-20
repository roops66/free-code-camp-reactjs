import React from "react"
import FormComponent from "./FormComponent"
//import { forStatement } from "@babel/types";


class FormContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: {
                veg: false,
                vegan: false,
                gluten: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState(prevState => {
                return {
                    dietaryRestrictions: {
                        ...prevState.dietaryRestrictions, // using object spread notation
                        [name]: checked
                    }
                }
            })
            :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                // firstName={this.state.firstName}  Could pass down each individual property
                // data={this.state}  Could pass down the whole state object as a property 'data'.
                // in FormComponent, {this.state.firstName} becomes {this.data.firstName}
                {...this.state}  // Using object spread operator allows us to use {props.firstName} in FormComponent
            />
        )
    }

}

export default FormContainer