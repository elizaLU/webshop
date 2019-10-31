import React from "react";
import { Link } from 'react-router-dom'

export default function CartItems(props) {
  //console.log("here are the album props in Album List: ", props.albums)
  return (
    <div>
      {/* <h3>You added the following items to your cart: </h3> */}
      <ul>
        {props.addProduct.map(product =>
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        )}
      </ul>

    </div>
  )
}