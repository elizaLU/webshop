import React from "react";

export default function ProductDetail(props) {
  const products = props.products;
  return (
    <div>
      <h1>{products.name}</h1>

      <p>
        <i>{products.price}</i>
      </p>

      <img height="400px" src={products.imageUrl}></img>
    </div>
  );
}
