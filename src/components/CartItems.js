import React from "react";
import { Link } from 'react-router-dom'

export default function CartItems(props) {
  console.log("add product ", props.addProduct)
  return (
    <div>
      <h4>You have the following items to your cart:</h4>
      <div>
        {props.addProduct.map(addProduct =>
          <span key={addProduct.id}> 
            <Link to={`/products/${addProduct.id}`}>{addProduct.name}</Link>
            <br />Price: {addProduct.price}
          </span>
        )}
      </div>

    </div>
  )
}