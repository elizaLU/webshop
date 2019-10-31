import React from "react";
import { Link } from 'react-router-dom'

export default function CartItems(props) {
  console.log("add product ", props.addProduct)
  return (
    <div>
      {/* <h3>You added the following items to your cart: </h3> */}
      <ul>
        {props.addProduct.map(addProduct =>
          <li key={addProduct.id}>
            <Link to={`/products/${addProduct.id}`}>{addProduct.name}</Link>
          </li>
        )}
      </ul>

    </div>
  )
}