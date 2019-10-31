import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetail(props) {
  const singleProduct = props.singleProduct;
  const addProduct = props.addProduct;

  return (
    <div>
      <h1>{singleProduct.name}</h1>
      <p>
        <i>Price: €{singleProduct.price}</i>
      </p>
      <img
        height="300px"
        src={singleProduct.imageUrl}
        alt={singleProduct.names}
      ></img>
      <br />
      <br />
      <button onClick={() => addProduct(singleProduct)}>ADD TO CART</button>
      <br />
      <br />
      <Link to="/cart"> <button>GO TO CART</button></Link>
    </div>
  );
}
