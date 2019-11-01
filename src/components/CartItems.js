import React from "react";
import { Link } from 'react-router-dom'

export default function CartItems(props) {
  console.log("Hello product ", props.addProduct)
  const totalPrice = props.addProduct
    .reduce((acc, currVal) => { return acc + parseInt(currVal.price) }, 0)


  return (
    <div>
      <h4>You have {props.addProduct.length} items to your cart:</h4>
      <div>
        {props.addProduct.map(addProduct =>
          <span key={addProduct.id}>
            <Link to={`/products/${addProduct.id}`}>{addProduct.name}</Link>
            <br />Price: {addProduct.price}
            <br />
          </span>
        )}
      </div>
      <p>Total price: {totalPrice}</p>
      <br />
      <button>CLEAR CART</button>
    </div>
  )
}