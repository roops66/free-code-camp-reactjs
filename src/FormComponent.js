import React from "react"

function FormComponent(props) {
    return (
        <main>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={props.firstName}
                    onChange={props.handleChange}
                    placeholder="First Name"
                />
                <br />
                <input
                    type="text"
                    value={props.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={props.handleChange}
                />
                <br />
                <input
                    type="number"
                    value={props.age}
                    name="age"
                    placeholder="Age"
                    onChange={props.handleChange}
                />
                <br />

                {/* Create radio buttons for gender here */}
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={props.gender === "Female"}
                        onChange={props.handleChange}
                    /> Female
            </label>
                <br />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={props.gender === "Male"}
                        onChange={props.handleChange}
                    /> Male
            </label>
                <br />

                {/* Create select box for location here */}
                <label>Destination</label>
                <select
                    value={props.destination}
                    name="destination"
                    onChange={props.handleChange}
                >

                    <option value="">-- Please choose a destination --</option>
                    <option value="costa rica">Costa Rica</option>
                    <option value="japan">Japan</option>
                    <option value="new york">New York</option>
                </select>

                <br />

                {/* Create check boxes for dietary here */}
                <label>
                    <input type="checkbox"
                        name="veg"
                        onChange={props.handleChange}
                        checked={props.dietaryRestrictions.veg}
                    /> Vegetarian
            </label>
                <br />
                <label>
                    <input type="checkbox"
                        name="vegan"
                        checked={props.dietaryRestrictions.vegan}
                        onChange={props.handleChange}
                    /> Vegan
            </label>
                <br />
                <label>
                    <input type="checkbox"
                        name="gluten"
                        checked={props.dietaryRestrictions.gluten}
                        onChange={props.handleChange}
                    /> Gluten-free
            </label>
                <br />

                {/* Create submit button (generates alert) here */}
                <button>Submit</button>
                <br />
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.firstName} {props.lastName}</p>
            <p>Your age: {props.age}</p>
            <p>Your gender: {props.gender}</p>
            <p>Your destination: {props.destination}</p>
            <p>Your dietary restrictions:</p>
            <p>Vegetarian: {props.dietaryRestrictions.veg ? "Yes" : "No"}</p>
            <p>Vegan:      {props.dietaryRestrictions.vegan ? "Yes" : "No"}</p>
            <p>Gluten-free: {props.dietaryRestrictions.gluten ? "Yes" : "No"}</p>
            {/* React doesn't display Boolean as text on the screen, unless you make it text.
            Using a work-a-round above */}
        </main>
    )
}

export default FormComponent