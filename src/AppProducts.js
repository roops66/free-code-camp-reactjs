import React from "react"
import Product from "./components/Product"
import productData from "./ProductData"

function AppProducts() {
    const productComponents = productData.map(item => <Product key={item.id} product={item} />)

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default AppProducts