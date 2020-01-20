import React from "react"

function Product(props) {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-GB", { style: "currency", currency: "GBP" })} - {props.product.description}</p>
        </div>
    )
}

export default Product